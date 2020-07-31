/*Im using Module Pattern if closures and IIFE each module is indepandant by his self UI Seprated from Data
  Each on of the modules need to return object by return {.....}
  */

var budgetController = (function (){                           // Data Controller //

})();

var UIController = (function (){                             // Interface Controller // 

})();

var controlCenter = (function(budgetCtrl,UICtrl){                             // Connect between UI and Data Modules //

})(budgetController,UIController);