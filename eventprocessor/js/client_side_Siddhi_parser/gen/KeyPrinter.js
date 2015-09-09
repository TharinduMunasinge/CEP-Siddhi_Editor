/**
 * Created by tharindu on 3/22/15.
 */


var SiddhiQLGrammarListener = require('./SiddhiQLListener').SiddhiQLListener;
KeyPrinter = function () {
    SiddhiQLGrammarListener.call(this); // inherit default listener
    return this;
};

KeyPrinter.prototype = Object.create(SiddhiQLGrammarListener.prototype);

KeyPrinter.prototype.constructor = KeyPrinter;


KeyPrinter.prototype.exitDefinition_function = function (ctx) {

    //console.log("EXIT Function",ctx);
    //var tempTable =new completionEngine.TABLE();
    //tempTable.setTableFromDefineStatement(ctx);
    //completionEngine.tableList.addStream(tempTable);
    ////console.log("tempTable Defintion",tempTable);
    updateTable(ctx, " ;")
};


KeyPrinter.prototype.exitDefinition_stream = function (ctx) {
    var tempStrem = new window.completionEngine.STREAM();
    tempStrem.setStreamFromDefineStatement(ctx);
    window.completionEngine.streamList.addStream(tempStrem);
    updateTable(ctx, " ;")
};


KeyPrinter.prototype.exitDefinition_table = function (ctx) {
    window.TABLECTX = ctx;
    var tempTable = new window.completionEngine.TABLE();
    tempTable.setTableFromDefineStatement(ctx);
    window.completionEngine.tableList.addStream(tempTable);
    updateTable(ctx, " ;")
};


function updateTable(ctx, seperator) {
    SiddhiEditor.EditorTable.push({
        state: ctx.start.getInputStream().getText(ctx.start.start, ctx.stop.stop) + seperator,
        line: ctx.start.line
    });
    //console.log(SiddhiEditor.EditorTable)
}

KeyPrinter.prototype.exitError = function (ctx) {
    updateTable(ctx, " ")
};

KeyPrinter.prototype.exitExecution_element = function (ctx) {
    updateTable(ctx, ";")
};


KeyPrinter.prototype.exitPlan_annotation = function (ctx) {
    updateTable(ctx, " ")
};


KeyPrinter.prototype.exitQuery = function (ctx) {
    window.QUERYCTX = ctx;
    //ctx.querxy_output().target().stop.text
    //QUERYCTX.query_output().target().stop.type into-46  ID=95

    ///QUERYCTX.query_section().output_attribute()[1].AS()
    // QUERYCTX.query_section().output_attribute()[0].attribute_reference().attribute_name().name().start.text

    // a as b => QUERYCTX.query_section().output_attribute()[0].attribute_name().name()  .ruleIndex=73
    //QUERYCTX.query_section().output_attribute()[0].attribute_name().name().stop.text =b
    //QUERYCTX.query_section().output_attribute()[0].attribute_name().name().stop.type=

    if (ctx.query_output() && ctx.query_output().children && ctx.query_output().target() && ctx.query_output().target().children && ctx.query_output().target().stop.type == 95) {

        var tempStrem = new window.completionEngine.STREAM();

        if (ctx.query_output() && ctx.query_output().target() && ctx.query_output().target().children) {
            var tableList = completionEngine.tableList.getTableIDList();
            var id = ctx.query_output().target().stop.text;
            for (var i = 0; i < tableList.length; i++) {
                if (tableList[i] == id)
                    return;
            }
            tempStrem.id = id;

        }
        else
            return;


        var attributeList = (ctx.query_section() && ctx.query_section().children && ctx.query_section().output_attribute()) ? ctx.query_section().output_attribute() : [];

        if (!ctx.query_section() || (attributeList.length == 0 && ctx.query_section().children && ctx.query_section().children[1] && ctx.query_section().children[1].symbol.type === 14)) {
            if (ctx.query_input().standard_stream()) {
                var inputStream = ctx.query_input().standard_stream().source().stream_id().name().stop.text;
                tempStrem.attributeNames = window.completionEngine.streamList.getAttributeList(inputStream);
                //console.log("infered stream", tempStrem.attributeNames)
            } else if (ctx.query_input().join_stream()) {
                var leftsource = ctx.query_input().join_stream().left_source.source().stop.text;
                var rightsource = ctx.query_input().join_stream().right_source.source().stop.text;

                var leftStreamAttributeList = completionEngine.streamList.getAttributeList(leftsource)
                var rightStreamAttributeList = completionEngine.streamList.getAttributeList(rightsource)
                leftStreamAttributeList = leftStreamAttributeList.map(function (d) {
                    return leftsource + "_" + d;
                })

                rightStreamAttributeList = rightStreamAttributeList.map(function (d) {
                    return rightsource + "_" + d;
                })
                tempStrem.attributeNames = leftStreamAttributeList.concat(rightStreamAttributeList);
                //console.log("JOINSTREAM",tempStrem)
            }
        }
        for (var i = 0; i < attributeList.length; i++) {
            if (attributeList[i].AS()) {
                if (attributeList[i].attribute_name() && attributeList[i].attribute_name().children && attributeList[i].attribute_name().name().stop.type == 95)
                    tempStrem.attributeNames.push(attributeList[i].attribute_name().name().stop.text);

            } else {
                if (attributeList[i].attribute_reference() && attributeList[i].attribute_reference().children && attributeList[i].attribute_reference().attribute_name() && attributeList[i].attribute_reference().attribute_name().children && attributeList[i].attribute_reference().attribute_name().name().stop.type == 95)
                    tempStrem.attributeNames.push(attributeList[i].attribute_reference().attribute_name().name().stop.text)
            }
        }


        window.completionEngine.streamList.addStream(tempStrem);


    }
    updateTable(ctx, ";")

};

exports.KeyPrinter = KeyPrinter;
