ace.define("ace/snippets/siddhi",["require","exports","module"], function(require, exports, module) {
    "use strict";

    exports.snippetText = "snippet defStr\n\
	define stream ${1:stream_name} ( ${2:attr} );\n\
snippet attr\n\
	${1:attrName} ${2:attrType}\n\
snippet attrS\n\
	${1:attrName} string \n\
snippet attrI\n\
	${1:attrName} int \n\
snippet attrB\n\
	${1:attrName} bool \n\
snippet attrD\n\
	${1:attrName} double \n\
snippet attrF\n\
	${1:attrName} float\n\
snippet @PlanName\n\
	Plan : name(\"${1:Plan_Name}\")\n\
snippet @PlanDesc\n\
	Plan : Description(\"${1:Plan_Description}\")\n\
snippet @PlanStat\n\
	Plan : Statistics(\"${1:Plan_Statistics}\")\n\
snippet @PlanTrace\n\
	Plan : Trace(\"${1:Plan_Trace}\")\n\
snippet @Import\n\
	Import (\"${1:Stream_ID}\")\n\
snippet @Export\n\
	Export (\"${1:Stream_ID}\")\n\
snippet @Info\n\
	info ( name = \"${1:Stream_ID}\" )\n\
snippet @Config\n\
	config ( async = \'true\' )\n\
snippet query\n\
	from ${1:streme_name} \n\
	select ${2:atr1}\n\
	insert into ${3:out_stream} ;\n\
";
    exports.scope = "siddhi";

});