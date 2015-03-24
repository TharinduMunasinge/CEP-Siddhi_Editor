// Generated from /Development/Projects/Gsoc/antl4/JS_Sample/SiddhiQLGrammar.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

	//import org.wso2.siddhi.query.compiler.exception.SiddhiParserException;


// This class defines a complete generic visitor for a parse tree produced by SiddhiQLGrammarParser.

function SiddhiQLGrammarVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SiddhiQLGrammarVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SiddhiQLGrammarVisitor.prototype.constructor = SiddhiQLGrammarVisitor;

// Visit a parse tree produced by SiddhiQLGrammarParser#parse.
SiddhiQLGrammarVisitor.prototype.visitParse = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#error.
SiddhiQLGrammarVisitor.prototype.visitError = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#execution_plan.
SiddhiQLGrammarVisitor.prototype.visitExecution_plan = function(ctx) {
	console.log("visit Execution Plan"+ctx);
};


// Visit a parse tree produced by SiddhiQLGrammarParser#execution_element.
SiddhiQLGrammarVisitor.prototype.visitExecution_element = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#definition_stream_final.
SiddhiQLGrammarVisitor.prototype.visitDefinition_stream_final = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#definition_stream.
SiddhiQLGrammarVisitor.prototype.visitDefinition_stream = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#definition_table_final.
SiddhiQLGrammarVisitor.prototype.visitDefinition_table_final = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#definition_table.
SiddhiQLGrammarVisitor.prototype.visitDefinition_table = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#definition_function_final.
SiddhiQLGrammarVisitor.prototype.visitDefinition_function_final = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#definition_function.
SiddhiQLGrammarVisitor.prototype.visitDefinition_function = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#function_name.
SiddhiQLGrammarVisitor.prototype.visitFunction_name = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#language_name.
SiddhiQLGrammarVisitor.prototype.visitLanguage_name = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#function_body.
SiddhiQLGrammarVisitor.prototype.visitFunction_body = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#annotation.
SiddhiQLGrammarVisitor.prototype.visitAnnotation = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#plan_annotation.
SiddhiQLGrammarVisitor.prototype.visitPlan_annotation = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#annotation_element.
SiddhiQLGrammarVisitor.prototype.visitAnnotation_element = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#partition.
SiddhiQLGrammarVisitor.prototype.visitPartition = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#partition_final.
SiddhiQLGrammarVisitor.prototype.visitPartition_final = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#partition_with_stream.
SiddhiQLGrammarVisitor.prototype.visitPartition_with_stream = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#condition_ranges.
SiddhiQLGrammarVisitor.prototype.visitCondition_ranges = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#condition_range.
SiddhiQLGrammarVisitor.prototype.visitCondition_range = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#query_final.
SiddhiQLGrammarVisitor.prototype.visitQuery_final = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#query.
SiddhiQLGrammarVisitor.prototype.visitQuery = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#query_input.
SiddhiQLGrammarVisitor.prototype.visitQuery_input = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#standard_stream.
SiddhiQLGrammarVisitor.prototype.visitStandard_stream = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#join_stream.
SiddhiQLGrammarVisitor.prototype.visitJoin_stream = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#join_source.
SiddhiQLGrammarVisitor.prototype.visitJoin_source = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#pattern_stream.
SiddhiQLGrammarVisitor.prototype.visitPattern_stream = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#every_pattern_source_chain.
SiddhiQLGrammarVisitor.prototype.visitEvery_pattern_source_chain = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#pattern_source_chain.
SiddhiQLGrammarVisitor.prototype.visitPattern_source_chain = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#pattern_source.
SiddhiQLGrammarVisitor.prototype.visitPattern_source = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#logical_stateful_source.
SiddhiQLGrammarVisitor.prototype.visitLogical_stateful_source = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#pattern_collection_stateful_source.
SiddhiQLGrammarVisitor.prototype.visitPattern_collection_stateful_source = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#standard_stateful_source.
SiddhiQLGrammarVisitor.prototype.visitStandard_stateful_source = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#basic_source.
SiddhiQLGrammarVisitor.prototype.visitBasic_source = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#basic_source_stream_handlers.
SiddhiQLGrammarVisitor.prototype.visitBasic_source_stream_handlers = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#basic_source_stream_handler.
SiddhiQLGrammarVisitor.prototype.visitBasic_source_stream_handler = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#sequence_stream.
SiddhiQLGrammarVisitor.prototype.visitSequence_stream = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#sequence_source_chain.
SiddhiQLGrammarVisitor.prototype.visitSequence_source_chain = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#sequence_source.
SiddhiQLGrammarVisitor.prototype.visitSequence_source = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#sequence_collection_stateful_source.
SiddhiQLGrammarVisitor.prototype.visitSequence_collection_stateful_source = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#anonymous_stream.
SiddhiQLGrammarVisitor.prototype.visitAnonymous_stream = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#filter.
SiddhiQLGrammarVisitor.prototype.visitFilter = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#stream_function.
SiddhiQLGrammarVisitor.prototype.visitStream_function = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#window.
SiddhiQLGrammarVisitor.prototype.visitWindow = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#query_section.
SiddhiQLGrammarVisitor.prototype.visitQuery_section = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#group_by.
SiddhiQLGrammarVisitor.prototype.visitGroup_by = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#having.
SiddhiQLGrammarVisitor.prototype.visitHaving = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#query_output.
SiddhiQLGrammarVisitor.prototype.visitQuery_output = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#output_event_type.
SiddhiQLGrammarVisitor.prototype.visitOutput_event_type = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#output_rate.
SiddhiQLGrammarVisitor.prototype.visitOutput_rate = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#output_rate_type.
SiddhiQLGrammarVisitor.prototype.visitOutput_rate_type = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#within_time.
SiddhiQLGrammarVisitor.prototype.visitWithin_time = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#output_attribute.
SiddhiQLGrammarVisitor.prototype.visitOutput_attribute = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#attribute.
SiddhiQLGrammarVisitor.prototype.visitAttribute = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#expression.
SiddhiQLGrammarVisitor.prototype.visitExpression = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#basic_math_operation.
SiddhiQLGrammarVisitor.prototype.visitBasic_math_operation = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#equality_math_operation.
SiddhiQLGrammarVisitor.prototype.visitEquality_math_operation = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#greaterthan_lessthan_math_operation.
SiddhiQLGrammarVisitor.prototype.visitGreaterthan_lessthan_math_operation = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#in_math_operation.
SiddhiQLGrammarVisitor.prototype.visitIn_math_operation = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#multiplication_math_operation.
SiddhiQLGrammarVisitor.prototype.visitMultiplication_math_operation = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#and_math_operation.
SiddhiQLGrammarVisitor.prototype.visitAnd_math_operation = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#or_math_operation.
SiddhiQLGrammarVisitor.prototype.visitOr_math_operation = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#not_math_operation.
SiddhiQLGrammarVisitor.prototype.visitNot_math_operation = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#addition_math_operation.
SiddhiQLGrammarVisitor.prototype.visitAddition_math_operation = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#function_operation.
SiddhiQLGrammarVisitor.prototype.visitFunction_operation = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#attribute_list.
SiddhiQLGrammarVisitor.prototype.visitAttribute_list = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#null_check.
SiddhiQLGrammarVisitor.prototype.visitNull_check = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#stream_reference.
SiddhiQLGrammarVisitor.prototype.visitStream_reference = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#attribute_reference.
SiddhiQLGrammarVisitor.prototype.visitAttribute_reference = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#attribute_index.
SiddhiQLGrammarVisitor.prototype.visitAttribute_index = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#function_id.
SiddhiQLGrammarVisitor.prototype.visitFunction_id = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#function_namespace.
SiddhiQLGrammarVisitor.prototype.visitFunction_namespace = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#stream_id.
SiddhiQLGrammarVisitor.prototype.visitStream_id = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#stream_alias.
SiddhiQLGrammarVisitor.prototype.visitStream_alias = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#property_name.
SiddhiQLGrammarVisitor.prototype.visitProperty_name = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#attribute_name.
SiddhiQLGrammarVisitor.prototype.visitAttribute_name = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#property_value.
SiddhiQLGrammarVisitor.prototype.visitProperty_value = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#source.
SiddhiQLGrammarVisitor.prototype.visitSource = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#target.
SiddhiQLGrammarVisitor.prototype.visitTarget = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#event.
SiddhiQLGrammarVisitor.prototype.visitEvent = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#name.
SiddhiQLGrammarVisitor.prototype.visitName = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#collect.
SiddhiQLGrammarVisitor.prototype.visitCollect = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#attribute_type.
SiddhiQLGrammarVisitor.prototype.visitAttribute_type = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#join.
SiddhiQLGrammarVisitor.prototype.visitJoin = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#constant_value.
SiddhiQLGrammarVisitor.prototype.visitConstant_value = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#id.
SiddhiQLGrammarVisitor.prototype.visitId = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#keyword.
SiddhiQLGrammarVisitor.prototype.visitKeyword = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#time_value.
SiddhiQLGrammarVisitor.prototype.visitTime_value = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#year_value.
SiddhiQLGrammarVisitor.prototype.visitYear_value = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#month_value.
SiddhiQLGrammarVisitor.prototype.visitMonth_value = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#week_value.
SiddhiQLGrammarVisitor.prototype.visitWeek_value = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#day_value.
SiddhiQLGrammarVisitor.prototype.visitDay_value = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#hour_value.
SiddhiQLGrammarVisitor.prototype.visitHour_value = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#minute_value.
SiddhiQLGrammarVisitor.prototype.visitMinute_value = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#second_value.
SiddhiQLGrammarVisitor.prototype.visitSecond_value = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#millisecond_value.
SiddhiQLGrammarVisitor.prototype.visitMillisecond_value = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#signed_double_value.
SiddhiQLGrammarVisitor.prototype.visitSigned_double_value = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#signed_long_value.
SiddhiQLGrammarVisitor.prototype.visitSigned_long_value = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#signed_float_value.
SiddhiQLGrammarVisitor.prototype.visitSigned_float_value = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#signed_int_value.
SiddhiQLGrammarVisitor.prototype.visitSigned_int_value = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#bool_value.
SiddhiQLGrammarVisitor.prototype.visitBool_value = function(ctx) {
};


// Visit a parse tree produced by SiddhiQLGrammarParser#string_value.
SiddhiQLGrammarVisitor.prototype.visitString_value = function(ctx) {
};



exports.SiddhiQLGrammarVisitor = SiddhiQLGrammarVisitor;