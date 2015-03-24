// Generated from /Development/Projects/Gsoc/antl4/JS_Sample/SiddhiQLGrammar.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('../antlr4/index');

// This class defines a complete listener for a parse tree produced by SiddhiQLGrammarParser.
function SiddhiQLGrammarListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SiddhiQLGrammarListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SiddhiQLGrammarListener.prototype.constructor = SiddhiQLGrammarListener;

// Enter a parse tree produced by SiddhiQLGrammarParser#parse.
SiddhiQLGrammarListener.prototype.enterParse = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#parse.
SiddhiQLGrammarListener.prototype.exitParse = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#error.
SiddhiQLGrammarListener.prototype.enterError = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#error.
SiddhiQLGrammarListener.prototype.exitError = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#execution_plan.
SiddhiQLGrammarListener.prototype.enterExecution_plan = function(ctx) {

};

// Exit a parse tree produced by SiddhiQLGrammarParser#execution_plan.
SiddhiQLGrammarListener.prototype.exitExecution_plan = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#execution_element.
SiddhiQLGrammarListener.prototype.enterExecution_element = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#execution_element.
SiddhiQLGrammarListener.prototype.exitExecution_element = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#definition_stream_final.
SiddhiQLGrammarListener.prototype.enterDefinition_stream_final = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#definition_stream_final.
SiddhiQLGrammarListener.prototype.exitDefinition_stream_final = function(ctx) {

};


// Enter a parse tree produced by SiddhiQLGrammarParser#definition_stream.
SiddhiQLGrammarListener.prototype.enterDefinition_stream = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#definition_stream.
SiddhiQLGrammarListener.prototype.exitDefinition_stream = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#definition_table_final.
SiddhiQLGrammarListener.prototype.enterDefinition_table_final = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#definition_table_final.
SiddhiQLGrammarListener.prototype.exitDefinition_table_final = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#definition_table.
SiddhiQLGrammarListener.prototype.enterDefinition_table = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#definition_table.
SiddhiQLGrammarListener.prototype.exitDefinition_table = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#definition_function_final.
SiddhiQLGrammarListener.prototype.enterDefinition_function_final = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#definition_function_final.
SiddhiQLGrammarListener.prototype.exitDefinition_function_final = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#definition_function.
SiddhiQLGrammarListener.prototype.enterDefinition_function = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#definition_function.
SiddhiQLGrammarListener.prototype.exitDefinition_function = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#function_name.
SiddhiQLGrammarListener.prototype.enterFunction_name = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#function_name.
SiddhiQLGrammarListener.prototype.exitFunction_name = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#language_name.
SiddhiQLGrammarListener.prototype.enterLanguage_name = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#language_name.
SiddhiQLGrammarListener.prototype.exitLanguage_name = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#function_body.
SiddhiQLGrammarListener.prototype.enterFunction_body = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#function_body.
SiddhiQLGrammarListener.prototype.exitFunction_body = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#annotation.
SiddhiQLGrammarListener.prototype.enterAnnotation = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#annotation.
SiddhiQLGrammarListener.prototype.exitAnnotation = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#plan_annotation.
SiddhiQLGrammarListener.prototype.enterPlan_annotation = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#plan_annotation.
SiddhiQLGrammarListener.prototype.exitPlan_annotation = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#annotation_element.
SiddhiQLGrammarListener.prototype.enterAnnotation_element = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#annotation_element.
SiddhiQLGrammarListener.prototype.exitAnnotation_element = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#partition.
SiddhiQLGrammarListener.prototype.enterPartition = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#partition.
SiddhiQLGrammarListener.prototype.exitPartition = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#partition_final.
SiddhiQLGrammarListener.prototype.enterPartition_final = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#partition_final.
SiddhiQLGrammarListener.prototype.exitPartition_final = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#partition_with_stream.
SiddhiQLGrammarListener.prototype.enterPartition_with_stream = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#partition_with_stream.
SiddhiQLGrammarListener.prototype.exitPartition_with_stream = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#condition_ranges.
SiddhiQLGrammarListener.prototype.enterCondition_ranges = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#condition_ranges.
SiddhiQLGrammarListener.prototype.exitCondition_ranges = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#condition_range.
SiddhiQLGrammarListener.prototype.enterCondition_range = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#condition_range.
SiddhiQLGrammarListener.prototype.exitCondition_range = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#query_final.
SiddhiQLGrammarListener.prototype.enterQuery_final = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#query_final.
SiddhiQLGrammarListener.prototype.exitQuery_final = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#query.
SiddhiQLGrammarListener.prototype.enterQuery = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#query.
SiddhiQLGrammarListener.prototype.exitQuery = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#query_input.
SiddhiQLGrammarListener.prototype.enterQuery_input = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#query_input.
SiddhiQLGrammarListener.prototype.exitQuery_input = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#standard_stream.
SiddhiQLGrammarListener.prototype.enterStandard_stream = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#standard_stream.
SiddhiQLGrammarListener.prototype.exitStandard_stream = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#join_stream.
SiddhiQLGrammarListener.prototype.enterJoin_stream = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#join_stream.
SiddhiQLGrammarListener.prototype.exitJoin_stream = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#join_source.
SiddhiQLGrammarListener.prototype.enterJoin_source = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#join_source.
SiddhiQLGrammarListener.prototype.exitJoin_source = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#pattern_stream.
SiddhiQLGrammarListener.prototype.enterPattern_stream = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#pattern_stream.
SiddhiQLGrammarListener.prototype.exitPattern_stream = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#every_pattern_source_chain.
SiddhiQLGrammarListener.prototype.enterEvery_pattern_source_chain = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#every_pattern_source_chain.
SiddhiQLGrammarListener.prototype.exitEvery_pattern_source_chain = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#pattern_source_chain.
SiddhiQLGrammarListener.prototype.enterPattern_source_chain = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#pattern_source_chain.
SiddhiQLGrammarListener.prototype.exitPattern_source_chain = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#pattern_source.
SiddhiQLGrammarListener.prototype.enterPattern_source = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#pattern_source.
SiddhiQLGrammarListener.prototype.exitPattern_source = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#logical_stateful_source.
SiddhiQLGrammarListener.prototype.enterLogical_stateful_source = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#logical_stateful_source.
SiddhiQLGrammarListener.prototype.exitLogical_stateful_source = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#pattern_collection_stateful_source.
SiddhiQLGrammarListener.prototype.enterPattern_collection_stateful_source = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#pattern_collection_stateful_source.
SiddhiQLGrammarListener.prototype.exitPattern_collection_stateful_source = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#standard_stateful_source.
SiddhiQLGrammarListener.prototype.enterStandard_stateful_source = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#standard_stateful_source.
SiddhiQLGrammarListener.prototype.exitStandard_stateful_source = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#basic_source.
SiddhiQLGrammarListener.prototype.enterBasic_source = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#basic_source.
SiddhiQLGrammarListener.prototype.exitBasic_source = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#basic_source_stream_handlers.
SiddhiQLGrammarListener.prototype.enterBasic_source_stream_handlers = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#basic_source_stream_handlers.
SiddhiQLGrammarListener.prototype.exitBasic_source_stream_handlers = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#basic_source_stream_handler.
SiddhiQLGrammarListener.prototype.enterBasic_source_stream_handler = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#basic_source_stream_handler.
SiddhiQLGrammarListener.prototype.exitBasic_source_stream_handler = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#sequence_stream.
SiddhiQLGrammarListener.prototype.enterSequence_stream = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#sequence_stream.
SiddhiQLGrammarListener.prototype.exitSequence_stream = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#sequence_source_chain.
SiddhiQLGrammarListener.prototype.enterSequence_source_chain = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#sequence_source_chain.
SiddhiQLGrammarListener.prototype.exitSequence_source_chain = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#sequence_source.
SiddhiQLGrammarListener.prototype.enterSequence_source = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#sequence_source.
SiddhiQLGrammarListener.prototype.exitSequence_source = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#sequence_collection_stateful_source.
SiddhiQLGrammarListener.prototype.enterSequence_collection_stateful_source = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#sequence_collection_stateful_source.
SiddhiQLGrammarListener.prototype.exitSequence_collection_stateful_source = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#anonymous_stream.
SiddhiQLGrammarListener.prototype.enterAnonymous_stream = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#anonymous_stream.
SiddhiQLGrammarListener.prototype.exitAnonymous_stream = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#filter.
SiddhiQLGrammarListener.prototype.enterFilter = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#filter.
SiddhiQLGrammarListener.prototype.exitFilter = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#stream_function.
SiddhiQLGrammarListener.prototype.enterStream_function = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#stream_function.
SiddhiQLGrammarListener.prototype.exitStream_function = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#window.
SiddhiQLGrammarListener.prototype.enterWindow = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#window.
SiddhiQLGrammarListener.prototype.exitWindow = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#query_section.
SiddhiQLGrammarListener.prototype.enterQuery_section = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#query_section.
SiddhiQLGrammarListener.prototype.exitQuery_section = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#group_by.
SiddhiQLGrammarListener.prototype.enterGroup_by = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#group_by.
SiddhiQLGrammarListener.prototype.exitGroup_by = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#having.
SiddhiQLGrammarListener.prototype.enterHaving = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#having.
SiddhiQLGrammarListener.prototype.exitHaving = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#query_output.
SiddhiQLGrammarListener.prototype.enterQuery_output = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#query_output.
SiddhiQLGrammarListener.prototype.exitQuery_output = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#output_event_type.
SiddhiQLGrammarListener.prototype.enterOutput_event_type = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#output_event_type.
SiddhiQLGrammarListener.prototype.exitOutput_event_type = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#output_rate.
SiddhiQLGrammarListener.prototype.enterOutput_rate = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#output_rate.
SiddhiQLGrammarListener.prototype.exitOutput_rate = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#output_rate_type.
SiddhiQLGrammarListener.prototype.enterOutput_rate_type = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#output_rate_type.
SiddhiQLGrammarListener.prototype.exitOutput_rate_type = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#within_time.
SiddhiQLGrammarListener.prototype.enterWithin_time = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#within_time.
SiddhiQLGrammarListener.prototype.exitWithin_time = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#output_attribute.
SiddhiQLGrammarListener.prototype.enterOutput_attribute = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#output_attribute.
SiddhiQLGrammarListener.prototype.exitOutput_attribute = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#attribute.
SiddhiQLGrammarListener.prototype.enterAttribute = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#attribute.
SiddhiQLGrammarListener.prototype.exitAttribute = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#expression.
SiddhiQLGrammarListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#expression.
SiddhiQLGrammarListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#basic_math_operation.
SiddhiQLGrammarListener.prototype.enterBasic_math_operation = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#basic_math_operation.
SiddhiQLGrammarListener.prototype.exitBasic_math_operation = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#equality_math_operation.
SiddhiQLGrammarListener.prototype.enterEquality_math_operation = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#equality_math_operation.
SiddhiQLGrammarListener.prototype.exitEquality_math_operation = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#greaterthan_lessthan_math_operation.
SiddhiQLGrammarListener.prototype.enterGreaterthan_lessthan_math_operation = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#greaterthan_lessthan_math_operation.
SiddhiQLGrammarListener.prototype.exitGreaterthan_lessthan_math_operation = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#in_math_operation.
SiddhiQLGrammarListener.prototype.enterIn_math_operation = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#in_math_operation.
SiddhiQLGrammarListener.prototype.exitIn_math_operation = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#multiplication_math_operation.
SiddhiQLGrammarListener.prototype.enterMultiplication_math_operation = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#multiplication_math_operation.
SiddhiQLGrammarListener.prototype.exitMultiplication_math_operation = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#and_math_operation.
SiddhiQLGrammarListener.prototype.enterAnd_math_operation = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#and_math_operation.
SiddhiQLGrammarListener.prototype.exitAnd_math_operation = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#or_math_operation.
SiddhiQLGrammarListener.prototype.enterOr_math_operation = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#or_math_operation.
SiddhiQLGrammarListener.prototype.exitOr_math_operation = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#not_math_operation.
SiddhiQLGrammarListener.prototype.enterNot_math_operation = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#not_math_operation.
SiddhiQLGrammarListener.prototype.exitNot_math_operation = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#addition_math_operation.
SiddhiQLGrammarListener.prototype.enterAddition_math_operation = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#addition_math_operation.
SiddhiQLGrammarListener.prototype.exitAddition_math_operation = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#function_operation.
SiddhiQLGrammarListener.prototype.enterFunction_operation = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#function_operation.
SiddhiQLGrammarListener.prototype.exitFunction_operation = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#attribute_list.
SiddhiQLGrammarListener.prototype.enterAttribute_list = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#attribute_list.
SiddhiQLGrammarListener.prototype.exitAttribute_list = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#null_check.
SiddhiQLGrammarListener.prototype.enterNull_check = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#null_check.
SiddhiQLGrammarListener.prototype.exitNull_check = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#stream_reference.
SiddhiQLGrammarListener.prototype.enterStream_reference = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#stream_reference.
SiddhiQLGrammarListener.prototype.exitStream_reference = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#attribute_reference.
SiddhiQLGrammarListener.prototype.enterAttribute_reference = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#attribute_reference.
SiddhiQLGrammarListener.prototype.exitAttribute_reference = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#attribute_index.
SiddhiQLGrammarListener.prototype.enterAttribute_index = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#attribute_index.
SiddhiQLGrammarListener.prototype.exitAttribute_index = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#function_id.
SiddhiQLGrammarListener.prototype.enterFunction_id = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#function_id.
SiddhiQLGrammarListener.prototype.exitFunction_id = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#function_namespace.
SiddhiQLGrammarListener.prototype.enterFunction_namespace = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#function_namespace.
SiddhiQLGrammarListener.prototype.exitFunction_namespace = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#stream_id.
SiddhiQLGrammarListener.prototype.enterStream_id = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#stream_id.
SiddhiQLGrammarListener.prototype.exitStream_id = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#stream_alias.
SiddhiQLGrammarListener.prototype.enterStream_alias = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#stream_alias.
SiddhiQLGrammarListener.prototype.exitStream_alias = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#property_name.
SiddhiQLGrammarListener.prototype.enterProperty_name = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#property_name.
SiddhiQLGrammarListener.prototype.exitProperty_name = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#attribute_name.
SiddhiQLGrammarListener.prototype.enterAttribute_name = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#attribute_name.
SiddhiQLGrammarListener.prototype.exitAttribute_name = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#property_value.
SiddhiQLGrammarListener.prototype.enterProperty_value = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#property_value.
SiddhiQLGrammarListener.prototype.exitProperty_value = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#source.
SiddhiQLGrammarListener.prototype.enterSource = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#source.
SiddhiQLGrammarListener.prototype.exitSource = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#target.
SiddhiQLGrammarListener.prototype.enterTarget = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#target.
SiddhiQLGrammarListener.prototype.exitTarget = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#event.
SiddhiQLGrammarListener.prototype.enterEvent = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#event.
SiddhiQLGrammarListener.prototype.exitEvent = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#name.
SiddhiQLGrammarListener.prototype.enterName = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#name.
SiddhiQLGrammarListener.prototype.exitName = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#collect.
SiddhiQLGrammarListener.prototype.enterCollect = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#collect.
SiddhiQLGrammarListener.prototype.exitCollect = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#attribute_type.
SiddhiQLGrammarListener.prototype.enterAttribute_type = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#attribute_type.
SiddhiQLGrammarListener.prototype.exitAttribute_type = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#join.
SiddhiQLGrammarListener.prototype.enterJoin = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#join.
SiddhiQLGrammarListener.prototype.exitJoin = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#constant_value.
SiddhiQLGrammarListener.prototype.enterConstant_value = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#constant_value.
SiddhiQLGrammarListener.prototype.exitConstant_value = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#id.
SiddhiQLGrammarListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#id.
SiddhiQLGrammarListener.prototype.exitId = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#keyword.
SiddhiQLGrammarListener.prototype.enterKeyword = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#keyword.
SiddhiQLGrammarListener.prototype.exitKeyword = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#time_value.
SiddhiQLGrammarListener.prototype.enterTime_value = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#time_value.
SiddhiQLGrammarListener.prototype.exitTime_value = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#year_value.
SiddhiQLGrammarListener.prototype.enterYear_value = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#year_value.
SiddhiQLGrammarListener.prototype.exitYear_value = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#month_value.
SiddhiQLGrammarListener.prototype.enterMonth_value = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#month_value.
SiddhiQLGrammarListener.prototype.exitMonth_value = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#week_value.
SiddhiQLGrammarListener.prototype.enterWeek_value = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#week_value.
SiddhiQLGrammarListener.prototype.exitWeek_value = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#day_value.
SiddhiQLGrammarListener.prototype.enterDay_value = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#day_value.
SiddhiQLGrammarListener.prototype.exitDay_value = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#hour_value.
SiddhiQLGrammarListener.prototype.enterHour_value = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#hour_value.
SiddhiQLGrammarListener.prototype.exitHour_value = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#minute_value.
SiddhiQLGrammarListener.prototype.enterMinute_value = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#minute_value.
SiddhiQLGrammarListener.prototype.exitMinute_value = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#second_value.
SiddhiQLGrammarListener.prototype.enterSecond_value = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#second_value.
SiddhiQLGrammarListener.prototype.exitSecond_value = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#millisecond_value.
SiddhiQLGrammarListener.prototype.enterMillisecond_value = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#millisecond_value.
SiddhiQLGrammarListener.prototype.exitMillisecond_value = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#signed_double_value.
SiddhiQLGrammarListener.prototype.enterSigned_double_value = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#signed_double_value.
SiddhiQLGrammarListener.prototype.exitSigned_double_value = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#signed_long_value.
SiddhiQLGrammarListener.prototype.enterSigned_long_value = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#signed_long_value.
SiddhiQLGrammarListener.prototype.exitSigned_long_value = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#signed_float_value.
SiddhiQLGrammarListener.prototype.enterSigned_float_value = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#signed_float_value.
SiddhiQLGrammarListener.prototype.exitSigned_float_value = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#signed_int_value.
SiddhiQLGrammarListener.prototype.enterSigned_int_value = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#signed_int_value.
SiddhiQLGrammarListener.prototype.exitSigned_int_value = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#bool_value.
SiddhiQLGrammarListener.prototype.enterBool_value = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#bool_value.
SiddhiQLGrammarListener.prototype.exitBool_value = function(ctx) {
};


// Enter a parse tree produced by SiddhiQLGrammarParser#string_value.
SiddhiQLGrammarListener.prototype.enterString_value = function(ctx) {
};

// Exit a parse tree produced by SiddhiQLGrammarParser#string_value.
SiddhiQLGrammarListener.prototype.exitString_value = function(ctx) {
};



exports.SiddhiQLGrammarListener = SiddhiQLGrammarListener;