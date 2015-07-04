/**
 * Created by tharindu on 7/1/15.
 */
(function () {

    var completionEngine = window.completionEngine || {};

    window.completionEngine = completionEngine;
    completionEngine.streamList = new StreamList();
    completionEngine.STREAM = Stream;


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


})();