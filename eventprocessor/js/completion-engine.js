/**
 * Created by tharindu on 7/1/15.
 */

(function () {

    var completionEngine = window.completionEngine || {};

    window.completionEngine = completionEngine;
    completionEngine.streamList=new StreamList();
    completionEngine.tableList=new TableList();
    completionEngine.functionList=new FunctionList();
    var functions="functions";
    var streamProcessors="streamProcessors";
    var windowProcessors="windowProcessors"
    completionEngine.wordList=[];
    completionEngine.extensions={
        math: {
            functions: {
                abs: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames1: ["p1"],
                        argTypes1: [["float", "double"]],
                        returnType1: ["float", "double"]
                    }

                ],

                acos: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                asin: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],


                atan: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                bin: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                ceil: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }
                ],

                conv: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                copySign: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                cos: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }
                ],



                cosh: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                cbrt: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                e: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                exp: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                floor: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }
                ],



                getExponent: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                hex: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }
                ],
                isInfinite: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                ln: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],


                log2: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                log10: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                log: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                max: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }
                ],

                min: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                oct: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                parseDouble: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }
                ],
                parseFloat: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                parseInt: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                parseLong: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                pi: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                signum: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                sin: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                sinh: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }
                ],

                sqrt: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],



                tanh: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }
                ],

                toDegrees: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                tan: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],

                toRadians: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }
                ]


            },
            streamProcessors: {},
            windowProcessors:{}
        },
        str:{
            functions:{
                charAt: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                coalesce: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                concat: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                hex: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                length: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                lower: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                regexp: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                repeat: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                replaceAll: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                replaceFirst: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                reverse: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                strcmp: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                substr: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                trim: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                unhex: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                upper: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ]
            },
            streamProcessors:{},
            windowProcessors:{}
        },
        geo:{
            functions:{
                intersects: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],within: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                withindistance: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ]

            },
            streamProcessors:{
                crosses: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                stationary: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                proximity: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ]
            }
            ,
            windowProcessors:{

            }
        },
        r:{
            functions:{

            },
            streamProcessors:{
                eval: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ],
                evalSource: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                    }

                ]
            },
            windowProcessors:{

            }
        }
    };

    completionEngine.system={
        functions:{
            avg: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ],
            sum: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ],
            count: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ],
            min: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ],
            max: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ],
            coalesce: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ],
            convert: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",

                    argTypes: [["float", "double"]],
                    returnType: ["float", "double"]
                }

            ],
            instanceOfBoolean: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ],
            instanceOfDouble: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ],
            instanceOfFloat: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ],
            instanceOfLong: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ],
            instanceOfString: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ],
            UUID: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ],
            isMatch: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ] ,
            concat: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ]
        },
        streamProcessors:{},
        windowProcessors:{
            time:[
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ],
            timeBatch:[
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ],
            length:[
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ],

            lengthBatch:[
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ],

            unique:[
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ],
            firstunique:[
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function"
                }

            ]
        }
    };
    completionEngine.streamAliasList={};
    completionEngine.eventStore={};
    completionEngine.logicalOperatorList=["IN","AND","OR","NOT","isNull(arg)","IS NULL","CONTAINS"]  ;
    completionEngine.dataTypes=["int","float","double","bool","time","object","string","long"]
    completionEngine.STREAM= Stream;
    completionEngine.TABLE= Table;


    completionEngine.adjustCompleters=function(editor){
        var completorList=[]
        if(completionEngine.checkTheBeginning(editor))
        {
            completorList=[SiddhiEditor.langTools.snippetCompleter,completionEngine.SiddhiCompleter];
        }
        else
        {
            if(completionEngine.checkVariableResovelness(editor)){
                completorList=[completionEngine.SiddhiCompleter];
            }
            else
                completorList=[SiddhiEditor.langTools.keyWordCompleter,completionEngine.SiddhiCompleter];
        }


        editor.completers=completorList;

    }
    completionEngine.checkVariableResovelness=function(editor){
        var objectResolveness=/\w*\.$/i;
        var namespaceResolveness=/\w*:$/i;
        var txt=editor.getValue();
        if(objectResolveness.test(txt) || namespaceResolveness.test(txt))
        {
            return true;
        }
        return false;
    }
    completionEngine.checkTheBeginning=function(editor){
        var pos=editor.getCursorPosition();
        var lineNumber=pos.row
        var wholelinetxt = editor.session.getLine(lineNumber);


        var txt=editor.getValue();
        txt=  editor.session.doc.getTextRange(SiddhiEditor.Range.fromPoints({row: 0, column:0}, pos));
        //var tempStatements=txt.split(";");
        //txt=tempStatements[tempStatements.length-1]



        var tailingSpaces=/^\s*/i;
        var tail=wholelinetxt.substring(editor.getCursorPosition().column);
        if(tailingSpaces.test(tail))
        {
            var identifire="[a-zA-Z][0-9a-zA-Z]*";
            var name=identifire+"(\\."+identifire+")*";

            var annotationElement="("+name+"\\s*[=]\\s*)?[\"'](.)+[\"']"

            var newStatement=/;\s+\S*$/i
            var blockCommentEnd=/[*][/]\s*\S*$/i;
            var lineComment=/--(.)*\s+\S*$/i;
            var begin=/begin\s*\S*$/i;
            var spaces=/^\s*$/;
            var startingWord=/^\s*\S*$/i;

            var annotation= new RegExp("@"+name+"[(]\\s*"+ annotationElement+"(\\s*[,]\\s*"+annotationElement+")*\\s*[)]\\s*\\S*$")

            //console.log(txt,blockCommentEnd.test(txt) )
            if(newStatement.test(txt)|| annotation.test(txt) || blockCommentEnd.test(txt) || lineComment.test(txt) || begin.test(txt) || spaces.test(txt) ||txt=="" || startingWord.test(txt)) {
                //console.log("SUITABE FOR NEW char");

                return true;
            }


        }
        return false;


    }



    completionEngine.SiddhiCompleter = {
        getCompletions: function(editor, session, pos, prefix, callback) {

            completionEngine.calculateCompletions(editor);
            completionEngine.checkTheBeginning(editor);
            callback(null, completionEngine.wordList.map(function(ea) {
                return {definition:ea.value,value: ea.word, score: ea.score, meta: "intelli"}
            }));
        }
    }

    completionEngine.calculateCompletions=function(editor)
    {
        // var text= editor.getValue();


        var pos = editor.getCursorPosition();
        // pos.column++;

        ////console.log(langTools.snippetCompleter);
        var text=  editor.session.doc.getTextRange(SiddhiEditor.Range.fromPoints({row: 0, column:0}, pos));
        var tempStatements=text.split(";");
        text=tempStatements[tempStatements.length-1]

        completionEngine.eventStore={};
        completionEngine.streamAliasList={};

        text=text.replace(/\s/g," ");

        //console.log("input text",text);
        completionEngine.wordList=[];
        if(completionEngine.checkTheBeginning(editor)) {
            completionEngine.wordList = completionEngine.$initialList();

        }

        for(var a=0;a<ruleBase.length;a++)
        {
            //console.log(a);


            if(ruleBase[a].hasOwnProperty("dfa"))
            {
                if(executeFunctionByName(ruleBase[a].dfa, window, [text])){
                    if (Object.prototype.toString.call(ruleBase[a].next) === '[object Array]') {
                        completionEngine.wordList = makeCompletions(ruleBase[a].next)

                    } else {
                        console.error("DONEON ONEONE")
                        completionEngine.wordList = executeFunctionByName(ruleBase[a].next, window, [text]);
                    }

                    return;
                }
            }
            else {
                var regx = new RegExp(ruleBase[a].regex, "i");
                ////console.log(a,text,ruleBase[a],regx.test(text));
                if (regx.test(text)) {
                    //console.log(text, ruleBase[a]);
                    if (Object.prototype.toString.call(ruleBase[a].next) === '[object Array]') {
                        completionEngine.wordList = makeCompletions(ruleBase[a].next)

                    } else {
                        completionEngine.wordList = executeFunctionByName(ruleBase[a].next, window, [text, regx]);
                    }
                    //console.log(completionEngine.wordList);
                    return;
                }
            }
        }
    }


    function makeCompletions(strArray , priority){
        if(isNaN(priority))
            priority=1;

        return strArray.map(function(d,i){
            return {word:d,score:priority}
        })
    }
    function executeFunctionByName(functionName, context , args ) {
        var args = [].slice.call(arguments).splice(2);
        var namespaces = functionName.split(".");
        var func = namespaces.pop();
        for(var i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }
        return context[func].apply(this, args);
    }


    function getStreamAliasList(){
        var aliasList=[];
        for(var propertyName in completionEngine.streamAliasList)
        {
            aliasList.push(propertyName)
        }
        return aliasList;
    }
    function getEventReferences(){
        var aliasList=[];
        for(var propertyName in completionEngine.eventStore)
        {
            aliasList.push(propertyName)
        }
        return aliasList;
    }

    function getExtensionNamesSpaces(objType1,objType2){
        var tempList=[];

        for(var propertyName in completionEngine.extensions) {
            //console.log(completionEngine.extensions[propertyName][objType1],objType1,propertyName)
            //console.log("RESULTS",objType1 && !isEmpty(completionEngine.extensions[propertyName][objType1]))
            if((objType1 && !isEmpty(completionEngine.extensions[propertyName][objType1]))||(objType2 && !isEmpty(completionEngine.extensions[propertyName][objType2]))) {

                    tempList.push(propertyName);
            }
            else if(!objType1 && !objType2)
                tempList.push(propertyName);
        }
        return tempList;
    }

    function isEmpty(map) {
        for(var key in map) {
            if (map.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    function getExtensionFunctionNames(ns){
        var tempList=[];
        for(var propertyName in completionEngine.extensions[ns].functions) {
            tempList.push(propertyName);
        }
        return tempList;
    }
    function getExtensionWindowprocessors(ns){
        var tempList=[];
        for(var propertyName in completionEngine.extensions[ns].windowProcessors) {
            tempList.push(propertyName);
        }
        return tempList;
    }
    function getExtensionStreamProcessors(ns){
        var tempList=[];
        for(var propertyName in completionEngine.extensions[ns].streamProcessors) {
            tempList.push(propertyName);
        }
        return tempList;
    }
    function getSystemFunctemtionNames(){
        var tempList=[];
        for(var propertyName in completionEngine.system.functions) {
            tempList.push(propertyName);
        }
        return tempList;
    }
    function getSystemStreamProcessors(){
        var tempList=[];
        for(var propertyName in completionEngine.system.streamProcessors) {
            tempList.push(propertyName);
        }
        return tempList;
    }
    function getSystemStreamProcessors(){
        var tempList=[];
        for(var propertyName in completionEngine.system.windowProcessors) {
            tempList.push(propertyName);
        }
        return tempList;
    }




    completionEngine._checkNestedSquareBracketInFROMPhrase=function(arg)
    {
        var fromRegxp=/from((?:.(?!from))+)$/i;


        var fromPhrase= fromRegxp.exec(arg[0]);

        if(fromPhrase==null)
            return false;
        var bracketCouter=0;

        for(var index=fromPhrase[1].length-1;index>=0;index--)
        {

            if(fromPhrase[1].charAt(index)=='[')
                bracketCouter++;
            else if(fromPhrase[1].charAt(index)==']')
                bracketCouter--;

            if(bracketCouter>0)
                return true;
        }

        return false;

    }





//definition_function     : DEFINE FUNCTION function_name '[' language_name ']' RETURN attribute_type function_body
    completionEngine.$initialList=function(){
        var intialArray=["define","from","partition","@"];
        return makeCompletions(intialArray)
    }

    completionEngine.$fromPhraseStreamIdList=function(args){

        var tempList=[];
        var essentialKeyWords=["output","outer","inner","left","unidirectional","all","events","insert","delete","update","select","as","join","on","every","group by","having","within"]

        var streams=completionEngine.streamList.getStreamIDList();

        completionEngine.$eventReference(args[0]);
        var refList=getEventReferences();
        refList=refList.map(function(d){return d+"."});


        completionEngine.$streamAlias(args[0]);
        var aliasList=getStreamAliasList();
        aliasList=aliasList.map(function(d){return d+"."});



        essentialKeyWords=makeCompletions(essentialKeyWords,2);
        aliasList=makeCompletions(aliasList,5);
        streams=makeCompletions(streams,3);
        refList=makeCompletions(refList,4);


        tempList=tempList.concat(essentialKeyWords);
        tempList=tempList.concat(aliasList);
        tempList=tempList.concat(streams);
        tempList=tempList.concat(refList);

        return tempList;
    }

    completionEngine.$selectPhraseAttributesList=function(args){
//Stream Alias yet to be handled , both in 'stream as e' form and "e1=stream"
        var keyWords=["as", "insert","group by" , "having","output","update","delete"]



        var sysFunctions=getSystemFunctemtionNames()
        sysFunctions=sysFunctions.map(function(d){
            return d+"(args)";
        })


        var ns=getExtensionNamesSpaces(functions);
        ns= ns.map(function(d){
            return d+":";
        })







        var tableList=completionEngine.tableList.getTableIDList();
        tableList=tableList.map(function(d){
            return d+".";
        })



        var result=args[1].exec(args[0]);
        var streamNames=completionEngine.streamList.getStreamIDList();
        var fromPhrase= /from(.*)select/i.exec(result[0]);

        //console.log(fromPhrase);

        completionEngine.$streamAlias(result[0]);
        var aliasList=getStreamAliasList();
        aliasList=aliasList.map(function(d){return d+"."});



        completionEngine.$eventReference(result[0]);
        var refList=getEventReferences();
        refList=refList.map(function(d){return d+"."});



        var streamIds=[];
        var list=[];
        for(var index=0;index<streamNames.length;index++)
        {
            var regex=new RegExp("[^a-zA-Z]"+streamNames[index]+"[^a-zA-Z0-9]");

            if(fromPhrase[1].match(regex))
            {
                streamIds.push(streamNames[index]);
                tempList=completionEngine.streamList.getAttributeList(streamNames[index])

                list=list.concat(tempList);

                //console.log(list);
            }


        }


        streamIds=streamIds.map(function(d){
            return d+".";
        })



        var tempList=[];

        streamIds=makeCompletions(streamIds,5);
        list=makeCompletions(list,8)
        refList=makeCompletions(refList,7);
        aliasList=makeCompletions(aliasList,6);
        tableList=makeCompletions(tableList,4)
        ns=makeCompletions(ns,3);
        keyWords=makeCompletions(keyWords,1);
        sysFunctions=makeCompletions(sysFunctions,2);



        tempList=(keyWords.concat(ns));
        tempList=tempList.concat(streamIds);
        tempList=tempList.concat(tableList);
        tempList=tempList.concat(refList);
        tempList=tempList.concat(aliasList);
        tempList=tempList.concat(sysFunctions);
        tempList=tempList.concat(list);
        //insert, Aggregate functions  , as In From phrase , e1.
        return  tempList;
    }

    completionEngine.$windowPhrase=function(args){
        var defaultArray=["time(1 min)","timeBatch( 1 min)","length(10)","lengthBatch(10)","externalTime(timeStamp,windowTime)"]


        var nsArray=getExtensionNamesSpaces(windowProcessors);
        nsArray=nsArray.map(function(d,i){
            return d+":";
        })

        defaultArray=defaultArray.concat(nsArray);
        return makeCompletions(defaultArray);
    }

    completionEngine.$processorPhrase=function(args){
        var defaultArray=["window."];

        //if built in streamProcessors exist , they should be included

        defaultArray=makeCompletions(defaultArray,2);

        var nsArray=getExtensionNamesSpaces(windowProcessors,streamProcessors);
        nsArray=nsArray.map(function(d,i){
            return d+":";
        })

        defaultArray=defaultArray.concat(makeCompletions(nsArray,1))
        return (defaultArray);
    }


    completionEngine.$allAttributeList=function(args){
        var tempList=[];
        var streamList=completionEngine.streamList.getStreamIDList();

        for(var s=0; s<streamList.length;s++)
        {

            var attributeList=completionEngine.streamList.getAttributeList(streamList[s])
            tempList=tempList.concat(makeCompletions(attributeList,s));
        }


        return tempList;
    }
    completionEngine.$partitionStreamList=function(args){
        var tempList=[];
        var regx= "("+identifer+")\\s+of\\s+\\w*$";
        var identifier=(new RegExp(regx)).exec(args[0]);

        var streamList=completionEngine.streamList.getStreamIDList();
        for(var i=0;i<streamList.length;i++)
        {
            var attributeList=completionEngine.streamList.getAttributeList(streamList[i])
            for(var index=0;index<attributeList.length;index++)
            {
                if(attributeList[index]==identifier[1])
                {
                    tempList.push(streamList[i])
                    break;
                }
            }
        }


        return makeCompletions(tempList);
    }
    completionEngine.$TableSuggestions=function(args){
        return makeCompletions(completionEngine.tableList.getTableIDList());

    }
    completionEngine.$UDPhrase=function(args){
        var tempList=["for","on"];
        tempList=makeCompletions(tempList,1);

        var tableList= completionEngine.tableList.getTableIDList();
        tempList=tempList.concat(makeCompletions(tableList,2));
        return tempList;
    }
    completionEngine.$UDConditionPhrase=function(args)
    {
        var keywords=["IS NULL","NOT","AND","OR"];

        var result=args[1].exec(args[0]);
        var streamNames=completionEngine.streamList.getStreamIDList();
        var tableNames=completionEngine.tableList.getTableIDList();

        var fromPhrase= /from(.*)(update|delete)/i.exec(result[0]);
        var streamList=[];
        var attributeList=[];
        for(var i=0;i<streamNames.length;i++){
            var regex=new RegExp("[^a-zA-Z]"+streamNames[i]+"[^a-zA-Z0-9]");

            if(fromPhrase[1].match(regex))
            {                streamList.push(streamNames[i]);
                attributeList=attributeList.concat(completionEngine.streamList.getAttributeList(streamNames[i]))
            }
        }



        var tempList=[];

        streamList=streamList.map(function(d){
            return d+"."
        })


        var UDphrase= /(update|delete)(.*)on/i.exec(result[0]);


        var tableList=[];
        for(var i=0;i<tableNames.length;i++){

            var regex=new RegExp("[^a-zA-Z]"+tableNames[i]+"[^a-zA-Z0-9]");

            if(UDphrase[2].match(regex))
            //
            //if( UDphrase[2].indexOf(tableNames[i]))
                tableList.push(tableNames[i]);
        }

        tableList=tableList.map(function(d){
            return d+"."
        })



        tempList=tempList.concat(makeCompletions(tableList,4));
        tempList=tempList.concat(makeCompletions(attributeList,3))

        tempList=tempList.concat(makeCompletions(streamList,2));

        tempList=tempList.concat(makeCompletions(keywords,1));

        return tempList;
    }


    completionEngine.$selectPhraseGroupBy=function(args){
        var keywords=["output","having","insert","delete","update"];
        var result=args[1].exec(args[0]);
        var regx= /from(.*)group/i;

        var fromPhrase=regx.exec(result[0]);

        //console.log(fromPhrase);

        //
        var streamNames=completionEngine.streamList.getStreamIDList();
        var list=[];
        var templist=[];

        list=list.concat(makeCompletions(keywords,1));

        for(var index=0;index<streamNames.length;index++)
        {
            var regex=new RegExp("[^a-zA-Z]"+streamNames[index]+"[^a-zA-Z0-9]");

            if(fromPhrase[1].match(regex))
            {


                templist=templist.concat(completionEngine.streamList.getAttributeList(streamNames[index]));

            }


        }

        streamNames=streamNames.map(function(d){
            return d+".";
        })

        list=list.concat(makeCompletions(streamNames),2)
        list=list.concat(makeCompletions(templist,3));

        return list;
    }
    completionEngine.$selectPhraseHaving=function(args){
        var keywords=["output","insert","delete","update"];
        keywords=keywords.concat(completionEngine.logicalOperatorList);

        var result=args[1].exec(args[0]);
        var regx= /from(.*)having/i;

        var fromPhrase=regx.exec(result[0]);

        //console.log(fromPhrase);

        //
        var streamNames=completionEngine.streamList.getStreamIDList();
        var list=[];
        var templist=[];



        for(var index=0;index<streamNames.length;index++)
        {
            var regex=new RegExp("[^a-zA-Z]"+streamNames[index]+"[^a-zA-Z0-9]");

            if(fromPhrase[1].match(regex))
            {


                templist=templist.concat(completionEngine.streamList.getAttributeList(streamNames[index]));

            }


        }

        streamNames=streamNames.map(function(d){
            return d+".";
        })

        var namespaces=getExtensionNamesSpaces(functions);
        namespaces=namespaces.map(function(d){return d+":"})

        var sysFunctions=getSystemFunctemtionNames();
        sysFunctions=sysFunctions.map(function(d){return d+"(args)"})

        list=list.concat(makeCompletions(keywords,2));
        list=list.concat(makeCompletions(namespaces,3));
        list=list.concat(makeCompletions(sysFunctions,1));
        list=list.concat(makeCompletions(streamNames),4)
        list=list.concat(makeCompletions(templist,5));

        return list;
    }




    completionEngine.$filterPhrase=function(args){
        var keyword=completionEngine.logicalOperatorList;

        var fromRegxp=/from((?:.(?!from))+)$/i
        var result=fromRegxp.exec(args[0]);
        //console.log(result);
        var start=-1;
        var temp="";
        var flag=true;

        completionEngine.eventStore={};
        completionEngine.$eventReference(result[0]);
        for(var i=result[0].length-1;i>=0;i--)
        {
            if(start==0)
            {
                if(/\W/.test(result[0].charAt(i))) {
                    if(flag)
                        continue;
                    else
                        break;
                }
                else {
                    flag=false;
                    temp = result[0].charAt(i) + temp;
                }
            }

            if(result[0].charAt(i)==']')
                start--;

            if(result[0].charAt(i)=='[')
                start++;

        }


        var temparray=[];
        temparray=temparray.concat(makeCompletions(keyword,1))
        //console.log("Event LIST ",temp)
        if(completionEngine.eventStore.hasOwnProperty(temp)) {
            temparray = ["last"]

            temparray= makeCompletions(temparray,2)
        }
        else {


            var refList=getEventReferences();
            refList=makeCompletions(refList,2);

            var attrList=  completionEngine.streamList.getAttributeList(temp);
            attrList=makeCompletions(attrList,3);
            temparray = temparray.concat(refList);
            temparray=temparray.concat(attrList);
        }


        return temparray;
    }

    completionEngine.$nameSpacePhrase=function(args){
        var result=args[1].exec(args[0]);
        var streamNames=completionEngine.streamList.getStreamIDList();

        var windowRegex=/#window.(\w+):$/i
        var streamRegex=/#(\w+):$/i;
        var functionRegex=/(\w+):$/i;
        var tempArray=[];
        var ns="";
        if(windowRegex.test(result[0]))
        {
            var windowResult=windowRegex.exec(result[0]);
            ns=windowResult[1];
            tempArray=getExtensionWindowprocessors(ns);
        }
        else if(streamRegex.test(result[0]))
        {
            var streamFunctionPhrase=streamRegex.exec(result[0]);
            ns=streamFunctionPhrase[1];
            tempArray=getExtensionStreamProcessors(ns);

        }
        else if(functionRegex.test(result[0])){
            var functionPhrase=functionRegex.exec(result[0]);
            ns=functionPhrase[1];
            tempArray=getExtensionFunctionNames(ns);
        }
        else{

        }
        tempArray=tempArray.map(function(d){return d+"(argList)"});

        return makeCompletions(tempArray);

    }

    completionEngine.$resolveVariable=function(args)
    {


        var result=args[1].exec(args[0]);
        var tempList=[];
        //console.log(result);

        completionEngine.$eventReference(args[0]);
        completionEngine.$streamAlias(args[0]);

        if(completionEngine.tableList.hasTable(result[1]))
            tempList=completionEngine.tableList.getAttributeList(result[1]);
        else
        {
            if (completionEngine.eventStore.hasOwnProperty(result[1]))
                result[1] = completionEngine.eventStore[result[1]];

            if (completionEngine.streamAliasList.hasOwnProperty(result[1]))
                result[1] = completionEngine.streamAliasList[result[1]];

            if (completionEngine.streamList.hasStream(result[1]))
                tempList = completionEngine.streamList.getAttributeList(result[1])
        }
        return makeCompletions(tempList,1);
    }

    completionEngine.$streamAlias=function(str)
    {
        var fromRegxp=/from((?:.(?!from))+)$/i;


        var fromPhrase= fromRegxp.exec(str);

        var asRegexp=/\s+as\s+(\w+)\s+/;

        var tokenArray=fromPhrase[1].split(asRegexp);
        var streamIdList=completionEngine.streamList.getStreamIDList();

        var Alias={}
        if(tokenArray.length>=2)
        {
            for(var i=0;i+1<tokenArray.length;i+=2)
            {
                var maxIndex=0;
                var strId="";
                for(var j=0;j<streamIdList.length;j++)
                {
                    var tempIndex=0;
                    if(tempIndex=tokenArray[i].lastIndexOf(streamIdList[j])>=0){
                        if(tempIndex>maxIndex)
                            strId=streamIdList[j];
                    }
                }

                Alias[tokenArray[i+1]]=strId;
                completionEngine.streamAliasList[tokenArray[i+1]]=strId;
            }
        }


        return Alias;
    }

    completionEngine.$eventReferenceHandler= function( args) {

        var results=args[1].exec(args[0]);

        completionEngine.$eventReference(args[0]);
        completionEngine.$streamAlias(args[0]);
        var ref=completionEngine.eventStore[results[1]];
        var tempList=completionEngine.streamList.getAttributeList(ref);
        return makeCompletions(tempList);

    }
    completionEngine.$eventReference =function(str)
    {
        var fromRegxp=/from((?:.(?!from))+)$/i;


        var fromPhrase= fromRegxp.exec(str);

        var eventRef=/(\w+\s*=\s*\w+)/;

        var tokenArray=fromPhrase[1].split(eventRef);
        var streamIdList=completionEngine.streamList.getStreamIDList();


        for(var i=0;i<tokenArray.length;i++)
        {

            var strId="";
            if(tokenArray[i].indexOf('=')>0 && tokenArray[i].indexOf('==')<0 && tokenArray[i].indexOf('<=')<0 && tokenArray[i].indexOf('>=')<0) {


                var keyValue=tokenArray[i].split("=")
                //console.log(keyValue)
                var keyRegex=/(\w+)\s*$/i
                var valueRegex=/^\s*(\w+)/i


                var ref=keyRegex.exec(keyValue[0]);

                var value=valueRegex.exec(keyValue[1]);
                    if(ref && value && ref[0] && value[0]) {
                        value = value[0].trim();

                        ref = ref[0].trim();


                        //Check the match with stream ID
                        // for (var j = 0; j < streamIdList.length; j++) {
                        //    var tempIndex = 0;
                        //    if (tempIndex = tokenArray[i].lastIndexOf(streamIdList[j]) >= 0) {
                        //        if (tempIndex > maxIndex)
                        //            strId = streamIdList[j];
                        //    }
                        //}


                        completionEngine.eventStore[ref] = value;
                    }
            }


        }

    }

    var identifer="[a-zA-Z_][a-zA-Z_0-9]*";
    var anyChar= "(.|\\n)";
    var oneDataType="(int|long|double|bool|object|string|time)"

    var queryActions="insert|delete|update";
    var querySelection="select";
    var queryOutput="output";
    var groupBY="(group\\s+by)";
    var having="having";
    var queryInput="((?!("+querySelection+"|"+queryOutput+"|"+queryActions+"|"+having+"|"+groupBY+")).)*";
    var querySection="((?!("+queryOutput+"|"+queryActions+")).)*";
    var outputRate="((?!(every|"+queryActions+")).)*";
    var outputRateEvery="((?!("+queryActions+")).)*";


    var ruleBase=[
        {
            regex:"@(p(l(a(n?)?)?)?)((?![)]).)*$",
            next:['Plan:name(\'Name of the plan\')', 'Plan:description(\'Description of the plan\')', 'Plan:trace(\'true|false\')', 'Plan:statistics(\'true|false\')', 'Import(\'StreamName\')', 'Export(\'StreamName\')']
        }
        ,
        {
            regex:"@\\w*((?![)]).)*$",
            next:['Config(async=true)','info(name=\'stream_id\')','Plan:name(\'Name of the plan\')', 'Plan:description(\'Description of the plan\')', 'Plan:trace(\'true|false\')', 'Plan:statistics(\'true|false\')', 'Import(\'StreamName\')', 'Export(\'StreamName\')']
        },


        {
            regex:"\\0$",
            next:"completionEngine.$initialList"
        },
        {
            regex: "\\s+in\\s+$",
            next: "completionEngine.$TableSuggestions"
        },
        {
            regex: "from"+queryInput+"#window\\.$",
            next: "completionEngine.$windowPhrase"
        }
        ,
        {
            regex: "from"+queryInput+"#(.)+:$",
            next: "completionEngine.$nameSpacePhrase"
        },
        {
            regex: "(\\w+)\\:$",
            next: "completionEngine.$nameSpacePhrase"
        }
        ,
        {
            regex:"(\\w+)\\[\\s*(\\d+|last|last-\\d+)\\s*\\]\\.$",
            next:"completionEngine.$eventReferenceHandler"
        }
        ,
        {
            regex:"(\\w+)\\.$",
            next:"completionEngine.$resolveVariable"
        }

        ,
        {
            regex: "from"+queryInput+"#\\w*$",
            next: "completionEngine.$processorPhrase"
        }

        ,

        {
            regex:"insert\\s+((?!(into|;)).)*$",
            next :["into","events","all","current","expired"]
        },



        {
            regex:"insert(.)*into((?!(;)).)*$",
            next :"completionEngine.$TableSuggestions"
        },
        {
            regex:"from.*(delete|update)((?!(on|for)).)*$",
            next :"completionEngine.$UDPhrase" //for,on,tablenames
        },

        {
            regex:"from.*(delete|update)\\s+"+identifer+"\\s+for((?!on).)*$",
            next : ["all","current","expired","events","on"]   //all , current, expired , events .
        },
        {
            regex:"from.*(delete|update)\\s+("+identifer+").*on.*((?!;).)*$",
            next :"completionEngine.$UDConditionPhrase"
        },

        {

            regex:"partition\\s+$",
            next :["with"]

        }
        ,
        {
            regex:"partition\\s+with\\s+[(](\\s*"+identifer+"\\s+of\\s+"+identifer+"\\s*[,])*\\s*$",
            next: "completionEngine.$allAttributeList"
        }
        ,
        {
            regex:"partition\\s+with\\s+[(](\\s*"+identifer+"\\s+of\\s+"+identifer+"\\s*[,])*\\s*"+identifer+"\\s+$",
            next: ["of"]
        },
        {
            regex:"partition\\s+with\\s+[(](\\s*"+identifer+"\\s+of\\s+"+identifer+"\\s*[,])*\\s*"+identifer+"\\s+of\\s+$",
            next: "completionEngine.$partitionStreamList"
        }
        ,

        {
            regex:"define\\s*((?!(stream|table|function)).)*$",
            next: ["stream","table","function"]
        }
        ,
        {
            regex:"define\\s+function\\s+"+identifer+"\\s+$",
            next: [" [language_name] "]
        }
        ,

        {
            regex:"define\\s+function\\s+"+identifer+"\\s+\\[\\s*\\w+\\s*\\]\\s+$",
            next: ["return"]
        },
        {
            regex:"define\\s+function\\s+"+identifer+"\\s+\\[\\s*\\w+\\s*\\]\\s+return\\s+$",
            next: completionEngine.dataTypes
        }
        ,
        {
            regex:"define\\s+function\\s+"+identifer+"\\s+\\[\\s*\\w+\\s*\\]\\s+return\\s+"+oneDataType+"\\s+$",
            next: ["{ \"Function Body\"  }"]
        }
        ,
        {
            regex:"define\\s+(stream|table)\\s+"+identifer+"\\s*[(](\\s*"+identifer+"\\s+\\w+\\s*[,])*\\s*"+identifer+"\\s+((?!(int|string|float|object|time|bool|[,]|;))"+anyChar+")*$",
            next: completionEngine.dataTypes
        }
        ,


        {
            regex:"from.*(select)?.*"+groupBY+"?.*having"+querySection+"$", //output | insert | delete | update is possible
            next:"completionEngine.$selectPhraseHaving"
        },
        {
            regex:"from.*(select)?.*"+groupBY+"\\s+"+querySection+"$", // having | output | insert| delete | update is possible
            next:"completionEngine.$selectPhraseGroupBy"
        },

        {
            regex:"from(.)*\\[((?!\\]).)*$",
            next:"completionEngine.$filterPhrase"
        },

        {
            dfa:"completionEngine._checkNestedSquareBracketInFROMPhrase",
            next:"completionEngine.$filterPhrase"
        },

        {
            regex:"from"+queryInput+"$",    //group by , having , output    join ,on "expired events   "from\\s+((?!select).)*$"
            next : "completionEngine.$fromPhraseStreamIdList"
        },

        {
            regex:"from(.)*select\\s+"+querySection+"$",             //output ,group by , having , insert, delete , update
            next:"completionEngine.$selectPhraseAttributesList"
        },

        {
            regex:"from(.)*output\\s+"+outputRate+"$",             //insert, delete , update
            next:["snapshot","all","last","first","every"]
        },

        {
            regex:"from(.)*output.*every"+outputRateEvery+"$",             //insert, delete , update
            next:["events","min","hours","weeks","days","months","years" , "insert","delete","update"]
        }






    ];




    //Stream OBject Constructor
    function Stream()
    {
        this.id;
        this.attributeNames=[];
        this.attributeTypes=[];

    }

    Stream.prototype.setStreamFromDefineStatement=function(ctx)
    {
        this.id=ctx.source().start.text;
        var counter=0;
        while(attrName=ctx.attribute_name(counter)){
            this.attributeNames.push(ctx.attribute_name(counter).start.text);
            this.attributeTypes.push(ctx.attribute_type(counter).start.text);
            counter++;
        }
        this.cacheContext=ctx;
    }
    Stream.prototype.getAttributeNameList=function(){
        return this.attributeNames;
    }
    Stream.prototype.getAttribute=function(i){
        return this.attributeNames[i];
    }


    //StreamList Class
    function StreamList(){
        this.streamList={};
    }

    StreamList.prototype.addStream=function(streamObj)
    {
        this.streamList[streamObj.id]=streamObj;
    }

    StreamList.prototype.getAttributeList=function(id)
    {
        if(!this.streamList[id])
            return [];
        return this.streamList[id].getAttributeNameList();
    }

    StreamList.prototype.clear=function(){
        this.streamList={};
        //var array=this.getStreamIDList();
        //for(var i=0;i<array.length;i++)
        //{
        //    delete completionEngine.streamList[array[i]];
        //}
    }
    StreamList.prototype.getStreamIDList=function()
    {
        var temp=[];
        for(var propertyName in this.streamList) {
            // propertyName is what you want
            // you can get the value like this: myObject[propertyName]
            temp.push(propertyName);
        }

        return temp;
    }

    StreamList.prototype.hasStream=function(id)
    {
        var status=false;
        this.getStreamIDList().map(function(d){
            if(id==d)
                status=true;
        })
        return status;
    }






    //Table class
    function Table()
    {
        this.id;
        this.attributeNames=[];
        this.attributeTypes=[];
    }

    Table.prototype.setTableFromDefineStatement=function(ctx)
    {
        this.id=ctx.source().start.text;
        var counter=0;
        while(attrName=ctx.attribute_name(counter)){
            this.attributeNames.push(ctx.attribute_name(counter).start.text);
            this.attributeTypes.push(ctx.attribute_type(counter).start.text);
            counter++;
        }
        this.cacheContext=ctx;
    }
    Table.prototype.getAttributeNameList=function(){
        return this.attributeNames;
    }
    Table.prototype.getAttribute=function(i){
        return this.attributeNames[i];
    }


    function Function()
    {
        this.id;
        this.lang;
        this.returnType;
        this.code;
    }

    Table.prototype.setTableFromDefineStatement=function(ctx)
    {
        this.id=ctx.source().start.text;
        var counter=0;
        var attrName;

        while(attrName=ctx.attribute_name(counter)){
            this.attributeNames.push(ctx.attribute_name(counter).start.text);
            this.attributeTypes.push(ctx.attribute_type(counter).start.text);
            counter++;
        }
        this.cacheContext=ctx;
    }
    Table.prototype.getAttributeNameList=function(){
        return this.attributeNames;
    }
    Table.prototype.getAttribute=function(i){
        return this.attributeNames[i];
    }




    function TableList(){
        this.tableList={};
    }

    TableList.prototype.addStream=function(tableObj)
    {
        this.tableList[tableObj.id]=tableObj;
    }

    TableList.prototype.getAttributeList=function(id)
    {
        return this.tableList[id].getAttributeNameList();
    }

    TableList.prototype.getTableIDList=function()
    {
        var temp=[];
        for(var propertyName in this.tableList) {
            temp.push(propertyName);
        }

        return temp;
    }

    TableList.prototype.hasTable=function(id)
    {
        var status=false;
        this.getTableIDList().map(function(d){
            if(id==d)
                status=true;
        })
        return status;
    }











    function FunctionList(){
        this.functionList={};
    }

    FunctionList.prototype.addStream=function(functionObj)
    {
        this.functionList[functionObj.id]=functionObj;
    }



    FunctionList.prototype.getFunctionIDList=function()
    {
        var temp=[];
        for(var propertyName in this.functionList) {
            temp.push(propertyName);
        }

        return temp;
    }

})();