/**
 * Created by tharindu on 3/22/15.
 */


var SiddhiQLGrammarListener = require('./SiddhiQLListener').SiddhiQLListener;
KeyPrinter = function() {
    SiddhiQLGrammarListener.call(this); // inherit default listener
    return this;
};

KeyPrinter.prototype = Object.create(SiddhiQLGrammarListener.prototype);
KeyPrinter.prototype.constructor = KeyPrinter;

KeyPrinter.prototype.exitDefinition_stream = function(ctx) {
    var tempStrem =new completionEngine.STREAM();
    tempStrem.setStreamFromDefineStatement(ctx);
    completionEngine.streamList.addStream(tempStrem);

    updateTable(ctx)
};

function updateTable(ctx){
    window.EditorTable.push({state:ctx.start.getInputStream().getText(ctx.start.start,ctx.stop.stop),line:ctx.start.line});
    console.log(window.EditorTable);
}

KeyPrinter.prototype.exitError = function(ctx) {
    updateTable(ctx)
};


// Exit a parse tree produced by SiddhiQLParser#execution_element.
KeyPrinter.prototype.exitExecution_element = function(ctx) {
    updateTable(ctx)
};




// Exit a parse tree produced by SiddhiQLParser#definition_stream.
KeyPrinter.prototype.exitDefinition_stream = function(ctx) {
    updateTable(ctx)
};





// Exit a parse tree produced by SiddhiQLParser#definition_table.
KeyPrinter.prototype.exitDefinition_table = function(ctx) {
    updateTable(ctx)
};




// Exit a parse tree produced by SiddhiQLParser#definition_function.
KeyPrinter.prototype.exitDefinition_function = function(ctx) {
    updateTable(ctx)
};


exports.KeyPrinter = KeyPrinter;
