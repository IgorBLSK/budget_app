// BUGDET CONTROLLER
var budgetController = (function() {

    
})();


// UI CONTROLLER
var UIController = (function() {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
           
        }
    };


})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
          
        // 1. get field imput data
        var input = UICtrl.getInput();
        console.log(input);

        // add item to budget controller

        // add item to UI

        // calculate total budget

        // display total budget

        console.log("TEST ctrlAddItem")
    }

    // Add button
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    // "Enter" keypress
    document.addEventListener('keypress', function(e) {
        if(e.keyCode === 13 || e.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);