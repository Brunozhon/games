/* index.html */
function output(text) { 
  var console = document.getElementById(/* Replace this with the actual ID of the element. */"console"); 
  console.innerHTML += "<br>" + text;
}
/* person.js */
var person = {
  money: 100,
  calories: 100
}
function buy(cost, prod, cals) {
  if (person.money >= cost) {
    person.money = person.money - cost;
    person.calories = person.calories + cals;
  } else {
    alert(/* Replace with your own alert message. */"You don't have enough money to buy the " + prod)
  }
}
/* save_game.js */
function String.prototype.hexEncode() {
  // Write your own encoding methods.
}
function String.prototype.hexDecode() {
  // Write your own decoding methods.
}
function load() {
  // Write your own loading methods.
}
function save() {
  // Write your own saving methods.
}
