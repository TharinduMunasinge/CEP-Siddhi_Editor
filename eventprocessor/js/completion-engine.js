/**
 * Created by tharindu on 7/1/15.
 */
(function () {

    var completionEngine = window.completionEngine || {};

    window.completionEngine = completionEngine;
    completionEngine.streamList = new StreamList();
    completionEngine.tableList=new TableList();

    completionEngine.wordList=[];


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
        // pos.column++;
        completionEngine.wordList = makeCompletions(ruleBase[0].next)
        //console.log(langTools.snippetCompleter);

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
            regex:"define\\s+(stream|table)\\s+"+identifer+"\\s*[(](\\s*"+identifer+"\\s+\\w+\\s*[,])*\\s*"+identifer+"\\s+((?!(int|string|float|object|time|bool|[,]|;))"+anyChar+")*$",
            next: completionEngine.dataTypes
        }
        ,

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