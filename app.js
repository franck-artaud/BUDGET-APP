// CHAPITRE 1
// Concept de base :  La décomposition,
// la séparation et la préoccupation des données publiques et privées

// On commence par écire le preùmier module

var budgetController = (function () {

    // // // Cette partie be sera pas vu
    // // par le publi_c dans le front-ebd c'est une partie "private"
    // car est elle ell comlprise à l'interieur e des patrenthèses


    var x = 23;

    var add = function(a) {
        return x + a;
    }
    // // // // cette partie rends ce qui est private accessible et
    // publiable dans le public.
    
    return {
        publicTest : function(b) {
            return(add(b));
        }
    }

})();

// On écroit ensuite le 2ème module dont nous avons besoin module

var UIController = (function() {

        //les lignes de code
}) ();

//Voici enfin le 3ème module

var controller = (function(budgetctrl, UIctrl) {

     var z = budgetctrl.publicTest(5);

     return {
         anotherPublic:function() {
             console.log(z);
         }
     }
})(budgetController,UIController );


// // ///Cette manière de traveiller est fondamentale car ainsi en créant
// // des modules on rcée avant tout une architecture
// _____________________________________________________________________ 


// CHAPITRE 2
// Comment configurer l'écouteur d'événement avec la frappe au clavier ?
// Commet utiliser l'objet évènement ?