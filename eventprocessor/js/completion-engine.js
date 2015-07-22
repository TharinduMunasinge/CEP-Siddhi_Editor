/**
 * Created by tharindu on 7/1/15.
 */
(function () {

    var completionEngine = window.completionEngine || {};

    window.completionEngine = completionEngine;
    completionEngine.streamList = new StreamList();
    completionEngine.tableList=new TableList();

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




    var identifer="[a-zA-Z_][a-zA-Z_0-9]*";
    var anyChar= "(.|\\n)";
    var ruleBase=[

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
            regex:"from\\s+((?!select).)*$",    //join ,on
            next : "completionEngine.$fromPhraseStreamIdList"
        },
        {
            regex:"define\\s+(stream|table)\\s+"+identifer+"\\s*[(](\\s*"+identifer+"\\s+\\w+\\s*[,])*\\s*"+identifer+"\\s+((?!(int|string|float|object|time|bool|[,]|;))"+anyChar+")*$",
            next: completionEngine.dataTypes
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