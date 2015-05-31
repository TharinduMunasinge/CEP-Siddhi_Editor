/**
 * Created by tharindu on 6/8/15.
 */
function validateQueries(executionPlan) {

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
                console.log(resultText);
                return;
            }
        }
    });
}
