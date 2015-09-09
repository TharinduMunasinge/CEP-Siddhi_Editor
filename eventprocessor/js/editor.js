/*
 * Copyright (c) 2014, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 *  This Script contains the integration code segment of Siddhi editor.
 *  This will set the options of ACE editor, attach client side parser and attach SiddhiCompletion Engine with the editor
 **/
(function (){

    // Adding SiddhiEditor namespace
    var SiddhiEditor = window.SiddhiEditor || {};
    window.SiddhiEditor = SiddhiEditor;
    var loggerContext="SiddhiEditor";

    //Antlr4 JS runtime integration code segment goes here..
    var antlr4 = require(ANTLR_CONSTANT.ROOT+ANTLR_CONSTANT.INDEX);       //Antlr4 JS runtime
    var SiddhiQLGrammarLexer = require(ANTLR_CONSTANT.ROOT+ANTLR_CONSTANT.SIDDHI_LEXER);
    var SiddhiQLGrammarParser = require(ANTLR_CONSTANT.ROOT+ANTLR_CONSTANT.SIDDHI_PARSER);
    var CustomSiddhiListener = require(ANTLR_CONSTANT.ROOT+ANTLR_CONSTANT.SIDDHI_LISTENER);                       //custom listener for Siddhi
    var AceErrorListener=require(ANTLR_CONSTANT.ROOT+ANTLR_CONSTANT.ERROR_LISTENER).AceErrorListener;

    //Adding Additional ACE editor modules
    var langTools = ace.require(ACE_CONSTANT.LANG_TOOL);  //Required for auto completion
    var TokenTooltip = require(ACE_CONSTANT.TOKEN_TOOLTIP).TokenTooltip;   //Required for token tooltips
    var Range = ace.require(ACE_CONSTANT.ACE_RANGE).Range ;        //Required for extracting part of the query
    var editor;
    var foundErrors=false;

    //following variables are exposed to outside
    SiddhiEditor.Range = Range;
    SiddhiEditor.langTools=langTools;
    SiddhiEditor.combine=combine;
    SiddhiEditor.debug=false;


    /**
     * @name : init
     * @augments : Configuration object
     * @description : This method contains the initialization code of for Siddhi Editor
     */
    SiddhiEditor.init = function (config) {

        var realtimeValidation=config.realTimeValidation;
        var divID=config.divID;
        var autoCompletion=config.autoCompletion;
        var readOnly=config.readOnly;
        SiddhiEditor.realTimeValidation=realtimeValidation;

        editor= ace.edit(divID);  //Setting the DivID of the Editor .. Could be <pre> or <div> tags
        SiddhiEditor.editor=editor;   //Saving editor instance in SiddhiEditor namespace for later use
        window.queryEditor = SiddhiEditor.editor; //Saving editor instance in Window namespace . Since other existing JS code refer the editor with 'queryEditor' name

        editor.tokenTooltip = new TokenTooltip(editor);
        editor.save = function () {
            if (SiddhiEditor.debug) {
                console.warn(loggerContext+":"+"save"+"->");
                console.log("Saved");
            }

        };
        editor.setReadOnly(readOnly);
        //Setting the editor options ...
        editor.session.setMode(ACE_CONSTANT.SIDDHI_MODE);   //language mode located at ace_editor/mode-siddhi.js
        editor.setTheme(ACE_CONSTANT.THEME); //theme located at ace_editor/theme/crimson_editor.js
        editor.getSession().setUseWrapMode(true);
        editor.getSession().setTabSize(4);
        editor.getSession().setUseSoftTabs(true);
        editor.setShowFoldWidgets(true);
        editor.setBehavioursEnabled(true);
        editor.setHighlightSelectedWord(true);
        editor.setHighlightActiveLine(true);
        editor.setDisplayIndentGuides(true);
        editor.setShowPrintMargin(false);
        editor.setOptions({
            enableBasicAutocompletion: !readOnly && autoCompletion,
            enableSnippets: !readOnly && autoCompletion,
            enableLiveAutocompletion: false,
            autoScrollEditorIntoView:true,
            enableMultiselect:true
        });

        //State variables for error checking and highlighting
        SiddhiEditor.previousParserTree = "";
        SiddhiEditor.syntaxErrorList = []; //to save the syntax Errors with line numbers
        SiddhiEditor.semanticErrorList = []; // to save semanticErrors with line numbers
        SiddhiEditor.lastEdit = 0;   //lastEditTime
        SiddhiEditor.myVar = 0;  //To store the id in SetTimeout()

        //Adding Siddhi specific autocompleter
        if(!readOnly && autoCompletion) {
            langTools.addCompleter(completionEngine.SiddhiCompleter);
            loadMetaData(ACE_CONSTANT.EXTENSION, "extensions");
            loadMetaData(ACE_CONSTANT.INBUILT, "system");

        }//Attaching editor's onChange event handler


            editor.getSession().on('change', editorChangeHandler);

    };


    /**
     * @name : editorChangeHandler
     * @param e : Event object
     */
    var editorChangeHandler=function (e) {
        completionEngine.streamList.clear();  //clear the exiting streams
        var position = editor.getCursorPosition();
        if (e.data.text == "\n") {
            //if the current input is new line , update the line numbers of semantic error
            for (var index = 0; index < SiddhiEditor.semanticErrorList.length; index++) {
                if (SiddhiEditor.semanticErrorList[index].row > position.row || ( SiddhiEditor.semanticErrorList[index].row == position.row && position.column == 0)) {
                    SiddhiEditor.semanticErrorList[index].row++;
                }
            }
        }

        if (e.data.action == "removeLines") {
            //if current line is deleted , update the line numbers of errors

            for ( index = 0; index < SiddhiEditor.semanticErrorList.length; index++) {
                if (SiddhiEditor.semanticErrorList[index].row > position.row || ( SiddhiEditor.semanticErrorList[index].row == position.row && position.column == 0)) {
                    SiddhiEditor.semanticErrorList[index].row--;
                }
            }
        }

        //setAnnotation() will display the error markers with messages
        //syntaxErrors are recalculated again later using custom antlr4 listener -> Keyprinter
        editor.session.setAnnotations(combine(SiddhiEditor.syntaxErrorList, SiddhiEditor.semanticErrorList));

        if (SiddhiEditor.syntaxErrorList.length > 0) {
            //remove the existing syntax errors
            SiddhiEditor.syntaxErrorList.splice(0, SiddhiEditor.syntaxErrorList.length);
        }

        //following code segment parse the input query using antlr4's parser and lexer
        var expression = editor.getValue().trim(); //input text
        var txt = new antlr4.InputStream(expression);   //input stream
        var lexer = new SiddhiQLGrammarLexer.SiddhiQLLexer(txt);  // generating lexer
        lexer._listeners = [ ];
        lexer._listeners.push(AceErrorListener.INSTANCE);
        var tokens = new antlr4.CommonTokenStream(lexer);  //generated a token stream
        var parser = new SiddhiQLGrammarParser.SiddhiQLParser(tokens);  //using the token stream , generate the parser
        parser._listeners = [ ];
        parser._listeners.push(AceErrorListener.INSTANCE);
        parser.buildParseTrees = true;

        var  tree = parser.parse();
        // parser() is the root level grammar rule. This line generates a parser tree.
        //when generating the new parserTree , the ErrorListener( client_side_Siddhi_parser/antlr4/error/ErrorListener.js -> ConsoleErrorListener.syntaxError()) will be invoked automatically.
        //within that method , the syntax errors are stored in  SiddhiEditor.syntaxErrorList

        //By now the current syntax errors are identified . following line shows the all the errors again.
        editor.session.setAnnotations(combine(SiddhiEditor.syntaxErrorList, SiddhiEditor.semanticErrorList));

        //To maintains the line numbers against the distinct query statements(streamDefinitions,query,functionDefinitions..).
        //statementList is important when checking semantic errors.
        //The input execution plan is submitted to the server statement by statement for semantic error checking
        SiddhiEditor.statementsList = [];

        var parserListener = new CustomSiddhiListener.CustomSiddhiListener();

        //default walker will traverse through the parserTree and generate events . Those events are listen by the parserListener and update the statementsList with line numbers.
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(parserListener, tree);

        if (parser._syntaxErrors == 0 &&
            SiddhiEditor.realTimeValidation  &&(SiddhiEditor.previousParserTree != tree.toStringTree(tree, parser))) {
           //if there are no syntax errors and there is a change in parserTree => check for semantic errors if there is no change in the query within 3sec period
           //3 seconds delay is added to avoid repeated server calls while user is typing the query.

            clearInterval(SiddhiEditor.myVar); //clear the previous interval ID

            SiddhiEditor.myVar = setInterval(function () { //execute semanticCheck() after 3 seconds
                semanticCheck()
            }, 3000);
        }
        SiddhiEditor.previousParserTree = tree.toStringTree(tree, parser); //save the current parser tree
        SiddhiEditor.lastEdit = Date.now(); //Keep user's last edit time

    };


    /**
     * This method send server calls to check the semantic errors
     */
    var semanticCheck = function () {
        foundErrors=false;

        if (Date.now() - SiddhiEditor.lastEdit >= 3000) {
            //if the user has not typed anything after 3 seconds from his last change , then send the query for semantic check
            //check whether the query contains errors or not
            var isValid = submitForSemanticErrors( editor.getValue(), true);

            if (!isValid) {
                //if the query contains semantic  errors. send the query in a constructive manner to sever to get the line number with error
                //This check is needed because the ServerSide compiler doesn't return line numbers of the semantic errors.
                var query = "";
                for (var i = 0; i < SiddhiEditor.statementsList.length; i++) {
                    query += SiddhiEditor.statementsList[i].state + "  \n";
                    submitForSemanticErrors(query, false, SiddhiEditor.statementsList[i].line, SiddhiEditor.statementsList[i].state);
                    if(foundErrors)
                        break;
                }
            }

        }
        clearInterval(SiddhiEditor.myVar);
    };


    /**
     * This is a utility function that will concatenate 2 arrays
     * @param array1
     * @param array2
     * @returns {Array.<T>|string|*}
     */
    var combine=function(array1,array2){
        return array1.concat(array2);
    };


    /**
     * This Method submit the query to server for semantic error checking
     * if(errorCheck)
     *      => This method is called to check the validity of the complete query
     * else
     *      => This method is called to check the validity of the sub statements.
     *
     * Ex: suppose the query is like below
     *     1. define stream Abc( def int) -> A
     *     2. from Abc      -> B
     *     3. select def
     *     4. insert into Ghi
     *
     *     ***To check complete query -> submitForSemanticErrors(executionPlan,true)
     *     ***To find the line number with the error->
     *                  submitForSemanticErrors(A , false , 1 , "define ...")
     *                  submitForSemanticErrors(A+B,false , 3 , "from abc ..")
     *
     * @param executionPlan {string}: The input query
     * @param errorCheck  {boolean}:  isValid check or not.
     * @param line {int}: line number related to the current statement
     * @param checkingQuery {string}: currently checking query statement
     * @returns {boolean} : query is valid or not
     */
    var submitForSemanticErrors=function(executionPlan,errorCheck,line,checkingQuery) {
        if (executionPlan == "") {
            console.log("Query expressions cannot be empty.");
            return;
        }

        var path ="../eventprocessor/validate_siddhi_queries_ajaxprocessor.jsp";
        if(errorCheck) {
            var responseText =jQuery.ajax({
                    type: "POST",
                    url: path,
                    async:false,
                    data: {executionPlan: executionPlan}

                }
            ).responseText;

            SiddhiEditor.semanticErrorList.splice(0, SiddhiEditor.semanticErrorList.length);
            responseText = responseText.trim();
            if (responseText === "success") {
                //if no semantic errors => show again the errors . But this time the semantic errors will not be listed

                SiddhiEditor.editor.session.setAnnotations(combine(SiddhiEditor.semanticErrorList, SiddhiEditor.syntaxErrorList));
                return true;
            }else
                return false;

        }else{
            jQuery.ajax({
                    type: "POST",
                    url: path,
                    async:true,
                    data: {executionPlan: executionPlan},
                    success: function (resultText) {
                        resultText = resultText.trim();
                        //Clear the existing semantic errors
                        SiddhiEditor.semanticErrorList.splice(0, SiddhiEditor.semanticErrorList.length);

                        if (resultText == "success") {
                            //show the errors . Since the semantic error list is cleared by now=> No semantic errors will be shown here.
                            SiddhiEditor.editor.session.setAnnotations(combine(SiddhiEditor.semanticErrorList, SiddhiEditor.syntaxErrorList));
                            return;
                        } else {
                            //update the semanticErrorList
                            SiddhiEditor.semanticErrorList.push({
                                row: line - 1,
                                text: resultText,
                                type: "error",
                                inputText: checkingQuery
                            });

                            //update the state of the foundError.=> stop sending another server call
                            foundErrors=true;

                            //show the errors
                            SiddhiEditor.editor.session.setAnnotations(combine(SiddhiEditor.semanticErrorList, SiddhiEditor.syntaxErrorList));
                            return;
                        }
                    }
                }
            );
        }

    }

    var loadMetaData =function (jsonFile,property){
        jQuery.getJSON( "../eventprocessor/js/"+jsonFile, function( data ) {

            completionEngine[property]=data;
        });
    }

}());


