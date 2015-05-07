/**
 * Created by tharindu on 3/22/15.
 */


var SiddhiQLGrammarListener = require('./SiddhiQLGrammarListener').SiddhiQLGrammarListener;
KeyPrinter = function() {
    SiddhiQLGrammarListener.call(this); // inherit default listener
    return this;
};

KeyPrinter.prototype = Object.create(SiddhiQLGrammarListener.prototype);
KeyPrinter.prototype.constructor = KeyPrinter;

KeyPrinter.prototype.enterDefinition_stream = function(ctx) {
    console.log("Oh, a enter Stream!",ctx);
};


KeyPrinter.prototype.exitDefinition_stream = function(ctx) {
    console.log("Oh, a exit Stream!", ctx.attribute_name(0).name());
};
exports.KeyPrinter = KeyPrinter;
