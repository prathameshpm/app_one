// Budget Controller
var budgetController = (function () {

})();

// UI Controller
var UIController = (function () {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        
        getDOMstrings: function(){
            return DOMstrings;
        }
    };

})();

// Global App Controller
var controller = (function (budgetCtrl, UICtrl) {
    
    var DOM = UICtrl.getDOMstrings();
    
    var ctrlAddItem = function () {

        // 1. Get the field input data
        var input = UICtrl.getInput();
        
        
        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('It works');

    };

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
        
    });

})(budgetController, UIController);
