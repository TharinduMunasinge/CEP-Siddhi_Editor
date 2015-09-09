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

var SiddhiQLGrammarListener = require('./SiddhiQLListener').SiddhiQLListener;
var loggerContext="CustomSiddhiListener";
CustomSiddhiListener = function() {
    SiddhiQLGrammarListener.call(this); // inherit default listener
    return this;
};

CustomSiddhiListener.prototype = Object.create(SiddhiQLGrammarListener.prototype);

CustomSiddhiListener.prototype.constructor = CustomSiddhiListener;


CustomSiddhiListener.prototype.exitDefinition_function = function(ctx) {

    if (SiddhiEditor.debug) {
        console.warn(loggerContext+":"+"exitDefinition_function"+"->");
        console.log("EXIT Function",ctx);
    }



    updateTable(ctx," ;")
};



CustomSiddhiListener.prototype.exitDefinition_stream = function(ctx) {
    var tempStrem =new window.completionEngine.STREAM();
    tempStrem.setStreamFromDefineStatement(ctx);
    window.completionEngine.streamList.addStream(tempStrem);
    updateTable(ctx," ;")
};



CustomSiddhiListener.prototype.exitDefinition_table = function(ctx) {
    window.TABLECTX=ctx;
    var tempTable =new window.completionEngine.TABLE();
    tempTable.setTableFromDefineStatement(ctx);
    window.completionEngine.tableList.addTable(tempTable);
    updateTable(ctx," ;")
};


function updateTable(ctx,seperator){
    SiddhiEditor.statementsList.push({state:ctx.start.getInputStream().getText(ctx.start.start,ctx.stop.stop)+seperator,line:ctx.start.line});

    if (SiddhiEditor.debug) {
        console.warn(loggerContext+":"+"updateTable"+"->");
        console.log("StatementList",SiddhiEditor.statementsList);
    }
}

CustomSiddhiListener.prototype.exitError = function(ctx) {
    updateTable(ctx," ")
};

CustomSiddhiListener.prototype.exitExecution_element = function(ctx) {
    updateTable(ctx,";")
};




CustomSiddhiListener.prototype.exitPlan_annotation = function(ctx) {
    updateTable(ctx," ")
};




CustomSiddhiListener.prototype.exitQuery = function(ctx) {
    window.QUERYCTX=ctx;
    //ctx.querxy_output().target().stop.text
    //QUERYCTX.query_output().target().stop.type into-46  ID=95

    ///QUERYCTX.query_section().output_attribute()[1].AS()
    // QUERYCTX.query_section().output_attribute()[0].attribute_reference().attribute_name().name().start.text

    // a as b => QUERYCTX.query_section().output_attribute()[0].attribute_name().name()  .ruleIndex=73
    //QUERYCTX.query_section().output_attribute()[0].attribute_name().name().stop.text =b
    //QUERYCTX.query_section().output_attribute()[0].attribute_name().name().stop.type=

    if(ctx.query_output() && ctx.query_output().children && ctx.query_output().target() && ctx.query_output().target().children && ctx.query_output().target().stop.type ==95) {

        var tempStream = new window.completionEngine.STREAM();

        if(ctx.query_output() && ctx.query_output().target() && ctx.query_output().target().children) {
            var tableList= completionEngine.tableList.getTableIDList();
            var id=ctx.query_output().target().stop.text;
            for(var i=0;i<tableList.length;i++)
            {
                if(tableList[i]==id)
                    return;
            }
            tempStream.id =id;

        }
        else
            return;



        var attributeList=(ctx.query_section() && ctx.query_section().children && ctx.query_section().output_attribute())?  ctx.query_section().output_attribute() : [];

        if(!ctx.query_section() ||(attributeList.length==0 && ctx.query_section().children && ctx.query_section().children[1] && ctx.query_section().children[1].symbol.type===14)) {
            if(ctx.query_input().standard_stream()) {
                var inputStream = ctx.query_input().standard_stream().source().stream_id().name().stop.text;
                tempStream.attributeNames = window.completionEngine.streamList.getAttributeList(inputStream);

                if (SiddhiEditor.debug) {
                    console.warn(loggerContext+":"+"exitQuery"+"->");
                    console.log("inferred stream", tempStream.attributeNames)
                }


            }else if(ctx.query_input().join_stream())
            {
                var leftsource=ctx.query_input().join_stream().left_source.source().stop.text;
                var rightsource=ctx.query_input().join_stream().right_source.source().stop.text;

                var leftStreamAttributeList=completionEngine.streamList.getAttributeList(leftsource);
                var rightStreamAttributeList=completionEngine.streamList.getAttributeList(rightsource);
                leftStreamAttributeList=leftStreamAttributeList.map(function(d){
                    return leftsource+"_"+d;
                });

                rightStreamAttributeList=rightStreamAttributeList.map(function(d){
                    return rightsource+"_"+d;
                });
                tempStream.attributeNames= leftStreamAttributeList.concat(rightStreamAttributeList);
                if (SiddhiEditor.debug) {
                    console.warn(loggerContext+":"+"exitQuery"+"->");
                      console.log("JOIN STREAM",tempStream);
                }


            }
        }
        for( i=0;i<attributeList.length;i++)
        {
            if(attributeList[i].AS())
            {
                if(attributeList[i].attribute_name() && attributeList[i].attribute_name().children && attributeList[i].attribute_name().name().stop.type==95)
                    tempStream.attributeNames.push(attributeList[i].attribute_name().name().stop.text);

            }else{
                if(attributeList[i].attribute_reference() && attributeList[i].attribute_reference().children && attributeList[i].attribute_reference().attribute_name() && attributeList[i].attribute_reference().attribute_name().children && attributeList[i].attribute_reference().attribute_name().name().stop.type==95)
                    tempStream.attributeNames.push(attributeList[i].attribute_reference().attribute_name().name().stop.text)
            }
        }


        window.completionEngine.streamList.addStream(tempStream);


    }
    updateTable(ctx, ";")

};

exports.CustomSiddhiListener = CustomSiddhiListener;
