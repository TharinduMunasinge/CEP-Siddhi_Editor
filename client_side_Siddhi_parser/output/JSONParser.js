// Generated from /Development/Projects/Gsoc/antl4/JS_Sample/JSON.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var JSONListener = require('./JSONListener').JSONListener;
var JSONVisitor = require('./JSONVisitor').JSONVisitor;

var grammarFileName = "JSON.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\16<\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\3\2\3\2\5\2\17\n\2\3",
    "\3\3\3\3\3\3\3\7\3\25\n\3\f\3\16\3\30\13\3\3\3\3\3\3\3\3\3\5\3\36\n",
    "\3\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\7\5(\n\5\f\5\16\5+\13\5\3\5\3\5\3",
    "\5\3\5\5\5\61\n\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6:\n\6\3\6\2\2\7\2\4",
    "\6\b\n\2\2A\2\16\3\2\2\2\4\35\3\2\2\2\6\37\3\2\2\2\b\60\3\2\2\2\n9\3",
    "\2\2\2\f\17\5\4\3\2\r\17\5\b\5\2\16\f\3\2\2\2\16\r\3\2\2\2\17\3\3\2",
    "\2\2\20\21\7\3\2\2\21\26\5\6\4\2\22\23\7\4\2\2\23\25\5\6\4\2\24\22\3",
    "\2\2\2\25\30\3\2\2\2\26\24\3\2\2\2\26\27\3\2\2\2\27\31\3\2\2\2\30\26",
    "\3\2\2\2\31\32\7\5\2\2\32\36\3\2\2\2\33\34\7\3\2\2\34\36\7\5\2\2\35",
    "\20\3\2\2\2\35\33\3\2\2\2\36\5\3\2\2\2\37 \7\f\2\2 !\7\6\2\2!\"\5\n",
    "\6\2\"\7\3\2\2\2#$\7\7\2\2$)\5\n\6\2%&\7\4\2\2&(\5\n\6\2\'%\3\2\2\2",
    "(+\3\2\2\2)\'\3\2\2\2)*\3\2\2\2*,\3\2\2\2+)\3\2\2\2,-\7\b\2\2-\61\3",
    "\2\2\2./\7\7\2\2/\61\7\b\2\2\60#\3\2\2\2\60.\3\2\2\2\61\t\3\2\2\2\62",
    ":\7\f\2\2\63:\7\r\2\2\64:\5\4\3\2\65:\5\b\5\2\66:\7\t\2\2\67:\7\n\2",
    "\28:\7\13\2\29\62\3\2\2\29\63\3\2\2\29\64\3\2\2\29\65\3\2\2\29\66\3",
    "\2\2\29\67\3\2\2\298\3\2\2\2:\13\3\2\2\2\b\16\26\35)\609"].join("");
		

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'{'", "','", "'}'", "':'", "'['", "']'", "'true'", 
                     "'false'", "'null'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', "STRING", "NUMBER", "WS" ];

var ruleNames =  [ "json", "object", "pair", "array", "value" ];

function JSONParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

JSONParser.prototype = Object.create(antlr4.Parser.prototype);
JSONParser.prototype.constructor = JSONParser;

Object.defineProperty(JSONParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

JSONParser.EOF = antlr4.Token.EOF;
JSONParser.T__0 = 1;
JSONParser.T__1 = 2;
JSONParser.T__2 = 3;
JSONParser.T__3 = 4;
JSONParser.T__4 = 5;
JSONParser.T__5 = 6;
JSONParser.T__6 = 7;
JSONParser.T__7 = 8;
JSONParser.T__8 = 9;
JSONParser.STRING = 10;
JSONParser.NUMBER = 11;
JSONParser.WS = 12;

JSONParser.RULE_json = 0;
JSONParser.RULE_object = 1;
JSONParser.RULE_pair = 2;
JSONParser.RULE_array = 3;
JSONParser.RULE_value = 4;

function JsonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_json;
    return this;
}

JsonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JsonContext.prototype.constructor = JsonContext;

JsonContext.prototype.object = function() {
    return this.getTypedRuleContext(ObjectContext,0);
};

JsonContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

JsonContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.enterJson(this);
	}
};

JsonContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.exitJson(this);
	}
};

JsonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSONVisitor ) {
        return visitor.visitJson(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSONParser.prototype.json = function() {

    var localctx = new JsonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, JSONParser.RULE_json);
    try {
        this.state = 12;
        switch(this._input.LA(1)) {
        case JSONParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 10; 
            this.object();
            break;
        case JSONParser.T__4:
            this.enterOuterAlt(localctx, 2);
            this.state = 11; 
            this.array();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_object;
    return this;
}

ObjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectContext.prototype.constructor = ObjectContext;

ObjectContext.prototype.pair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PairContext);
    } else {
        return this.getTypedRuleContext(PairContext,i);
    }
};

ObjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.enterObject(this);
	}
};

ObjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.exitObject(this);
	}
};

ObjectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSONVisitor ) {
        return visitor.visitObject(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSONParser.prototype.object = function() {

    var localctx = new ObjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, JSONParser.RULE_object);
    var _la = 0; // Token type
    try {
        this.state = 27;
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 14;
            this.match(JSONParser.T__0);
            this.state = 15; 
            this.pair();
            this.state = 20;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JSONParser.T__1) {
                this.state = 16;
                this.match(JSONParser.T__1);
                this.state = 17; 
                this.pair();
                this.state = 22;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 23;
            this.match(JSONParser.T__2);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 25;
            this.match(JSONParser.T__0);
            this.state = 26;
            this.match(JSONParser.T__2);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_pair;
    return this;
}

PairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PairContext.prototype.constructor = PairContext;

PairContext.prototype.STRING = function() {
    return this.getToken(JSONParser.STRING, 0);
};

PairContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

PairContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.enterPair(this);
	}
};

PairContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.exitPair(this);
	}
};

PairContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSONVisitor ) {
        return visitor.visitPair(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSONParser.prototype.pair = function() {

    var localctx = new PairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, JSONParser.RULE_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this.match(JSONParser.STRING);
        this.state = 30;
        this.match(JSONParser.T__3);
        this.state = 31; 
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.exitArray(this);
	}
};

ArrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSONVisitor ) {
        return visitor.visitArray(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSONParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, JSONParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.state = 46;
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 33;
            this.match(JSONParser.T__4);
            this.state = 34; 
            this.value();
            this.state = 39;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JSONParser.T__1) {
                this.state = 35;
                this.match(JSONParser.T__1);
                this.state = 36; 
                this.value();
                this.state = 41;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 42;
            this.match(JSONParser.T__5);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 44;
            this.match(JSONParser.T__4);
            this.state = 45;
            this.match(JSONParser.T__5);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.STRING = function() {
    return this.getToken(JSONParser.STRING, 0);
};

ValueContext.prototype.NUMBER = function() {
    return this.getToken(JSONParser.NUMBER, 0);
};

ValueContext.prototype.object = function() {
    return this.getTypedRuleContext(ObjectContext,0);
};

ValueContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSONVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSONParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, JSONParser.RULE_value);
    try {
        this.state = 55;
        switch(this._input.LA(1)) {
        case JSONParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 48;
            this.match(JSONParser.STRING);
            break;
        case JSONParser.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 49;
            this.match(JSONParser.NUMBER);
            break;
        case JSONParser.T__0:
            this.enterOuterAlt(localctx, 3);
            this.state = 50; 
            this.object();
            break;
        case JSONParser.T__4:
            this.enterOuterAlt(localctx, 4);
            this.state = 51; 
            this.array();
            break;
        case JSONParser.T__6:
            this.enterOuterAlt(localctx, 5);
            this.state = 52;
            this.match(JSONParser.T__6);
            break;
        case JSONParser.T__7:
            this.enterOuterAlt(localctx, 6);
            this.state = 53;
            this.match(JSONParser.T__7);
            break;
        case JSONParser.T__8:
            this.enterOuterAlt(localctx, 7);
            this.state = 54;
            this.match(JSONParser.T__8);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.JSONParser = JSONParser;
