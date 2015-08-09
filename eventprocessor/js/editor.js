
(function (){

    var SiddhiEditor = window.SiddhiEditor || {};
    SiddhiEditor.ErrorRepeated=false;
    window.SiddhiEditor = SiddhiEditor;
    SiddhiEditor.Range = ace.require("ace/range").Range
    var   editor;
    var antlr4 = require('../eventprocessor/js/client_side_Siddhi_parser/antlr4/index');
    var SiddhiQLGrammarLexer = require('../eventprocessor/js/client_side_Siddhi_parser/gen/SiddhiQLLexer');
    var SiddhiQLGrammarParser = require('../eventprocessor/js/client_side_Siddhi_parser/gen/SiddhiQLParser');
    var KeyPrinter = require('../eventprocessor/js/client_side_Siddhi_parser/gen/KeyPrinter');

    var langTools = ace.require("ace/ext/language_tools");
    var TokenTooltip = require("js/ace_editor/token-tooltip").TokenTooltip;
    var Range = ace.require("ace/range").Range
    SiddhiEditor.langTools=langTools;
    SiddhiEditor.init = function () {




        editor = ace.edit("editor");
        SiddhiEditor.editor=editor;

        editor.tokenTooltip = new TokenTooltip(editor);

        window.queryEditor = SiddhiEditor.editor;
        editor.save = function () {
            console.log("Saved");
        }



        editor.session.setMode("ace/mode/siddhi");
        editor.setTheme("ace/theme/crimson_editor");
        editor.getSession().setUseWrapMode(true);
        editor.getSession().setTabSize(4);
        editor.getSession().setUseSoftTabs(true);
        editor.setShowFoldWidgets(true);
        editor.setBehavioursEnabled(true);
        editor.setHighlightSelectedWord(true);
        editor.setHighlightActiveLine(true);
        editor.setDisplayIndentGuides(true);
        editor.setShowPrintMargin(false);


        SiddhiEditor.lastErrors = 1;
        SiddhiEditor.previousParserTree = "";



        SiddhiEditor.syntaxErrorList = [];
        SiddhiEditor.semanticErrorList = [];

        SiddhiEditor.lastEdit = 0;
        SiddhiEditor.myVar = 0

        langTools.addCompleter(completionEngine.SiddhiCompleter);
        editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: false,
            autoScrollEditorIntoView:true,
            enableMultiselect:true

        });


        editor.getSession().on('change',EditorChangeHandler);

    }

    var EditorChangeHandler=function (e) {

        completionEngine.streamList.clear()


        var position = editor.getCursorPosition();
        if (e.data.text == "\n") {
//            console.log(editor.getCursorPosition());

            for (var index = 0; index < SiddhiEditor.semanticErrorList.length; index++) {
                if (SiddhiEditor.semanticErrorList[index].row > position.row || ( SiddhiEditor.semanticErrorList[index].row == position.row && position.column == 0)) {
                    SiddhiEditor.semanticErrorList[index].row++;
                }
            }
        }
        ;
        if (e.data.action == "removeLines") {
            for (var index = 0; index < SiddhiEditor.semanticErrorList.length; index++) {
                if (SiddhiEditor.semanticErrorList[index].row > position.row || ( SiddhiEditor.semanticErrorList[index].row == position.row && position.column == 0)) {
                    SiddhiEditor.semanticErrorList[index].row--;
                }
            }
        }
        ;
        editor.session.setAnnotations(combine(SiddhiEditor.syntaxErrorList, SiddhiEditor.semanticErrorList));


        if (SiddhiEditor.syntaxErrorList.length > 0) {
            //   editor.session.clearAnnotations();
            SiddhiEditor.syntaxErrorList.splice(0, SiddhiEditor.syntaxErrorList.length);
        }

        var expression = editor.getValue().trim();
        var txt = new antlr4.InputStream(expression)
        var lexer = new SiddhiQLGrammarLexer.SiddhiQLLexer(txt);
        var tokens = new antlr4.CommonTokenStream(lexer);


        var parser = new SiddhiQLGrammarParser.SiddhiQLParser(tokens);

        parser.buildParseTrees = true;
        var  tree = parser.parse();


        editor.session.setAnnotations(combine(SiddhiEditor.syntaxErrorList, SiddhiEditor.semanticErrorList));

        SiddhiEditor.EditorTable = [];
        var printer = new KeyPrinter.KeyPrinter();

        antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);



        if (parser._syntaxErrors == 0 && (SiddhiEditor.previousParserTree != tree.toStringTree(tree, parser))) {
            clearInterval(SiddhiEditor.myVar);
            SiddhiEditor.myVar = setInterval(function () {
                check()
            }, 3000);
        }
        SiddhiEditor.previousParserTree = tree.toStringTree(tree, parser);
        SiddhiEditor.lastErrors = parser._syntaxErrors;
        SiddhiEditor.lastEdit = Date.now();

    }
    var check = function () {

        if (Date.now() - SiddhiEditor.lastEdit >= 3000) {
            var isValid = validateQueries3( editor.getValue(), true);
            if (!isValid) {
                var query = "";
                for (var i = 0; i < SiddhiEditor.EditorTable.length; i++) {
                    query += SiddhiEditor.EditorTable[i].state + "  \n";
                    validateQueries3(query, false, SiddhiEditor.EditorTable[i].line, SiddhiEditor.EditorTable[i].state);

                    if(SiddhiEditor.ErrorRepeated)
                        break;
                }
            }

        }

        clearInterval(SiddhiEditor.myVar);
    }

    var combine=function(array1,array2){
        return array1.concat(array2);
    }

    SiddhiEditor.combine=combine;

}());


