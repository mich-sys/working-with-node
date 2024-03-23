var fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
   ];
   
   export function getFortune() {
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
   }

   // the important thing to note here is the use of the global variable exports. If you want
   // something to be visible outside of the module, you have to add it to exports.