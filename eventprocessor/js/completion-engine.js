/**
 * Created by tharindu on 7/1/15.
 */
(function () {

    var completionEngine = window.completionEngine || {};

    window.completionEngine = completionEngine;
    completionEngine.streamList=new StreamList();
    completionEngine.tableList=new TableList();
    completionEngine.functionList=new FunctionList();

    completionEngine.wordList=[];
    completionEngine.extensions={
        math: {
            functions: {
                abs: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                acos: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                asin: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],


                atan: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                bin: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                ceil: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }
                ],

                conv: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                copySign: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                cos: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }
                ],



                cosh: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                cbrt: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],
                e: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                exp: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                floor: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }
                ],



                getExponent: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                hex: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }
                ],
                isInfinite: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                ln: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],


                log2: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],
                log10: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                log: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                max: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }
                ],

                min: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                oct: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                parseDouble: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }
                ],
                parseFloat: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                parseInt: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                parseLong: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                pi: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],
                signum: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                sin: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                sinh: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }
                ],

                sqrt: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],



                tanh: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }
                ],

                toDegrees: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                tan: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],

                toRadians: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
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
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],
                coalesce: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],
                concat: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],
                hex: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],
                length: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],
                lower: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],
                regexp: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],
                repeat: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],
                replaceAll: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],replaceFirst: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],reverse: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],strcmp: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],substr: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],trim: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],unhex: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],
                upper: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
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
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],within: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],withindistance: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ]

            },
            streamProcessors:{
                crosses: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],
                stationary: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],
                proximity: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
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
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
                    }

                ],
                evalSource: [
                    {
                        Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                        argNames: ["p1"],
                        argTypes: [["float", "double"]],
                        returnType: ["float", "double"]
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
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                    argNames: ["p1"],
                    argTypes: [["float", "double"]],
                    returnType: ["float", "double"]
                }

            ],
            coalesce: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                    argNames: ["p1"],
                    argTypes: [["float", "double"]],
                    returnType: ["float", "double"]
                }

            ],
            convert: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                    argNames: ["p1"],
                    argTypes: [["float", "double"]],
                    returnType: ["float", "double"]
                }

            ],
            instanceOfBoolean: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                    argNames: ["p1"],
                    argTypes: [["float", "double"]],
                    returnType: ["float", "double"]
                }

            ],
            instanceOfDouble: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                    argNames: ["p1"],
                    argTypes: [["float", "double"]],
                    returnType: ["float", "double"]
                }

            ],
            instanceOfFloat: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                    argNames: ["p1"],
                    argTypes: [["float", "double"]],
                    returnType: ["float", "double"]
                }

            ],
            instanceOfLong: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                    argNames: ["p1"],
                    argTypes: [["float", "double"]],
                    returnType: ["float", "double"]
                }

            ],
            instanceOfString: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                    argNames: ["p1"],
                    argTypes: [["float", "double"]],
                    returnType: ["float", "double"]
                }

            ],
            UUID: [
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                    argNames: ["p1"],
                    argTypes: [["float", "double"]],
                    returnType: ["float", "double"]
                }

            ]
        },
        streamProcessors:{},
        windowProcessors:{
            time:[
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                    argNames: ["p1"],
                    argTypes: [["float", "double"]],
                    returnType: ["float", "double"]
                }

            ],
            timeBatch:[
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                    argNames: ["p1"],
                    argTypes: [["float", "double"]],
                    returnType: ["float", "double"]
                }

            ],
            length:[
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                    argNames: ["p1"],
                    argTypes: [["float", "double"]],
                    returnType: ["float", "double"]
                }

            ],

            lengthBatch:[
                {
                    Description: "Returns the absolute value of p1. This function wraps the java.lang.Math.abs() function",
                    argNames: ["p1"],
                    argTypes: [["float", "double"]],
                    returnType: ["float", "double"]
                }

            ]
        }
    };
    completionEngine.streamAliasList={};
    completionEngine.eventStore={};
    completionEngine.logicalOperatorList=["and","or","not","isNull(arg)","IS NULL"]  ;
    completionEngine.dataTypes=["int","float","double","bool","long","time","object","string"]
    completionEngine.STREAM= Stream;
    completionEngine.TABLE= Table;


    completionEngine.SiddhiCompleter = {
        getCompletions: function(editor, session, pos, prefix, callback) {

            // wordList like [{"word":"flow","freq":24,"score":300,"flags":"bc","syllables":"1"}]
            console.log("CODE IS WORKING")
             completionEngine.calculateCompletions(editor);

            callback(null, completionEngine.wordList.map(function(ea) {
                return {definition:ea.value,value: ea.word, score: ea.score, meta: "intelli"}
            }));
        }
    }

    function makeCompletions(strArray , priority){
        if(isNaN(priority))
            priority=1;

        return strArray.map(function(d,i){
            return {word:d,score:priority}
        })
    }



    completionEngine.calculateCompletions=function(editor)
    {
        var pos = editor.getCursorPosition();
        var text=  editor.session.doc.getTextRange(Range.fromPoints({row: 0, column:0}, pos));
        for(var a=0;a<ruleBase.length;a++)
        {
            console.log(a);



            var regx = new RegExp(ruleBase[a].regex, "i");

            if (regx.test(text)) {
                if (Object.prototype.toString.call(ruleBase[a].next) === '[object Array]') {
                    completionEngine.wordList = makeCompletions(ruleBase[a].next)

                } else {
                    completionEngine.wordList = executeFunctionByName(ruleBase[a].next, window, [text, regx]);
                }
                console.log(completionEngine.wordList);
                return;
            }

        }




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


    function getExtensionNamesSpaces(){
        var tempList=[];
        for(var propertyName in completionEngine.extensions) {
            tempList.push(propertyName);
        }
        return tempList;
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










    completionEngine.$initialList=function(){
        var intialArray=["define","from","partition","@"];
        return makeCompletions(intialArray)
    }

    completionEngine.$fromPhraseStreamIdList=function(){
        var essentialKeyWords=["outer","left","into","all","events","expired","insert","select","as","join","on","every"]

        var temp=completionEngine.streamList.getStreamIDList();

        temp=makeCompletions(temp,2);
        essentialKeyWords=makeCompletions(essentialKeyWords,1);
        essentialKeyWords=essentialKeyWords.concat(temp);
        return essentialKeyWords;
    }

    completionEngine.$selectPhraseAttributesList=function(args){
//Stream Alias yet to be handled , both in 'stream as e' form and "e1=stream"
        var keyWords=["as", "insert","group by" , "having"]
        keyWords=makeCompletions(keyWords,1);


        var sysFunctions=getSystemFunctemtionNames()
        sysFunctions=sysFunctions=sysFunctions.map(function(d){
            return d+"(args)";
        })

        sysFunctions=makeCompletions(sysFunctions,2);

        var ns=getExtensionNamesSpaces();
        ns= ns.map(function(d){
            return d+":";
        })
        ns=makeCompletions(ns,3);

        var streamIds=completionEngine.streamList.getStreamIDList();

        streamIds=streamIds.map(function(d){
            return d+".";
        })
        streamIds=makeCompletions(streamIds,4);




        var result=args[1].exec(args[0]);
        var streamNames=completionEngine.streamList.getStreamIDList();
        var fromPhrase= /from(.*)select/i.exec(result[0]);

        console.log(fromPhrase);

        completionEngine.$streamAlias(result[0]);
        var aliasList=getStreamAliasList();
        aliasList=aliasList.map(function(d){return d+"."});
        aliasList=makeCompletions(aliasList,6);


        completionEngine.$eventReference(result[0]);
        var refList=getEventReferences();
        refList=refList.map(function(d){return d+"."});
        refList=makeCompletions(refList,7);



        var list=[];
        for(var index=0;index<streamNames.length;index++)
        {

            if(fromPhrase[1].indexOf(streamNames[index])>=0)
            {
                tempList=completionEngine.streamList.getAttributeList(streamNames[index])
                console.log(tempList)
                list=list.concat(tempList);

                console.log(list);
            }


        }

        var tempList=[];
        list=makeCompletions(list,5)
        tempList=(keyWords.concat(ns));
        tempList=tempList.concat(streamIds);
        tempList=tempList.concat(refList);
        tempList=tempList.concat(aliasList);
        tempList=tempList.concat(sysFunctions);
        tempList=tempList.concat(list);
        //insert, Aggregate functions  , as In From phrase , e1.
        return  tempList;
    }

    completionEngine.$windowPhrase=function(args){
        var defaultArray=["time(1 min)","timeBatch( 1 min)","length(10)","lengthBatch(10)","externalTime(timeStamp,windowTime)"]


        var nsArray=getExtensionNamesSpaces();
        nsArray=nsArray.map(function(d,i){
            return d+":";
        })

        defaultArray=defaultArray.concat(nsArray);
        return makeCompletions(defaultArray);
    }

    completionEngine.$processorPhrase=function(args){
        var defaultArray=["window.","transform."];

        //if built in streamProcessors exist , they should be included

        var nsArray=getExtensionNamesSpaces();
        nsArray=nsArray.map(function(d,i){
            return d+":";
        })

        defaultArray=defaultArray.concat(nsArray)
        return makeCompletions(defaultArray);
    }

    completionEngine.$filterPhrase=function(args){
        var fromRegxp=/from((?:.(?!from))+)$/i
        var result=fromRegxp.exec(args[0]);
        console.log(result);
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
        console.log("Event LIST ",temp)
        if(completionEngine.eventStore.hasOwnProperty(temp)) {
            temparray = ["last"]

            temparray= makeCompletions(temparray)
        }
        else {


            var refList=getEventReferences();
            refList=makeCompletions(refList,1);

            var attrList=  completionEngine.streamList.getAttributeList(temp);
            attrList=makeCompletions(attrList,2);
            temparray = temparray.concat(refList)
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
        console.log(result);

        completionEngine.$eventReference(args[0]);
        completionEngine.$streamAlias(args[0]);

        if(completionEngine.eventStore.hasOwnProperty(result[1]))
            result[1]=completionEngine.eventStore[result[1]];

        if(completionEngine.streamAliasList.hasOwnProperty(result[1]))
            result[1]=completionEngine.streamAliasList[result[1]];

        if(completionEngine.streamList.hasStream(result[1]))
            tempList=completionEngine.streamList.getAttributeList(result[1])

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
            if(tokenArray[i].indexOf('=')>0 && tokenArray[i].indexOf('==')<0) {

                var keyValue=tokenArray[i].split("=")
                var ref=keyValue[0];
                var value=keyValue[1];

                //Check the match with stream ID
                // for (var j = 0; j < streamIdList.length; j++) {
                //    var tempIndex = 0;
                //    if (tempIndex = tokenArray[i].lastIndexOf(streamIdList[j]) >= 0) {
                //        if (tempIndex > maxIndex)
                //            strId = streamIdList[j];
                //    }
                //}


                completionEngine.eventStore[ref]=value;
            }


        }

    }

    var identifer="[a-zA-Z_][a-zA-Z_0-9]*";
    var anyChar= "(.|\\n)";
    var oneDataType="(int|long|double|bool|object|string|time)"

    /**
     *
     * Non select  phrases in query
     *
     *
     * object resolveness=> no aditional parameters

     * clear for as handling
     *
     * Make expression work with new lines-DONE
     *
     *
     * Partition handle
     *
     * As handling-> Stream As Done, attribute as not done
     *  as and sequence availabble at from level
     * refactor as/ref logic -> to dynamically calculate the stuff.
     * Join Handling
     * Sequence handling
     *
     *
     */

    var ruleBase=[
        {
            regex: "from(.)+((?!select).)*#window\\.$",
            next: "completionEngine.$windowPhrase"
        }
        ,
        {
            regex: "from(.)+((?!select).)*#(.)+:$",
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
            regex: "from(.)+((?!select).)*#\\w*$",
            next: "completionEngine.$processorPhrase"
        }

        ,
        {
            regex:"from(.)*window(.)*select(.)*insert\\s+((?!(into|;)).)*$",
            next:["all events  ","expired events  ","into"]
        },

        {
            regex:"insert\\s+((?!(into|;)).)*$",
            next :["into","all","events","expired"]
        },


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
            regex:"from(.)*\\[((?!\\]).)*$",
            next:"completionEngine.$filterPhrase"
        },



        {
            regex:"from\\s+((?!select).)*$",    //join ,on
            next : "completionEngine.$fromPhraseStreamIdList"
        },
        {
            regex:"from(.)*select\\s+((?!insert).)*$",
            next:"completionEngine.$selectPhraseAttributesList"
        },

        {
            regex:"from(.)*window(.)*select(.)*\\s+((?!insert).)*$",
            next:["group by","having"] //aggregate functions + attributes list
        }

        ,
        {
            regex:"from(.)*window(.)*select(.)*group\\s+by\\s+(.)*((?!insert).)*$",
            next:["having","insert"] //aggregate functions + attributes list
        }

        ,
        {
            regex:"from(.)*window(.)*select(.)*having(.)*((?!insert).)*$",
            next:["having","insert"] //aggregate functions + attributes list
        }
        ,


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
            regex:"\\w+((?!(define|from|partition)).)*$",
            next:"completionEngine.$initialList"
        }
        ,


        {
            regex:"\\0*$",
            next:"completionEngine.$initialList"
        }




    ];




















    function Stream() {
        this.id;
        this.attributeNames = [];
        this.attributeTypes = [];
    }

    Stream.prototype.setStreamFromDefineStatement = function (ctx) {
        this.id = ctx.source().start.text;
        var counter = 0;
        var attrName;

        while (attrName = ctx.attribute_name(counter)) {
            this.attributeNames.push(ctx.attribute_name(counter).start.text);
            this.attributeTypes.push(ctx.attribute_type(counter).start.text);
            counter++;
        }

    }
    Stream.prototype.getAttributeNameList = function () {
        return this.attributeNames;
    }
    Stream.prototype.getAttribute = function (i) {
        return this.attributeNames[i];
    }



    //StreamList Class
    function StreamList() {
        this.streamList = {};
    }

    StreamList.prototype.addStream = function (streamObj) {
        this.streamList[streamObj.id] = streamObj;
    }

    StreamList.prototype.getAttributeList = function (id) {
        return this.streamList[id].getAttributeNameList();
    }

    StreamList.prototype.clear = function () {
        var array = this.getStreamIDList();
        for (var i = 0; i < array.length; i++) {
            delete completionEngine.streamList[array[i]];
        }
    }
    StreamList.prototype.getStreamIDList = function () {
        var temp = [];
        for (var propertyName in this.streamList) {

            temp.push(propertyName);
        }

        return temp;
    }

    StreamList.prototype.hasStream = function (id) {
        var status = false;
        this.getStreamIDList().map(function (d) {
            if (id == d)
                status = true;
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




    function Function()
    {
        this.id;
        this.lang;
        this.returnType;
        this.code;
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