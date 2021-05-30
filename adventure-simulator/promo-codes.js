var promo_codes = [{VALUE: "GET-FREE-CAKE", EFFECT: function() {person.calories += 5000}}, {VALUE: "REALEASE-2.1.0", EFFECT: function() {person.money += 1000}}];
function reedemPromoCode(pc) {
  for (var i=0; i<promo_codes.length; i++) {
    if (pc = promo_codes[i].VALUE) {
      try {
        promo_codes[i].EFFECT();
        promo_codes[i] = undefined;
        return "Promo code sucessfully reedemed! You can't use one more than once.";
      } catch(err) {
        return "This promo code has been used. Reload to use it again";
      }
    }
    return "No promo code found. Please try again. Hint: Spelling & capitalization matters.";
  }
}
