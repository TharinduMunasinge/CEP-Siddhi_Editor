// Generated from /Development/Projects/Gsoc/antl4/JS_Sample/JSON.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by JSONParser.

function JSONVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

JSONVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
JSONVisitor.prototype.constructor = JSONVisitor;

// Visit a parse tree produced by JSONParser#json.
JSONVisitor.prototype.visitJson = function(ctx) {
};


// Visit a parse tree produced by JSONParser#object.
JSONVisitor.prototype.visitObject = function(ctx) {
};


// Visit a parse tree produced by JSONParser#pair.
JSONVisitor.prototype.visitPair = function(ctx) {
};


// Visit a parse tree produced by JSONParser#array.
JSONVisitor.prototype.visitArray = function(ctx) {
};


// Visit a parse tree produced by JSONParser#value.
JSONVisitor.prototype.visitValue = function(ctx) {
};



exports.JSONVisitor = JSONVisitor;