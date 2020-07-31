/*Im using Module Pattern with closures and IIFE each module is indepandant by his self UI Seprated from Data
  Each on of the modules need to return object by return {.....}
  */

var budgetController = (function (){                           // Data Controller //
    return {
        addBalance: function(amount){
            return {
                balance:document.querySelector('.budget__value').value + amount
            }
        }
    }
})();

var UIController = (function (){   // Interface Controller // 
    var DOMStrings = {                                      // Doing this object if we in future want to change name of the classes in html it make our life better by doing it and not change in the entire code//
        Type: '.add__type',
        Description: '.add__description',
        Value: '.add__value',
        buttonV: '.add__btn'
    }

    return {
        getInput: function(){ 
            return {
                type: document.querySelector(DOMStrings.Type).value,        
                description:  document.querySelector(DOMStrings.Description).value,  
                value: document.querySelector(DOMStrings.Value).value
            }     
        },
        getDOMStrings: function(){
            return DOMStrings;
        }
    } 
})();

var controlCenter = (function(budgetCtrl,UICtrl){                                             // Connect between UI and Data Modules //
    function Update(){
        // 1.Get input data from field 
        var input = UICtrl.getInput();
        // 2.Add item to budget controller
        budgetCtrl.addBalance(input.value).balance;
        // 3.Add item to UI controller

        // 4.Update calculated budget
        // 5.Update UI with calculated budget
    }
    document.querySelector(UICtrl.getDOMStrings().buttonV).addEventListener('click',Update);

    document.addEventListener('keypress',function(event){                              //Because keypress on enter is in the global environment of the window
                                                                                     //event paramter is event from Listener when we push button in our app, im going to check his key code by using console.log and see object prortyes and his code:13
    if(event.keyCode === 13 || event.which === 13){                                 // its mean Enter pressed keyCode method for normal browser and which methods for older browsers
        Update();
    }                                                                                 
    })
})(budgetController,UIController);