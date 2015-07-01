/**
 * Created by tharindu on 7/1/15.
 */
(function () {

   var autocompletion=window.autocompletion || {}
    window.autocompletion=autocompletion

autocompletion.streams=[];

autocompletion.STREAM=Stream;
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
    while( attrName=ctx.attribute_name(counter)){
        this.attributeNames.push(ctx.attribute_name(counter).start.text);
        this.attributeTypes.push(ctx.attribute_type(counter).start.text);
        counter++;
    }

}
Stream.prototype.getAttributeNameList=function(){
    return this.attributeNames;
}
Stream.prototype.getAttribute=function(i){
    return this.attributeNames[i];
}



})();