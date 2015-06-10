/**
 * Created by tharindu on 6/1/15.
 */
function validateQueries(executionPlan,line) {

    if (executionPlan == "") {
        console.log("Query expressions cannot be empty.");
        return;
    }

    new Ajax.Request('validate.jsp', {
        method:'POST',
        asynchronous:false,
        parameters:{executionPlan:executionPlan },
        onSuccess:function (callbackMessage) {
            var resultText = callbackMessage.responseText.trim();
            if (resultText == "success") {
                console.log("Queries are valid!");
                return;
            } else {
                console.log(resultText,line);
                return;
            }
        }
    });
}
