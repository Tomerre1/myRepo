/*Im using Module Pattern with closures and IIFE each module is indepandant by his self UI Seprated from Data
Each on of the modules need to return object by return {.....}
*/

 // Data Controller //
var budgetController = (function (){  
    
    //Function constructors For Expense Items & Income Items//
    var Expense = function(id , description ,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };        

    var Income = function(id , description ,value){
        this.id = id;
        this.description = description;
        this.value = value;    
    }; 

    //Data Structure(Object) to store all the data(Expense item , Income item , total exp , total inc//
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        total: {
            totalExp:0,
            totalInc:0
        }
    }
    return {
            
    }
})();

// Interface Controller // 
// Doing this object if we in future want to change name of the classes in html it make our life better by doing it and not change in the entire code//
var UIController = (function (){   
    var DOMStrings = {                                      
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

 // Connect between UI and Data Modules //
 //Because keypress on enter is in the global environment of the window
 //event paramter is event from Listener when we push button in our app, im going to check his key code by using console.log and see object prortyes and his code:13
 // its mean Enter pressed keyCode method for normal browser and which methods for older browsers
var controlCenter = (function(budgetCtrl,UICtrl){   
    function setupEventListeners(){
        document.querySelector(UICtrl.getDOMStrings().buttonV).addEventListener('click',updateItem);
        document.addEventListener('keypress',function(event){                                                                                                           
        if(event.keyCode === 13 || event.which === 13){                                     
            updateItem();
            }                                                                                 
        })
    }                                         
    function updateItem(){
        // 1.Get input data from field 
        var input = UICtrl.getInput();
        // 2.Add item to budget controller
        // 3.Add item to UI controller
        // 4.Update calculated budget
        // 5.Update UI with calculated budget
    }
    return { 
        init: function(){
            setupEventListeners();
        }
    }
})(budgetController,UIController);

controlCenter.init();