/*
 * Copyright (c) 2014, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Generated from /Development/Projects/Gsoc/CEP-Siddhi_Editor/client_side_Siddhi_parser/SiddhiQL.g4 by ANTLR 4.5
// jshint ignore: start

var antlr4 = require('../../antlr4-js-runtime');


//import org.wso2.siddhi.query.compiler.exception.SiddhiParserException;


var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\2g\u0400\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t",
    "\b\4\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20",
    "\t\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4",
    "\27\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35",
    "\4\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'",
    "\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61",
    "\t\61\4\62\t\62\4\63\t\63\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\4",
    "8\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t=\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C",
    "\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\t",
    "N\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY",
    "\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\4_\t_\4`\t`\4a\ta\4b\tb\4c\tc\4d\t",
    "d\4e\te\4f\tf\4g\tg\4h\th\4i\ti\4j\tj\4k\tk\4l\tl\4m\tm\4n\tn\4o\to",
    "\4p\tp\4q\tq\4r\tr\4s\ts\4t\tt\4u\tu\4v\tv\4w\tw\4x\tx\4y\ty\4z\tz\4",
    "{\t{\4|\t|\4}\t}\4~\t~\4\177\t\177\4\u0080\t\u0080\4\u0081\t\u0081\4",
    "\u0082\t\u0082\3\2\6\2\u0107\n\2\r\2\16\2\u0108\3\3\6\3\u010c\n\3\r",
    "\3\16\3\u010d\3\3\3\3\3\4\6\4\u0113\n\4\r\4\16\4\u0114\3\4\3\4\7\4\u0119",
    "\n\4\f\4\16\4\u011c\13\4\5\4\u011e\n\4\3\4\3\4\5\4\u0122\n\4\3\4\6\4",
    "\u0125\n\4\r\4\16\4\u0126\5\4\u0129\n\4\3\4\3\4\3\4\6\4\u012e\n\4\r",
    "\4\16\4\u012f\5\4\u0132\n\4\3\4\3\4\6\4\u0136\n\4\r\4\16\4\u0137\3\4",
    "\3\4\5\4\u013c\n\4\3\4\6\4\u013f\n\4\r\4\16\4\u0140\5\4\u0143\n\4\3",
    "\4\3\4\5\4\u0147\n\4\3\5\6\5\u014a\n\5\r\5\16\5\u014b\3\5\3\5\7\5\u0150",
    "\n\5\f\5\16\5\u0153\13\5\5\5\u0155\n\5\3\5\3\5\5\5\u0159\n\5\3\5\6\5",
    "\u015c\n\5\r\5\16\5\u015d\5\5\u0160\n\5\3\5\3\5\3\5\6\5\u0165\n\5\r",
    "\5\16\5\u0166\3\5\3\5\7\5\u016b\n\5\f\5\16\5\u016e\13\5\5\5\u0170\n",
    "\5\3\5\3\5\5\5\u0174\n\5\3\5\6\5\u0177\n\5\r\5\16\5\u0178\3\5\5\5\u017c",
    "\n\5\3\5\6\5\u017f\n\5\r\5\16\5\u0180\5\5\u0183\n\5\3\5\3\5\6\5\u0187",
    "\n\5\r\5\16\5\u0188\3\5\3\5\5\5\u018d\n\5\3\5\6\5\u0190\n\5\r\5\16\5",
    "\u0191\5\5\u0194\n\5\3\5\5\5\u0197\n\5\5\5\u0199\n\5\3\6\3\6\3\7\3\7",
    "\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3",
    "\17\3\20\3\20\3\21\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3\26",
    "\3\26\3\26\3\27\3\27\3\30\3\30\3\30\3\31\3\31\3\31\3\32\3\32\3\32\3",
    "\33\3\33\3\34\3\34\3\34\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3\36\3\36",
    "\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3 \3 \3 \3 \3 \3 \3 \3 \3 \3!\3",
    "!\3!\3!\3!\3!\3\"\3\"\3\"\3\"\3\"\3#\3#\3#\3#\3#\3$\3$\3$\3$\3$\3$\3",
    "$\3$\3$\3$\3%\3%\3%\3%\3%\3%\3%\3&\3&\3&\3&\3&\3&\3&\3\'\3\'\3\'\3\'",
    "\3\'\3\'\3(\3(\3(\3)\3)\3)\3)\3)\3)\3)\3*\3*\3*\3*\3*\3*\3*\3+\3+\3",
    "+\3+\3+\3+\3+\3,\3,\3,\3,\3,\3,\3,\3-\3-\3-\3-\3-\3-\3-\3.\3.\3.\3.",
    "\3.\3.\3.\3/\3/\3/\3/\3/\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\61\3\61",
    "\3\61\3\61\3\61\3\61\3\61\3\61\3\62\3\62\3\62\3\62\3\62\3\62\3\62\3",
    "\62\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\64\3\64\3\64\3\64",
    "\3\65\3\65\3\65\3\65\3\66\3\66\3\66\3\67\3\67\3\67\38\38\38\39\39\3",
    "9\39\3:\3:\3:\3;\3;\3;\3<\3<\3<\3=\3=\3=\3=\3>\3>\3>\3>\3>\3>\3>\3?",
    "\3?\3?\3?\3?\3@\3@\3@\3@\3@\3@\3A\3A\3A\3A\3B\3B\3B\3B\3B\3C\3C\3C\3",
    "C\3C\3C\3D\3D\3D\3D\3D\3E\3E\3E\3E\3F\3F\3F\3F\3F\3F\3G\3G\3G\3G\3G",
    "\3H\3H\3H\3H\3H\3H\3I\3I\3I\3I\3I\3I\3J\3J\3J\3J\3J\3J\3K\3K\3K\3K\3",
    "K\3L\3L\3L\3L\3L\3M\3M\3M\3M\3M\3M\3M\3M\3M\3M\3M\3M\3M\3M\3M\3N\3N",
    "\3N\3N\3N\5N\u02ee\nN\3O\3O\3O\3O\3O\3O\5O\u02f6\nO\3P\3P\3P\3P\3P\5",
    "P\u02fd\nP\3Q\3Q\3Q\3Q\5Q\u0303\nQ\3R\3R\3R\3R\3R\5R\u030a\nR\3S\3S",
    "\3S\3S\3S\3S\3S\5S\u0313\nS\5S\u0315\nS\3T\3T\3T\3T\3T\3T\3T\5T\u031e",
    "\nT\5T\u0320\nT\3U\3U\3U\3U\3U\3U\3U\3U\3U\3U\3U\3U\5U\u032e\nU\5U\u0330",
    "\nU\3V\3V\3V\3V\3V\3V\3W\3W\3W\3W\3W\3X\3X\3X\3X\3X\3X\3X\3Y\3Y\3Y\3",
    "Y\3Z\3Z\3Z\3Z\3Z\3[\3[\3[\3[\3[\3[\3\\\3\\\3\\\3\\\3\\\3\\\3\\\3]\3",
    "]\3]\3]\3]\3^\3^\3^\3^\3^\3^\3^\3_\3_\3_\7_\u0369\n_\f_\16_\u036c\13",
    "_\3_\3_\3_\3`\3`\7`\u0373\n`\f`\16`\u0376\13`\3a\3a\7a\u037a\na\fa\16",
    "a\u037d\13a\3a\3a\3a\7a\u0382\na\fa\16a\u0385\13a\3a\5a\u0388\na\3a",
    "\3a\3b\3b\3b\3b\7b\u0390\nb\fb\16b\u0393\13b\3b\3b\3c\3c\3c\3c\7c\u039b",
    "\nc\fc\16c\u039e\13c\3c\3c\3c\5c\u03a3\nc\3c\3c\3d\3d\3d\3d\3e\3e\3",
    "f\3f\7f\u03af\nf\ff\16f\u03b2\13f\3f\3f\3g\3g\3g\7g\u03b9\ng\fg\16g",
    "\u03bc\13g\3g\3g\3g\3g\3g\7g\u03c3\ng\fg\16g\u03c6\13g\3g\5g\u03c9\n",
    "g\3h\3h\3i\3i\3j\3j\3k\3k\3l\3l\3m\3m\3n\3n\3o\3o\3p\3p\3q\3q\3r\3r",
    "\3s\3s\3t\3t\3u\3u\3v\3v\3w\3w\3x\3x\3y\3y\3z\3z\3{\3{\3|\3|\3}\3}\3",
    "~\3~\3\177\3\177\3\u0080\3\u0080\3\u0081\3\u0081\3\u0082\3\u0082\3\u039c",
    "\2\u0083\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33",
    "\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67",
    "\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65",
    "i\66k\67m8o9q:s;u<w=y>{?}@\177A\u0081B\u0083C\u0085D\u0087E\u0089F\u008b",
    "G\u008dH\u008fI\u0091J\u0093K\u0095L\u0097M\u0099N\u009bO\u009dP\u009f",
    "Q\u00a1R\u00a3S\u00a5T\u00a7U\u00a9V\u00abW\u00adX\u00afY\u00b1Z\u00b3",
    "[\u00b5\\\u00b7]\u00b9^\u00bb_\u00bd`\u00bfa\u00c1b\u00c3c\u00c5d\u00c7",
    "e\u00c9f\u00cbg\u00cd\2\u00cf\2\u00d1\2\u00d3\2\u00d5\2\u00d7\2\u00d9",
    "\2\u00db\2\u00dd\2\u00df\2\u00e1\2\u00e3\2\u00e5\2\u00e7\2\u00e9\2\u00eb",
    "\2\u00ed\2\u00ef\2\u00f1\2\u00f3\2\u00f5\2\u00f7\2\u00f9\2\u00fb\2\u00fd",
    "\2\u00ff\2\u0101\2\u0103\2\3\2&\4\2--//\5\2C\\aac|\6\2\62;C\\aac|\5",
    "\2\2!$$))\4\2\2!$$\4\2\f\f\17\17\5\2\13\r\17\17\"\"\4\2}}\177\177\3",
    "\2$$\3\2\62;\4\2CCcc\4\2DDdd\4\2EEee\4\2FFff\4\2GGgg\4\2HHhh\4\2IIi",
    "i\4\2JJjj\4\2KKkk\4\2LLll\4\2MMmm\4\2NNnn\4\2OOoo\4\2PPpp\4\2QQqq\4",
    "\2RRrr\4\2SSss\4\2TTtt\4\2UUuu\4\2VVvv\4\2WWww\4\2XXxx\4\2YYyy\4\2Z",
    "Zzz\4\2[[{{\4\2\\\\||\u0420\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t",
    "\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2",
    "\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2",
    "\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2",
    "\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65",
    "\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2",
    "A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M",
    "\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3",
    "\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2",
    "\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2",
    "\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2",
    "\2\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085\3\2\2\2\2\u0087",
    "\3\2\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2\2\2\u008f\3\2",
    "\2\2\2\u0091\3\2\2\2\2\u0093\3\2\2\2\2\u0095\3\2\2\2\2\u0097\3\2\2\2",
    "\2\u0099\3\2\2\2\2\u009b\3\2\2\2\2\u009d\3\2\2\2\2\u009f\3\2\2\2\2\u00a1",
    "\3\2\2\2\2\u00a3\3\2\2\2\2\u00a5\3\2\2\2\2\u00a7\3\2\2\2\2\u00a9\3\2",
    "\2\2\2\u00ab\3\2\2\2\2\u00ad\3\2\2\2\2\u00af\3\2\2\2\2\u00b1\3\2\2\2",
    "\2\u00b3\3\2\2\2\2\u00b5\3\2\2\2\2\u00b7\3\2\2\2\2\u00b9\3\2\2\2\2\u00bb",
    "\3\2\2\2\2\u00bd\3\2\2\2\2\u00bf\3\2\2\2\2\u00c1\3\2\2\2\2\u00c3\3\2",
    "\2\2\2\u00c5\3\2\2\2\2\u00c7\3\2\2\2\2\u00c9\3\2\2\2\2\u00cb\3\2\2\2",
    "\3\u0106\3\2\2\2\5\u010b\3\2\2\2\7\u0146\3\2\2\2\t\u0198\3\2\2\2\13",
    "\u019a\3\2\2\2\r\u019c\3\2\2\2\17\u019e\3\2\2\2\21\u01a0\3\2\2\2\23",
    "\u01a2\3\2\2\2\25\u01a4\3\2\2\2\27\u01a6\3\2\2\2\31\u01a8\3\2\2\2\33",
    "\u01aa\3\2\2\2\35\u01ac\3\2\2\2\37\u01ae\3\2\2\2!\u01b0\3\2\2\2#\u01b2",
    "\3\2\2\2%\u01b4\3\2\2\2\'\u01b6\3\2\2\2)\u01b8\3\2\2\2+\u01ba\3\2\2",
    "\2-\u01bd\3\2\2\2/\u01bf\3\2\2\2\61\u01c2\3\2\2\2\63\u01c5\3\2\2\2\65",
    "\u01c8\3\2\2\2\67\u01ca\3\2\2\29\u01cd\3\2\2\2;\u01cf\3\2\2\2=\u01d6",
    "\3\2\2\2?\u01dd\3\2\2\2A\u01e6\3\2\2\2C\u01ec\3\2\2\2E\u01f1\3\2\2\2",
    "G\u01f6\3\2\2\2I\u0200\3\2\2\2K\u0207\3\2\2\2M\u020e\3\2\2\2O\u0214",
    "\3\2\2\2Q\u0217\3\2\2\2S\u021e\3\2\2\2U\u0225\3\2\2\2W\u022c\3\2\2\2",
    "Y\u0233\3\2\2\2[\u023a\3\2\2\2]\u0241\3\2\2\2_\u0246\3\2\2\2a\u024d",
    "\3\2\2\2c\u0255\3\2\2\2e\u025d\3\2\2\2g\u0266\3\2\2\2i\u026a\3\2\2\2",
    "k\u026e\3\2\2\2m\u0271\3\2\2\2o\u0274\3\2\2\2q\u0277\3\2\2\2s\u027b",
    "\3\2\2\2u\u027e\3\2\2\2w\u0281\3\2\2\2y\u0284\3\2\2\2{\u0288\3\2\2\2",
    "}\u028f\3\2\2\2\177\u0294\3\2\2\2\u0081\u029a\3\2\2\2\u0083\u029e\3",
    "\2\2\2\u0085\u02a3\3\2\2\2\u0087\u02a9\3\2\2\2\u0089\u02ae\3\2\2\2\u008b",
    "\u02b2\3\2\2\2\u008d\u02b8\3\2\2\2\u008f\u02bd\3\2\2\2\u0091\u02c3\3",
    "\2\2\2\u0093\u02c9\3\2\2\2\u0095\u02cf\3\2\2\2\u0097\u02d4\3\2\2\2\u0099",
    "\u02d9\3\2\2\2\u009b\u02e8\3\2\2\2\u009d\u02ef\3\2\2\2\u009f\u02f7\3",
    "\2\2\2\u00a1\u02fe\3\2\2\2\u00a3\u0304\3\2\2\2\u00a5\u030b\3\2\2\2\u00a7",
    "\u0316\3\2\2\2\u00a9\u0321\3\2\2\2\u00ab\u0331\3\2\2\2\u00ad\u0337\3",
    "\2\2\2\u00af\u033c\3\2\2\2\u00b1\u0343\3\2\2\2\u00b3\u0347\3\2\2\2\u00b5",
    "\u034c\3\2\2\2\u00b7\u0352\3\2\2\2\u00b9\u0359\3\2\2\2\u00bb\u035e\3",
    "\2\2\2\u00bd\u0365\3\2\2\2\u00bf\u0370\3\2\2\2\u00c1\u0387\3\2\2\2\u00c3",
    "\u038b\3\2\2\2\u00c5\u0396\3\2\2\2\u00c7\u03a6\3\2\2\2\u00c9\u03aa\3",
    "\2\2\2\u00cb\u03ac\3\2\2\2\u00cd\u03c8\3\2\2\2\u00cf\u03ca\3\2\2\2\u00d1",
    "\u03cc\3\2\2\2\u00d3\u03ce\3\2\2\2\u00d5\u03d0\3\2\2\2\u00d7\u03d2\3",
    "\2\2\2\u00d9\u03d4\3\2\2\2\u00db\u03d6\3\2\2\2\u00dd\u03d8\3\2\2\2\u00df",
    "\u03da\3\2\2\2\u00e1\u03dc\3\2\2\2\u00e3\u03de\3\2\2\2\u00e5\u03e0\3",
    "\2\2\2\u00e7\u03e2\3\2\2\2\u00e9\u03e4\3\2\2\2\u00eb\u03e6\3\2\2\2\u00ed",
    "\u03e8\3\2\2\2\u00ef\u03ea\3\2\2\2\u00f1\u03ec\3\2\2\2\u00f3\u03ee\3",
    "\2\2\2\u00f5\u03f0\3\2\2\2\u00f7\u03f2\3\2\2\2\u00f9\u03f4\3\2\2\2\u00fb",
    "\u03f6\3\2\2\2\u00fd\u03f8\3\2\2\2\u00ff\u03fa\3\2\2\2\u0101\u03fc\3",
    "\2\2\2\u0103\u03fe\3\2\2\2\u0105\u0107\5\u00cfh\2\u0106\u0105\3\2\2",
    "\2\u0107\u0108\3\2\2\2\u0108\u0106\3\2\2\2\u0108\u0109\3\2\2\2\u0109",
    "\4\3\2\2\2\u010a\u010c\5\u00cfh\2\u010b\u010a\3\2\2\2\u010c\u010d\3",
    "\2\2\2\u010d\u010b\3\2\2\2\u010d\u010e\3\2\2\2\u010e\u010f\3\2\2\2\u010f",
    "\u0110\5\u00e7t\2\u0110\6\3\2\2\2\u0111\u0113\5\u00cfh\2\u0112\u0111",
    "\3\2\2\2\u0113\u0114\3\2\2\2\u0114\u0112\3\2\2\2\u0114\u0115\3\2\2\2",
    "\u0115\u011d\3\2\2\2\u0116\u011a\7\60\2\2\u0117\u0119\5\u00cfh\2\u0118",
    "\u0117\3\2\2\2\u0119\u011c\3\2\2\2\u011a\u0118\3\2\2\2\u011a\u011b\3",
    "\2\2\2\u011b\u011e\3\2\2\2\u011c\u011a\3\2\2\2\u011d\u0116\3\2\2\2\u011d",
    "\u011e\3\2\2\2\u011e\u0128\3\2\2\2\u011f\u0121\5\u00d9m\2\u0120\u0122",
    "\t\2\2\2\u0121\u0120\3\2\2\2\u0121\u0122\3\2\2\2\u0122\u0124\3\2\2\2",
    "\u0123\u0125\5\u00cfh\2\u0124\u0123\3\2\2\2\u0125\u0126\3\2\2\2\u0126",
    "\u0124\3\2\2\2\u0126\u0127\3\2\2\2\u0127\u0129\3\2\2\2\u0128\u011f\3",
    "\2\2\2\u0128\u0129\3\2\2\2\u0129\u012a\3\2\2\2\u012a\u012b\5\u00dbn",
    "\2\u012b\u0147\3\2\2\2\u012c\u012e\5\u00cfh\2\u012d\u012c\3\2\2\2\u012e",
    "\u012f\3\2\2\2\u012f\u012d\3\2\2\2\u012f\u0130\3\2\2\2\u0130\u0132\3",
    "\2\2\2\u0131\u012d\3\2\2\2\u0131\u0132\3\2\2\2\u0132\u0133\3\2\2\2\u0133",
    "\u0135\7\60\2\2\u0134\u0136\5\u00cfh\2\u0135\u0134\3\2\2\2\u0136\u0137",
    "\3\2\2\2\u0137\u0135\3\2\2\2\u0137\u0138\3\2\2\2\u0138\u0142\3\2\2\2",
    "\u0139\u013b\5\u00d9m\2\u013a\u013c\t\2\2\2\u013b\u013a\3\2\2\2\u013b",
    "\u013c\3\2\2\2\u013c\u013e\3\2\2\2\u013d\u013f\5\u00cfh\2\u013e\u013d",
    "\3\2\2\2\u013f\u0140\3\2\2\2\u0140\u013e\3\2\2\2\u0140\u0141\3\2\2\2",
    "\u0141\u0143\3\2\2\2\u0142\u0139\3\2\2\2\u0142\u0143\3\2\2\2\u0143\u0144",
    "\3\2\2\2\u0144\u0145\5\u00dbn\2\u0145\u0147\3\2\2\2\u0146\u0112\3\2",
    "\2\2\u0146\u0131\3\2\2\2\u0147\b\3\2\2\2\u0148\u014a\5\u00cfh\2\u0149",
    "\u0148\3\2\2\2\u014a\u014b\3\2\2\2\u014b\u0149\3\2\2\2\u014b\u014c\3",
    "\2\2\2\u014c\u0154\3\2\2\2\u014d\u0151\7\60\2\2\u014e\u0150\5\u00cf",
    "h\2\u014f\u014e\3\2\2\2\u0150\u0153\3\2\2\2\u0151\u014f\3\2\2\2\u0151",
    "\u0152\3\2\2\2\u0152\u0155\3\2\2\2\u0153\u0151\3\2\2\2\u0154\u014d\3",
    "\2\2\2\u0154\u0155\3\2\2\2\u0155\u015f\3\2\2\2\u0156\u0158\5\u00d9m",
    "\2\u0157\u0159\t\2\2\2\u0158\u0157\3\2\2\2\u0158\u0159\3\2\2\2\u0159",
    "\u015b\3\2\2\2\u015a\u015c\5\u00cfh\2\u015b\u015a\3\2\2\2\u015c\u015d",
    "\3\2\2\2\u015d\u015b\3\2\2\2\u015d\u015e\3\2\2\2\u015e\u0160\3\2\2\2",
    "\u015f\u0156\3\2\2\2\u015f\u0160\3\2\2\2\u0160\u0161\3\2\2\2\u0161\u0162",
    "\5\u00d7l\2\u0162\u0199\3\2\2\2\u0163\u0165\5\u00cfh\2\u0164\u0163\3",
    "\2\2\2\u0165\u0166\3\2\2\2\u0166\u0164\3\2\2\2\u0166\u0167\3\2\2\2\u0167",
    "\u016f\3\2\2\2\u0168\u016c\7\60\2\2\u0169\u016b\5\u00cfh\2\u016a\u0169",
    "\3\2\2\2\u016b\u016e\3\2\2\2\u016c\u016a\3\2\2\2\u016c\u016d\3\2\2\2",
    "\u016d\u0170\3\2\2\2\u016e\u016c\3\2\2\2\u016f\u0168\3\2\2\2\u016f\u0170",
    "\3\2\2\2\u0170\u0171\3\2\2\2\u0171\u0173\5\u00d9m\2\u0172\u0174\t\2",
    "\2\2\u0173\u0172\3\2\2\2\u0173\u0174\3\2\2\2\u0174\u0176\3\2\2\2\u0175",
    "\u0177\5\u00cfh\2\u0176\u0175\3\2\2\2\u0177\u0178\3\2\2\2\u0178\u0176",
    "\3\2\2\2\u0178\u0179\3\2\2\2\u0179\u017b\3\2\2\2\u017a\u017c\5\u00d7",
    "l\2\u017b\u017a\3\2\2\2\u017b\u017c\3\2\2\2\u017c\u0199\3\2\2\2\u017d",
    "\u017f\5\u00cfh\2\u017e\u017d\3\2\2\2\u017f\u0180\3\2\2\2\u0180\u017e",
    "\3\2\2\2\u0180\u0181\3\2\2\2\u0181\u0183\3\2\2\2\u0182\u017e\3\2\2\2",
    "\u0182\u0183\3\2\2\2\u0183\u0184\3\2\2\2\u0184\u0186\7\60\2\2\u0185",
    "\u0187\5\u00cfh\2\u0186\u0185\3\2\2\2\u0187\u0188\3\2\2\2\u0188\u0186",
    "\3\2\2\2\u0188\u0189\3\2\2\2\u0189\u0193\3\2\2\2\u018a\u018c\5\u00d9",
    "m\2\u018b\u018d\t\2\2\2\u018c\u018b\3\2\2\2\u018c\u018d\3\2\2\2\u018d",
    "\u018f\3\2\2\2\u018e\u0190\5\u00cfh\2\u018f\u018e\3\2\2\2\u0190\u0191",
    "\3\2\2\2\u0191\u018f\3\2\2\2\u0191\u0192\3\2\2\2\u0192\u0194\3\2\2\2",
    "\u0193\u018a\3\2\2\2\u0193\u0194\3\2\2\2\u0194\u0196\3\2\2\2\u0195\u0197",
    "\5\u00d7l\2\u0196\u0195\3\2\2\2\u0196\u0197\3\2\2\2\u0197\u0199\3\2",
    "\2\2\u0198\u0149\3\2\2\2\u0198\u0164\3\2\2\2\u0198\u0182\3\2\2\2\u0199",
    "\n\3\2\2\2\u019a\u019b\7<\2\2\u019b\f\3\2\2\2\u019c\u019d\7=\2\2\u019d",
    "\16\3\2\2\2\u019e\u019f\7\60\2\2\u019f\20\3\2\2\2\u01a0\u01a1\7*\2\2",
    "\u01a1\22\3\2\2\2\u01a2\u01a3\7+\2\2\u01a3\24\3\2\2\2\u01a4\u01a5\7",
    "]\2\2\u01a5\26\3\2\2\2\u01a6\u01a7\7_\2\2\u01a7\30\3\2\2\2\u01a8\u01a9",
    "\7.\2\2\u01a9\32\3\2\2\2\u01aa\u01ab\7?\2\2\u01ab\34\3\2\2\2\u01ac\u01ad",
    "\7,\2\2\u01ad\36\3\2\2\2\u01ae\u01af\7-\2\2\u01af \3\2\2\2\u01b0\u01b1",
    "\7A\2\2\u01b1\"\3\2\2\2\u01b2\u01b3\7/\2\2\u01b3$\3\2\2\2\u01b4\u01b5",
    "\7\61\2\2\u01b5&\3\2\2\2\u01b6\u01b7\7\'\2\2\u01b7(\3\2\2\2\u01b8\u01b9",
    "\7>\2\2\u01b9*\3\2\2\2\u01ba\u01bb\7>\2\2\u01bb\u01bc\7?\2\2\u01bc,",
    "\3\2\2\2\u01bd\u01be\7@\2\2\u01be.\3\2\2\2\u01bf\u01c0\7@\2\2\u01c0",
    "\u01c1\7?\2\2\u01c1\60\3\2\2\2\u01c2\u01c3\7?\2\2\u01c3\u01c4\7?\2\2",
    "\u01c4\62\3\2\2\2\u01c5\u01c6\7#\2\2\u01c6\u01c7\7?\2\2\u01c7\64\3\2",
    "\2\2\u01c8\u01c9\7B\2\2\u01c9\66\3\2\2\2\u01ca\u01cb\7/\2\2\u01cb\u01cc",
    "\7@\2\2\u01cc8\3\2\2\2\u01cd\u01ce\7%\2\2\u01ce:\3\2\2\2\u01cf\u01d0",
    "\5\u00f5{\2\u01d0\u01d1\5\u00f7|\2\u01d1\u01d2\5\u00f3z\2\u01d2\u01d3",
    "\5\u00d9m\2\u01d3\u01d4\5\u00d1i\2\u01d4\u01d5\5\u00e9u\2\u01d5<\3\2",
    "\2\2\u01d6\u01d7\5\u00d7l\2\u01d7\u01d8\5\u00d9m\2\u01d8\u01d9\5\u00db",
    "n\2\u01d9\u01da\5\u00e1q\2\u01da\u01db\5\u00ebv\2\u01db\u01dc\5\u00d9",
    "m\2\u01dc>\3\2\2\2\u01dd\u01de\5\u00dbn\2\u01de\u01df\5\u00f9}\2\u01df",
    "\u01e0\5\u00ebv\2\u01e0\u01e1\5\u00d5k\2\u01e1\u01e2\5\u00f7|\2\u01e2",
    "\u01e3\5\u00e1q\2\u01e3\u01e4\5\u00edw\2\u01e4\u01e5\5\u00ebv\2\u01e5",
    "@\3\2\2\2\u01e6\u01e7\5\u00f7|\2\u01e7\u01e8\5\u00d1i\2\u01e8\u01e9",
    "\5\u00d3j\2\u01e9\u01ea\5\u00e7t\2\u01ea\u01eb\5\u00d9m\2\u01ebB\3\2",
    "\2\2\u01ec\u01ed\5\u00efx\2\u01ed\u01ee\5\u00e7t\2\u01ee\u01ef\5\u00d1",
    "i\2\u01ef\u01f0\5\u00ebv\2\u01f0D\3\2\2\2\u01f1\u01f2\5\u00dbn\2\u01f2",
    "\u01f3\5\u00f3z\2\u01f3\u01f4\5\u00edw\2\u01f4\u01f5\5\u00e9u\2\u01f5",
    "F\3\2\2\2\u01f6\u01f7\5\u00efx\2\u01f7\u01f8\5\u00d1i\2\u01f8\u01f9",
    "\5\u00f3z\2\u01f9\u01fa\5\u00f7|\2\u01fa\u01fb\5\u00e1q\2\u01fb\u01fc",
    "\5\u00f7|\2\u01fc\u01fd\5\u00e1q\2\u01fd\u01fe\5\u00edw\2\u01fe\u01ff",
    "\5\u00ebv\2\u01ffH\3\2\2\2\u0200\u0201\5\u00fd\177\2\u0201\u0202\5\u00e1",
    "q\2\u0202\u0203\5\u00ebv\2\u0203\u0204\5\u00d7l\2\u0204\u0205\5\u00ed",
    "w\2\u0205\u0206\5\u00fd\177\2\u0206J\3\2\2\2\u0207\u0208\5\u00f5{\2",
    "\u0208\u0209\5\u00d9m\2\u0209\u020a\5\u00e7t\2\u020a\u020b\5\u00d9m",
    "\2\u020b\u020c\5\u00d5k\2\u020c\u020d\5\u00f7|\2\u020dL\3\2\2\2\u020e",
    "\u020f\5\u00ddo\2\u020f\u0210\5\u00f3z\2\u0210\u0211\5\u00edw\2\u0211",
    "\u0212\5\u00f9}\2\u0212\u0213\5\u00efx\2\u0213N\3\2\2\2\u0214\u0215",
    "\5\u00d3j\2\u0215\u0216\5\u0101\u0081\2\u0216P\3\2\2\2\u0217\u0218\5",
    "\u00dfp\2\u0218\u0219\5\u00d1i\2\u0219\u021a\5\u00fb~\2\u021a\u021b",
    "\5\u00e1q\2\u021b\u021c\5\u00ebv\2\u021c\u021d\5\u00ddo\2\u021dR\3\2",
    "\2\2\u021e\u021f\5\u00e1q\2\u021f\u0220\5\u00ebv\2\u0220\u0221\5\u00f5",
    "{\2\u0221\u0222\5\u00d9m\2\u0222\u0223\5\u00f3z\2\u0223\u0224\5\u00f7",
    "|\2\u0224T\3\2\2\2\u0225\u0226\5\u00d7l\2\u0226\u0227\5\u00d9m\2\u0227",
    "\u0228\5\u00e7t\2\u0228\u0229\5\u00d9m\2\u0229\u022a\5\u00f7|\2\u022a",
    "\u022b\5\u00d9m\2\u022bV\3\2\2\2\u022c\u022d\5\u00f9}\2\u022d\u022e",
    "\5\u00efx\2\u022e\u022f\5\u00d7l\2\u022f\u0230\5\u00d1i\2\u0230\u0231",
    "\5\u00f7|\2\u0231\u0232\5\u00d9m\2\u0232X\3\2\2\2\u0233\u0234\5\u00f3",
    "z\2\u0234\u0235\5\u00d9m\2\u0235\u0236\5\u00f7|\2\u0236\u0237\5\u00f9",
    "}\2\u0237\u0238\5\u00f3z\2\u0238\u0239\5\u00ebv\2\u0239Z\3\2\2\2\u023a",
    "\u023b\5\u00d9m\2\u023b\u023c\5\u00fb~\2\u023c\u023d\5\u00d9m\2\u023d",
    "\u023e\5\u00ebv\2\u023e\u023f\5\u00f7|\2\u023f\u0240\5\u00f5{\2\u0240",
    "\\\3\2\2\2\u0241\u0242\5\u00e1q\2\u0242\u0243\5\u00ebv\2\u0243\u0244",
    "\5\u00f7|\2\u0244\u0245\5\u00edw\2\u0245^\3\2\2\2\u0246\u0247\5\u00ed",
    "w\2\u0247\u0248\5\u00f9}\2\u0248\u0249\5\u00f7|\2\u0249\u024a\5\u00ef",
    "x\2\u024a\u024b\5\u00f9}\2\u024b\u024c\5\u00f7|\2\u024c`\3\2\2\2\u024d",
    "\u024e\5\u00d9m\2\u024e\u024f\5\u00ff\u0080\2\u024f\u0250\5\u00efx\2",
    "\u0250\u0251\5\u00e1q\2\u0251\u0252\5\u00f3z\2\u0252\u0253\5\u00d9m",
    "\2\u0253\u0254\5\u00d7l\2\u0254b\3\2\2\2\u0255\u0256\5\u00d5k\2\u0256",
    "\u0257\5\u00f9}\2\u0257\u0258\5\u00f3z\2\u0258\u0259\5\u00f3z\2\u0259",
    "\u025a\5\u00d9m\2\u025a\u025b\5\u00ebv\2\u025b\u025c\5\u00f7|\2\u025c",
    "d\3\2\2\2\u025d\u025e\5\u00f5{\2\u025e\u025f\5\u00ebv\2\u025f\u0260",
    "\5\u00d1i\2\u0260\u0261\5\u00efx\2\u0261\u0262\5\u00f5{\2\u0262\u0263",
    "\5\u00dfp\2\u0263\u0264\5\u00edw\2\u0264\u0265\5\u00f7|\2\u0265f\3\2",
    "\2\2\u0266\u0267\5\u00dbn\2\u0267\u0268\5\u00edw\2\u0268\u0269\5\u00f3",
    "z\2\u0269h\3\2\2\2\u026a\u026b\5\u00f3z\2\u026b\u026c\5\u00d1i\2\u026c",
    "\u026d\5\u00fd\177\2\u026dj\3\2\2\2\u026e\u026f\5\u00edw\2\u026f\u0270",
    "\5\u00dbn\2\u0270l\3\2\2\2\u0271\u0272\5\u00d1i\2\u0272\u0273\5\u00f5",
    "{\2\u0273n\3\2\2\2\u0274\u0275\5\u00edw\2\u0275\u0276\5\u00f3z\2\u0276",
    "p\3\2\2\2\u0277\u0278\5\u00d1i\2\u0278\u0279\5\u00ebv\2\u0279\u027a",
    "\5\u00d7l\2\u027ar\3\2\2\2\u027b\u027c\5\u00e1q\2\u027c\u027d\5\u00eb",
    "v\2\u027dt\3\2\2\2\u027e\u027f\5\u00edw\2\u027f\u0280\5\u00ebv\2\u0280",
    "v\3\2\2\2\u0281\u0282\5\u00e1q\2\u0282\u0283\5\u00f5{\2\u0283x\3\2\2",
    "\2\u0284\u0285\5\u00ebv\2\u0285\u0286\5\u00edw\2\u0286\u0287\5\u00f7",
    "|\2\u0287z\3\2\2\2\u0288\u0289\5\u00fd\177\2\u0289\u028a\5\u00e1q\2",
    "\u028a\u028b\5\u00f7|\2\u028b\u028c\5\u00dfp\2\u028c\u028d\5\u00e1q",
    "\2\u028d\u028e\5\u00ebv\2\u028e|\3\2\2\2\u028f\u0290\5\u00fd\177\2\u0290",
    "\u0291\5\u00e1q\2\u0291\u0292\5\u00f7|\2\u0292\u0293\5\u00dfp\2\u0293",
    "~\3\2\2\2\u0294\u0295\5\u00d3j\2\u0295\u0296\5\u00d9m\2\u0296\u0297",
    "\5\u00ddo\2\u0297\u0298\5\u00e1q\2\u0298\u0299\5\u00ebv\2\u0299\u0080",
    "\3\2\2\2\u029a\u029b\5\u00d9m\2\u029b\u029c\5\u00ebv\2\u029c\u029d\5",
    "\u00d7l\2\u029d\u0082\3\2\2\2\u029e\u029f\5\u00ebv\2\u029f\u02a0\5\u00f9",
    "}\2\u02a0\u02a1\5\u00e7t\2\u02a1\u02a2\5\u00e7t\2\u02a2\u0084\3\2\2",
    "\2\u02a3\u02a4\5\u00d9m\2\u02a4\u02a5\5\u00fb~\2\u02a5\u02a6\5\u00d9",
    "m\2\u02a6\u02a7\5\u00f3z\2\u02a7\u02a8\5\u0101\u0081\2\u02a8\u0086\3",
    "\2\2\2\u02a9\u02aa\5\u00e7t\2\u02aa\u02ab\5\u00d1i\2\u02ab\u02ac\5\u00f5",
    "{\2\u02ac\u02ad\5\u00f7|\2\u02ad\u0088\3\2\2\2\u02ae\u02af\5\u00d1i",
    "\2\u02af\u02b0\5\u00e7t\2\u02b0\u02b1\5\u00e7t\2\u02b1\u008a\3\2\2\2",
    "\u02b2\u02b3\5\u00dbn\2\u02b3\u02b4\5\u00e1q\2\u02b4\u02b5\5\u00f3z",
    "\2\u02b5\u02b6\5\u00f5{\2\u02b6\u02b7\5\u00f7|\2\u02b7\u008c\3\2\2\2",
    "\u02b8\u02b9\5\u00e3r\2\u02b9\u02ba\5\u00edw\2\u02ba\u02bb\5\u00e1q",
    "\2\u02bb\u02bc\5\u00ebv\2\u02bc\u008e\3\2\2\2\u02bd\u02be\5\u00e1q\2",
    "\u02be\u02bf\5\u00ebv\2\u02bf\u02c0\5\u00ebv\2\u02c0\u02c1\5\u00d9m",
    "\2\u02c1\u02c2\5\u00f3z\2\u02c2\u0090\3\2\2\2\u02c3\u02c4\5\u00edw\2",
    "\u02c4\u02c5\5\u00f9}\2\u02c5\u02c6\5\u00f7|\2\u02c6\u02c7\5\u00d9m",
    "\2\u02c7\u02c8\5\u00f3z\2\u02c8\u0092\3\2\2\2\u02c9\u02ca\5\u00f3z\2",
    "\u02ca\u02cb\5\u00e1q\2\u02cb\u02cc\5\u00ddo\2\u02cc\u02cd\5\u00dfp",
    "\2\u02cd\u02ce\5\u00f7|\2\u02ce\u0094\3\2\2\2\u02cf\u02d0\5\u00e7t\2",
    "\u02d0\u02d1\5\u00d9m\2\u02d1\u02d2\5\u00dbn\2\u02d2\u02d3\5\u00f7|",
    "\2\u02d3\u0096\3\2\2\2\u02d4\u02d5\5\u00dbn\2\u02d5\u02d6\5\u00f9}\2",
    "\u02d6\u02d7\5\u00e7t\2\u02d7\u02d8\5\u00e7t\2\u02d8\u0098\3\2\2\2\u02d9",
    "\u02da\5\u00f9}\2\u02da\u02db\5\u00ebv\2\u02db\u02dc\5\u00e1q\2\u02dc",
    "\u02dd\5\u00d7l\2\u02dd\u02de\5\u00e1q\2\u02de\u02df\5\u00f3z\2\u02df",
    "\u02e0\5\u00d9m\2\u02e0\u02e1\5\u00d5k\2\u02e1\u02e2\5\u00f7|\2\u02e2",
    "\u02e3\5\u00e1q\2\u02e3\u02e4\5\u00edw\2\u02e4\u02e5\5\u00ebv\2\u02e5",
    "\u02e6\5\u00d1i\2\u02e6\u02e7\5\u00e7t\2\u02e7\u009a\3\2\2\2\u02e8\u02e9",
    "\5\u0101\u0081\2\u02e9\u02ea\5\u00d9m\2\u02ea\u02eb\5\u00d1i\2\u02eb",
    "\u02ed\5\u00f3z\2\u02ec\u02ee\5\u00f5{\2\u02ed\u02ec\3\2\2\2\u02ed\u02ee",
    "\3\2\2\2\u02ee\u009c\3\2\2\2\u02ef\u02f0\5\u00e9u\2\u02f0\u02f1\5\u00ed",
    "w\2\u02f1\u02f2\5\u00ebv\2\u02f2\u02f3\5\u00f7|\2\u02f3\u02f5\5\u00df",
    "p\2\u02f4\u02f6\5\u00f5{\2\u02f5\u02f4\3\2\2\2\u02f5\u02f6\3\2\2\2\u02f6",
    "\u009e\3\2\2\2\u02f7\u02f8\5\u00fd\177\2\u02f8\u02f9\5\u00d9m\2\u02f9",
    "\u02fa\5\u00d9m\2\u02fa\u02fc\5\u00e5s\2\u02fb\u02fd\5\u00f5{\2\u02fc",
    "\u02fb\3\2\2\2\u02fc\u02fd\3\2\2\2\u02fd\u00a0\3\2\2\2\u02fe\u02ff\5",
    "\u00d7l\2\u02ff\u0300\5\u00d1i\2\u0300\u0302\5\u0101\u0081\2\u0301\u0303",
    "\5\u00f5{\2\u0302\u0301\3\2\2\2\u0302\u0303\3\2\2\2\u0303\u00a2\3\2",
    "\2\2\u0304\u0305\5\u00dfp\2\u0305\u0306\5\u00edw\2\u0306\u0307\5\u00f9",
    "}\2\u0307\u0309\5\u00f3z\2\u0308\u030a\5\u00f5{\2\u0309\u0308\3\2\2",
    "\2\u0309\u030a\3\2\2\2\u030a\u00a4\3\2\2\2\u030b\u030c\5\u00e9u\2\u030c",
    "\u030d\5\u00e1q\2\u030d\u0314\5\u00ebv\2\u030e\u030f\5\u00f9}\2\u030f",
    "\u0310\5\u00f7|\2\u0310\u0312\5\u00d9m\2\u0311\u0313\5\u00f5{\2\u0312",
    "\u0311\3\2\2\2\u0312\u0313\3\2\2\2\u0313\u0315\3\2\2\2\u0314\u030e\3",
    "\2\2\2\u0314\u0315\3\2\2\2\u0315\u00a6\3\2\2\2\u0316\u0317\5\u00f5{",
    "\2\u0317\u0318\5\u00d9m\2\u0318\u031f\5\u00d5k\2\u0319\u031a\5\u00ed",
    "w\2\u031a\u031b\5\u00ebv\2\u031b\u031d\5\u00d7l\2\u031c\u031e\5\u00f5",
    "{\2\u031d\u031c\3\2\2\2\u031d\u031e\3\2\2\2\u031e\u0320\3\2\2\2\u031f",
    "\u0319\3\2\2\2\u031f\u0320\3\2\2\2\u0320\u00a8\3\2\2\2\u0321\u0322\5",
    "\u00e9u\2\u0322\u0323\5\u00e1q\2\u0323\u0324\5\u00e7t\2\u0324\u0325",
    "\5\u00e7t\2\u0325\u0326\5\u00e1q\2\u0326\u0327\5\u00f5{\2\u0327\u0328",
    "\5\u00d9m\2\u0328\u032f\5\u00d5k\2\u0329\u032a\5\u00edw\2\u032a\u032b",
    "\5\u00ebv\2\u032b\u032d\5\u00d7l\2\u032c\u032e\5\u00f5{\2\u032d\u032c",
    "\3\2\2\2\u032d\u032e\3\2\2\2\u032e\u0330\3\2\2\2\u032f\u0329\3\2\2\2",
    "\u032f\u0330\3\2\2\2\u0330\u00aa\3\2\2\2\u0331\u0332\5\u00dbn\2\u0332",
    "\u0333\5\u00d1i\2\u0333\u0334\5\u00e7t\2\u0334\u0335\5\u00f5{\2\u0335",
    "\u0336\5\u00d9m\2\u0336\u00ac\3\2\2\2\u0337\u0338\5\u00f7|\2\u0338\u0339",
    "\5\u00f3z\2\u0339\u033a\5\u00f9}\2\u033a\u033b\5\u00d9m\2\u033b\u00ae",
    "\3\2\2\2\u033c\u033d\5\u00f5{\2\u033d\u033e\5\u00f7|\2\u033e\u033f\5",
    "\u00f3z\2\u033f\u0340\5\u00e1q\2\u0340\u0341\5\u00ebv\2\u0341\u0342",
    "\5\u00ddo\2\u0342\u00b0\3\2\2\2\u0343\u0344\5\u00e1q\2\u0344\u0345\5",
    "\u00ebv\2\u0345\u0346\5\u00f7|\2\u0346\u00b2\3\2\2\2\u0347\u0348\5\u00e7",
    "t\2\u0348\u0349\5\u00edw\2\u0349\u034a\5\u00ebv\2\u034a\u034b\5\u00dd",
    "o\2\u034b\u00b4\3\2\2\2\u034c\u034d\5\u00dbn\2\u034d\u034e\5\u00e7t",
    "\2\u034e\u034f\5\u00edw\2\u034f\u0350\5\u00d1i\2\u0350\u0351\5\u00f7",
    "|\2\u0351\u00b6\3\2\2\2\u0352\u0353\5\u00d7l\2\u0353\u0354\5\u00edw",
    "\2\u0354\u0355\5\u00f9}\2\u0355\u0356\5\u00d3j\2\u0356\u0357\5\u00e7",
    "t\2\u0357\u0358\5\u00d9m\2\u0358\u00b8\3\2\2\2\u0359\u035a\5\u00d3j",
    "\2\u035a\u035b\5\u00edw\2\u035b\u035c\5\u00edw\2\u035c\u035d\5\u00e7",
    "t\2\u035d\u00ba\3\2\2\2\u035e\u035f\5\u00edw\2\u035f\u0360\5\u00d3j",
    "\2\u0360\u0361\5\u00e3r\2\u0361\u0362\5\u00d9m\2\u0362\u0363\5\u00d5",
    "k\2\u0363\u0364\5\u00f7|\2\u0364\u00bc\3\2\2\2\u0365\u0366\7b\2\2\u0366",
    "\u036a\t\3\2\2\u0367\u0369\t\4\2\2\u0368\u0367\3\2\2\2\u0369\u036c\3",
    "\2\2\2\u036a\u0368\3\2\2\2\u036a\u036b\3\2\2\2\u036b\u036d\3\2\2\2\u036c",
    "\u036a\3\2\2\2\u036d\u036e\7b\2\2\u036e\u036f\b_\2\2\u036f\u00be\3\2",
    "\2\2\u0370\u0374\t\3\2\2\u0371\u0373\t\4\2\2\u0372\u0371\3\2\2\2\u0373",
    "\u0376\3\2\2\2\u0374\u0372\3\2\2\2\u0374\u0375\3\2\2\2\u0375\u00c0\3",
    "\2\2\2\u0376\u0374\3\2\2\2\u0377\u037b\7)\2\2\u0378\u037a\n\5\2\2\u0379",
    "\u0378\3\2\2\2\u037a\u037d\3\2\2\2\u037b\u0379\3\2\2\2\u037b\u037c\3",
    "\2\2\2\u037c\u037e\3\2\2\2\u037d\u037b\3\2\2\2\u037e\u0388\7)\2\2\u037f",
    "\u0383\7$\2\2\u0380\u0382\n\6\2\2\u0381\u0380\3\2\2\2\u0382\u0385\3",
    "\2\2\2\u0383\u0381\3\2\2\2\u0383\u0384\3\2\2\2\u0384\u0386\3\2\2\2\u0385",
    "\u0383\3\2\2\2\u0386\u0388\7$\2\2\u0387\u0377\3\2\2\2\u0387\u037f\3",
    "\2\2\2\u0388\u0389\3\2\2\2\u0389\u038a\ba\3\2\u038a\u00c2\3\2\2\2\u038b",
    "\u038c\7/\2\2\u038c\u038d\7/\2\2\u038d\u0391\3\2\2\2\u038e\u0390\n\7",
    "\2\2\u038f\u038e\3\2\2\2\u0390\u0393\3\2\2\2\u0391\u038f\3\2\2\2\u0391",
    "\u0392\3\2\2\2\u0392\u0394\3\2\2\2\u0393\u0391\3\2\2\2\u0394\u0395\b",
    "b\4\2\u0395\u00c4\3\2\2\2\u0396\u0397\7\61\2\2\u0397\u0398\7,\2\2\u0398",
    "\u039c\3\2\2\2\u0399\u039b\13\2\2\2\u039a\u0399\3\2\2\2\u039b\u039e",
    "\3\2\2\2\u039c\u039d\3\2\2\2\u039c\u039a\3\2\2\2\u039d\u03a2\3\2\2\2",
    "\u039e\u039c\3\2\2\2\u039f\u03a0\7,\2\2\u03a0\u03a3\7\61\2\2\u03a1\u03a3",
    "\7\2\2\3\u03a2\u039f\3\2\2\2\u03a2\u03a1\3\2\2\2\u03a3\u03a4\3\2\2\2",
    "\u03a4\u03a5\bc\4\2\u03a5\u00c6\3\2\2\2\u03a6\u03a7\t\b\2\2\u03a7\u03a8",
    "\3\2\2\2\u03a8\u03a9\bd\4\2\u03a9\u00c8\3\2\2\2\u03aa\u03ab\13\2\2\2",
    "\u03ab\u00ca\3\2\2\2\u03ac\u03b0\7}\2\2\u03ad\u03af\5\u00cdg\2\u03ae",
    "\u03ad\3\2\2\2\u03af\u03b2\3\2\2\2\u03b0\u03ae\3\2\2\2\u03b0\u03b1\3",
    "\2\2\2\u03b1\u03b3\3\2\2\2\u03b2\u03b0\3\2\2\2\u03b3\u03b4\7\177\2\2",
    "\u03b4\u00cc\3\2\2\2\u03b5\u03c9\n\t\2\2\u03b6\u03ba\7$\2\2\u03b7\u03b9",
    "\n\n\2\2\u03b8\u03b7\3\2\2\2\u03b9\u03bc\3\2\2\2\u03ba\u03b8\3\2\2\2",
    "\u03ba\u03bb\3\2\2\2\u03bb\u03bd\3\2\2\2\u03bc\u03ba\3\2\2\2\u03bd\u03c9",
    "\7$\2\2\u03be\u03bf\7\61\2\2\u03bf\u03c0\7\61\2\2\u03c0\u03c4\3\2\2",
    "\2\u03c1\u03c3\n\7\2\2\u03c2\u03c1\3\2\2\2\u03c3\u03c6\3\2\2\2\u03c4",
    "\u03c2\3\2\2\2\u03c4\u03c5\3\2\2\2\u03c5\u03c9\3\2\2\2\u03c6\u03c4\3",
    "\2\2\2\u03c7\u03c9\5\u00cbf\2\u03c8\u03b5\3\2\2\2\u03c8\u03b6\3\2\2",
    "\2\u03c8\u03be\3\2\2\2\u03c8\u03c7\3\2\2\2\u03c9\u00ce\3\2\2\2\u03ca",
    "\u03cb\t\13\2\2\u03cb\u00d0\3\2\2\2\u03cc\u03cd\t\f\2\2\u03cd\u00d2",
    "\3\2\2\2\u03ce\u03cf\t\r\2\2\u03cf\u00d4\3\2\2\2\u03d0\u03d1\t\16\2",
    "\2\u03d1\u00d6\3\2\2\2\u03d2\u03d3\t\17\2\2\u03d3\u00d8\3\2\2\2\u03d4",
    "\u03d5\t\20\2\2\u03d5\u00da\3\2\2\2\u03d6\u03d7\t\21\2\2\u03d7\u00dc",
    "\3\2\2\2\u03d8\u03d9\t\22\2\2\u03d9\u00de\3\2\2\2\u03da\u03db\t\23\2",
    "\2\u03db\u00e0\3\2\2\2\u03dc\u03dd\t\24\2\2\u03dd\u00e2\3\2\2\2\u03de",
    "\u03df\t\25\2\2\u03df\u00e4\3\2\2\2\u03e0\u03e1\t\26\2\2\u03e1\u00e6",
    "\3\2\2\2\u03e2\u03e3\t\27\2\2\u03e3\u00e8\3\2\2\2\u03e4\u03e5\t\30\2",
    "\2\u03e5\u00ea\3\2\2\2\u03e6\u03e7\t\31\2\2\u03e7\u00ec\3\2\2\2\u03e8",
    "\u03e9\t\32\2\2\u03e9\u00ee\3\2\2\2\u03ea\u03eb\t\33\2\2\u03eb\u00f0",
    "\3\2\2\2\u03ec\u03ed\t\34\2\2\u03ed\u00f2\3\2\2\2\u03ee\u03ef\t\35\2",
    "\2\u03ef\u00f4\3\2\2\2\u03f0\u03f1\t\36\2\2\u03f1\u00f6\3\2\2\2\u03f2",
    "\u03f3\t\37\2\2\u03f3\u00f8\3\2\2\2\u03f4\u03f5\t \2\2\u03f5\u00fa\3",
    "\2\2\2\u03f6\u03f7\t!\2\2\u03f7\u00fc\3\2\2\2\u03f8\u03f9\t\"\2\2\u03f9",
    "\u00fe\3\2\2\2\u03fa\u03fb\t#\2\2\u03fb\u0100\3\2\2\2\u03fc\u03fd\t",
    "$\2\2\u03fd\u0102\3\2\2\2\u03fe\u03ff\t%\2\2\u03ff\u0104\3\2\2\2=\2",
    "\u0108\u010d\u0114\u011a\u011d\u0121\u0126\u0128\u012f\u0131\u0137\u013b",
    "\u0140\u0142\u0146\u014b\u0151\u0154\u0158\u015d\u015f\u0166\u016c\u016f",
    "\u0173\u0178\u017b\u0180\u0182\u0188\u018c\u0191\u0193\u0196\u0198\u02ed",
    "\u02f5\u02fc\u0302\u0309\u0312\u0314\u031d\u031f\u032d\u032f\u036a\u0374",
    "\u037b\u0383\u0387\u0391\u039c\u03a2\u03b0\u03ba\u03c4\u03c8\5\3_\2",
    "\3a\3\2\3\2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

function SiddhiQLLexer(input) {
    antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

SiddhiQLLexer.prototype = Object.create(antlr4.Lexer.prototype);
SiddhiQLLexer.prototype.constructor = SiddhiQLLexer;

SiddhiQLLexer.EOF = antlr4.Token.EOF;
SiddhiQLLexer.INT_LITERAL = 1;
SiddhiQLLexer.LONG_LITERAL = 2;
SiddhiQLLexer.FLOAT_LITERAL = 3;
SiddhiQLLexer.DOUBLE_LITERAL = 4;
SiddhiQLLexer.COL = 5;
SiddhiQLLexer.SCOL = 6;
SiddhiQLLexer.DOT = 7;
SiddhiQLLexer.OPEN_PAR = 8;
SiddhiQLLexer.CLOSE_PAR = 9;
SiddhiQLLexer.OPEN_SQARE_BRACKETS = 10;
SiddhiQLLexer.CLOASE_SQARE_BRACKETS = 11;
SiddhiQLLexer.COMMA = 12;
SiddhiQLLexer.ASSIGN = 13;
SiddhiQLLexer.STAR = 14;
SiddhiQLLexer.PLUS = 15;
SiddhiQLLexer.QUESTION = 16;
SiddhiQLLexer.MINUS = 17;
SiddhiQLLexer.DIV = 18;
SiddhiQLLexer.MOD = 19;
SiddhiQLLexer.LT = 20;
SiddhiQLLexer.LT_EQ = 21;
SiddhiQLLexer.GT = 22;
SiddhiQLLexer.GT_EQ = 23;
SiddhiQLLexer.EQ = 24;
SiddhiQLLexer.NOT_EQ = 25;
SiddhiQLLexer.AT = 26;
SiddhiQLLexer.FOLLOWED_BY = 27;
SiddhiQLLexer.HASH = 28;
SiddhiQLLexer.STREAM = 29;
SiddhiQLLexer.DEFINE = 30;
SiddhiQLLexer.FUNCTION = 31;
SiddhiQLLexer.TABLE = 32;
SiddhiQLLexer.PLAN = 33;
SiddhiQLLexer.FROM = 34;
SiddhiQLLexer.PARTITION = 35;
SiddhiQLLexer.WINDOW = 36;
SiddhiQLLexer.SELECT = 37;
SiddhiQLLexer.GROUP = 38;
SiddhiQLLexer.BY = 39;
SiddhiQLLexer.HAVING = 40;
SiddhiQLLexer.INSERT = 41;
SiddhiQLLexer.DELETE = 42;
SiddhiQLLexer.UPDATE = 43;
SiddhiQLLexer.RETURN = 44;
SiddhiQLLexer.EVENTS = 45;
SiddhiQLLexer.INTO = 46;
SiddhiQLLexer.OUTPUT = 47;
SiddhiQLLexer.EXPIRED = 48;
SiddhiQLLexer.CURRENT = 49;
SiddhiQLLexer.SNAPSHOT = 50;
SiddhiQLLexer.FOR = 51;
SiddhiQLLexer.RAW = 52;
SiddhiQLLexer.OF = 53;
SiddhiQLLexer.AS = 54;
SiddhiQLLexer.OR = 55;
SiddhiQLLexer.AND = 56;
SiddhiQLLexer.IN = 57;
SiddhiQLLexer.ON = 58;
SiddhiQLLexer.IS = 59;
SiddhiQLLexer.NOT = 60;
SiddhiQLLexer.WITHIN = 61;
SiddhiQLLexer.WITH = 62;
SiddhiQLLexer.BEGIN = 63;
SiddhiQLLexer.END = 64;
SiddhiQLLexer.NULL = 65;
SiddhiQLLexer.EVERY = 66;
SiddhiQLLexer.LAST = 67;
SiddhiQLLexer.ALL = 68;
SiddhiQLLexer.FIRST = 69;
SiddhiQLLexer.JOIN = 70;
SiddhiQLLexer.INNER = 71;
SiddhiQLLexer.OUTER = 72;
SiddhiQLLexer.RIGHT = 73;
SiddhiQLLexer.LEFT = 74;
SiddhiQLLexer.FULL = 75;
SiddhiQLLexer.UNIDIRECTIONAL = 76;
SiddhiQLLexer.YEARS = 77;
SiddhiQLLexer.MONTHS = 78;
SiddhiQLLexer.WEEKS = 79;
SiddhiQLLexer.DAYS = 80;
SiddhiQLLexer.HOURS = 81;
SiddhiQLLexer.MINUTES = 82;
SiddhiQLLexer.SECONDS = 83;
SiddhiQLLexer.MILLISECONDS = 84;
SiddhiQLLexer.FALSE = 85;
SiddhiQLLexer.TRUE = 86;
SiddhiQLLexer.STRING = 87;
SiddhiQLLexer.INT = 88;
SiddhiQLLexer.LONG = 89;
SiddhiQLLexer.FLOAT = 90;
SiddhiQLLexer.DOUBLE = 91;
SiddhiQLLexer.BOOL = 92;
SiddhiQLLexer.OBJECT = 93;
SiddhiQLLexer.ID_QUOTES = 94;
SiddhiQLLexer.ID = 95;
SiddhiQLLexer.STRING_LITERAL = 96;
SiddhiQLLexer.SINGLE_LINE_COMMENT = 97;
SiddhiQLLexer.MULTILINE_COMMENT = 98;
SiddhiQLLexer.SPACES = 99;
SiddhiQLLexer.UNEXPECTED_CHAR = 100;
SiddhiQLLexer.SCRIPT = 101;


SiddhiQLLexer.modeNames = ["DEFAULT_MODE"];

SiddhiQLLexer.literalNames = ['null', 'null', 'null', 'null', 'null', "':'",
    "';'", "'.'", "'('", "')'", "'['", "']'",
    "','", "'='", "'*'", "'+'", "'?'", "'-'",
    "'/'", "'%'", "'<'", "'<='", "'>'", "'>='",
    "'=='", "'!='", "'@'", "'->'", "'#'"];

SiddhiQLLexer.symbolicNames = ['null', "INT_LITERAL", "LONG_LITERAL", "FLOAT_LITERAL",
    "DOUBLE_LITERAL", "COL", "SCOL", "DOT",
    "OPEN_PAR", "CLOSE_PAR", "OPEN_SQARE_BRACKETS",
    "CLOASE_SQARE_BRACKETS", "COMMA", "ASSIGN",
    "STAR", "PLUS", "QUESTION", "MINUS", "DIV",
    "MOD", "LT", "LT_EQ", "GT", "GT_EQ", "EQ",
    "NOT_EQ", "AT", "FOLLOWED_BY", "HASH", "STREAM",
    "DEFINE", "FUNCTION", "TABLE", "PLAN", "FROM",
    "PARTITION", "WINDOW", "SELECT", "GROUP",
    "BY", "HAVING", "INSERT", "DELETE", "UPDATE",
    "RETURN", "EVENTS", "INTO", "OUTPUT", "EXPIRED",
    "CURRENT", "SNAPSHOT", "FOR", "RAW", "OF",
    "AS", "OR", "AND", "IN", "ON", "IS", "NOT",
    "WITHIN", "WITH", "BEGIN", "END", "NULL",
    "EVERY", "LAST", "ALL", "FIRST", "JOIN",
    "INNER", "OUTER", "RIGHT", "LEFT", "FULL",
    "UNIDIRECTIONAL", "YEARS", "MONTHS", "WEEKS",
    "DAYS", "HOURS", "MINUTES", "SECONDS", "MILLISECONDS",
    "FALSE", "TRUE", "STRING", "INT", "LONG",
    "FLOAT", "DOUBLE", "BOOL", "OBJECT", "ID_QUOTES",
    "ID", "STRING_LITERAL", "SINGLE_LINE_COMMENT",
    "MULTILINE_COMMENT", "SPACES", "UNEXPECTED_CHAR",
    "SCRIPT"];

SiddhiQLLexer.ruleNames = ["INT_LITERAL", "LONG_LITERAL", "FLOAT_LITERAL",
    "DOUBLE_LITERAL", "COL", "SCOL", "DOT", "OPEN_PAR",
    "CLOSE_PAR", "OPEN_SQARE_BRACKETS", "CLOASE_SQARE_BRACKETS",
    "COMMA", "ASSIGN", "STAR", "PLUS", "QUESTION",
    "MINUS", "DIV", "MOD", "LT", "LT_EQ", "GT",
    "GT_EQ", "EQ", "NOT_EQ", "AT", "FOLLOWED_BY",
    "HASH", "STREAM", "DEFINE", "FUNCTION", "TABLE",
    "PLAN", "FROM", "PARTITION", "WINDOW", "SELECT",
    "GROUP", "BY", "HAVING", "INSERT", "DELETE",
    "UPDATE", "RETURN", "EVENTS", "INTO", "OUTPUT",
    "EXPIRED", "CURRENT", "SNAPSHOT", "FOR", "RAW",
    "OF", "AS", "OR", "AND", "IN", "ON", "IS", "NOT",
    "WITHIN", "WITH", "BEGIN", "END", "NULL", "EVERY",
    "LAST", "ALL", "FIRST", "JOIN", "INNER", "OUTER",
    "RIGHT", "LEFT", "FULL", "UNIDIRECTIONAL", "YEARS",
    "MONTHS", "WEEKS", "DAYS", "HOURS", "MINUTES",
    "SECONDS", "MILLISECONDS", "FALSE", "TRUE",
    "STRING", "INT", "LONG", "FLOAT", "DOUBLE",
    "BOOL", "OBJECT", "ID_QUOTES", "ID", "STRING_LITERAL",
    "SINGLE_LINE_COMMENT", "MULTILINE_COMMENT",
    "SPACES", "UNEXPECTED_CHAR", "SCRIPT", "SCRIPT_ATOM",
    "DIGIT", "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
    "Z"];

SiddhiQLLexer.grammarFileName = "SiddhiQL.g4";


SiddhiQLLexer.prototype.action = function (localctx, ruleIndex, actionIndex) {
    switch (ruleIndex) {
        case 93:
            this.ID_QUOTES_action(localctx, actionIndex);
            break;
        case 95:
            this.STRING_LITERAL_action(localctx, actionIndex);
            break;
        default:
            throw "No registered action for:" + ruleIndex;
    }
};

SiddhiQLLexer.prototype.ID_QUOTES_action = function (localctx, actionIndex) {
    switch (actionIndex) {

        case 0:
            //setText(getText().substring(1, getText().length()-1));

            this.text = this.text.substring(1, this.text.length - 1);
            break;
        default:
            throw "No registered action for:" + actionIndex;
    }
};

SiddhiQLLexer.prototype.STRING_LITERAL_action = function (localctx, actionIndex) {
    switch (actionIndex) {
        case 1:
            //setText(getText().substring(1, getText().length()-1));

            this.text = this.text.substring(1, this.text.length - 1);
            break;
        default:
            throw "No registered action for:" + actionIndex;
    }
};


exports.SiddhiQLLexer = SiddhiQLLexer;

