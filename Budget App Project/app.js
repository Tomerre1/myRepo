/*Im using Module Pattern with closures and IIFE each module is indepandant by his self UI Seprated from Data
  Each on of the modules need to return object by return {.....}
  */

var budgetController = (function (){                           // Data Controller //

})();

var UIController = (function (){   // Interface Controller // 
    
})();

var controlCenter = (function(budgetCtrl,UICtrl){                                             // Connect between UI and Data Modules //
    function Update(){
        // 1.Get input data from field 
        // 2.Add item to budget controller
        // 3.Add item to UI controller
        // 4.Update calculated budget
        // 5.Update UI with calculated budget
        console.log("Check");
    }
    document.querySelector('.add__btn').addEventListener('click',Update);

    document.addEventListener('keypress',function(event){                              //Because keypress on enter is in the global environment of the window
                                                                                     //event paramter is event from Listener when we push button in our app, im going to check his key code by using console.log and see object prortyes and his code:13
    if(event.keyCode === 13 || event.which === 13){                                 // its mean Enter pressed keyCode method for normal browser and which methods for older browsers
        Update();
    }                                                                                 
    })
})(budgetController,UIController);