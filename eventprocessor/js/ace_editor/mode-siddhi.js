ace.define("ace/mode/siddhi_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

    var SiddhiHighlightRules = function() {

        var keywords = (
            "STREAM|DEFINE|TABLE|FUNCTION|FROM|PARTITION|WINDOW|SELECT|GROUP|BY|HAVING|INSERT|DELETE|UPDATE|RETURN|EVENTS|INTO|OUTPUT|EXPIRED|CURRENT|SNAPSHOT|FOR|RAW|OF|AS|OR|AND|ON|IS|NOT|WITHIN|WITH|BEGIN|END|NULL|EVERY|LAST|ALL|FIRST|JOIN|INNER|OUTER|RIGHT|LEFT|FULL|UNIDIRECTIONAL|YEARS|YEAR|MONTHS|MONTH|WEEKS|WEEK|DAYS|DAY|HOURS|HOUR|MINUTES|MIN|MINUTE|SECONDS|SECOND|SEC|MILLISECONDS|MILLISECOND"
        );

        var builtinConstants = (
            "true|false|null"
        );

        var builtinFunctions = (
            "coalesce|convert|instanceOfBoolean|instanceOfDouble|instanceOfFloat|instanceOfInteger|instanceOfLong|instanceOfString|UUID"
        );
//#05a
        var keywordMapper = this.createKeywordMapper({
            "support.function": builtinFunctions,
            "keyword": keywords,
            "constant.language": builtinConstants,
            "support.type":("int|string|bool|float|double|object"),
            "constant.language.boolean": "true|false",
            "aggregate.function": "count|min|max|avg|sum",
            "window.function": "time|timeBatch|length|lengthBatch|externalTime"
        }, "identifier", true);

        this.$rules = {
            "start" : [
                {
                    token : "annotation.plan",
                    regex : "@Plan\\:\\w+"

                },
                {
                    token : "annotation.common",
                    regex : "@\\w+"

                },
                {
                    token : "comment.line",
                    regex : "--.*$"
                },  {
                    token : "comment.block",
                    start : "/\\*",
                    end : "\\*/"
                }, {
                    token : "string.quoted.double",           // " string
                    regex : '".*?"'
                }, {
                    token : "string.quoted.single",           // ' string
                    regex : "'.*?'"
                }, {
                    token : "constant.numeric", // float
                    regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
                }, {
                    token : keywordMapper,
                    regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                }, {
                    token : "keyword.operator",
                    regex : "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|=|->|@|#|\\?|\\[|\\]|\\(|\\)|\\?|:|;|,|\\."

                },

                {
                    token : "paren.lparen",
                    regex : "[\\(]"
                },

                {
                    token : "paren.rparen",
                    regex : "[\\)]"
                }, {
                    token : "text",
                    regex : "\\s+"
                } ]
        };

        //        var operators=("[|*|+|%|<|>|!|=|]");
        this.normalizeRules();
    };

    oop.inherits(SiddhiHighlightRules, TextHighlightRules);

    exports.SiddhiHighlightRules = SiddhiHighlightRules;
});

ace.define("ace/mode/siddhi",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/siddhi_highlight_rules","ace/range"], function(require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextMode = require("./text").Mode;
    var SiddhiHighlightRules = require("./siddhi_highlight_rules").SiddhiHighlightRules;
    var Range = require("../range").Range;

    var Mode = function() {
        this.HighlightRules = SiddhiHighlightRules;
    };
    oop.inherits(Mode, TextMode);

    (function() {

        this.lineCommentStart = "--";

        this.$id = "ace/mode/siddhi";
    }).call(Mode.prototype);

    exports.Mode = Mode;

});