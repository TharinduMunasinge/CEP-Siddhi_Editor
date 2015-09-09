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

/*Annotations, Annotation Names and relevant tokens*/
var ANNOTATION_IMPORT = "Import";
var ANNOTATION_EXPORT = "Export";

var ANNOTATION_TOKEN_AT = "@";
var ANNOTATION_TOKEN_OPENING_BRACKET = "(";
var ANNOTATION_TOKEN_CLOSING_BRACKET = ")";

var REGEX_LINE_STARTING_WITH_PLAN = /^@Plan.*/g;
var REGEX_LINE_STARTING_WITH_SINGLE_LINE_COMMENT = /^--.*/g;
var REGEX_LINE_STARTING_WITH_MULTI_LINE_COMMENT = /^\/\*.*\*\//g;
var REGEX_LINE_STARTING_WITH_IMPORT_STATEMENT = /^@Import.*/g;

var SIDDHI_STATEMENT_DELIMETER = ";";
var SIDDHI_LINE_BREAK = "\n";
var SIDDHI_LINE_BREAK_CHARACTER = '\n';
var SIDDHI_SINGLE_QUOTE = "'";
var SIDDHI_SPACE_LITERAL = " ";

var SIDDHI_LITERAL_DEFINE_STREAM = "define stream";

var MIME_TYPE_SIDDHI_QL = "text/siddhi-ql";

var ACE_CONSTANT = {
    LANG_TOOL: "ace/ext/language_tools",
    TOKEN_TOOLTIP: "js/ace_editor/token-tooltip",
    SIDDHI_MODE: "ace/mode/siddhi",
    THEME: "ace/theme/crimson_editor",
    EXTENSION: "siddhi-extensions.json",
    INBUILT: "siddhi-inbuilt.json",
    ACE_RANGE: "ace/range"
};

var ANTLR_CONSTANT = {
    ROOT: "../eventprocessor/js/client_side_Siddhi_parser/",
    ERROR_LISTENER: "gen/AceErrorListener",
    SIDDHI_LISTENER: "gen/CustomSiddhiListener",
    SIDDHI_PARSER: "gen/SiddhiQLParser",
    SIDDHI_LEXER: "gen/SiddhiQLLexer",
    INDEX: "antlr4/index",
    DISTRIBUTION: "../eventprocessor/js/antlr4-js-runtime"
}
