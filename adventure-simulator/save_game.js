function String.prototype.hexE() {
  var hexStr = "0123456789ABCDEF";
  var low = String % 16;
  var high = (String - low) / 16;
  var hex = "" + hexStr.charAt(high) + hexStr.charAt(low);
  return hex;
}
function String.prototype.hexD() {
  return parseInt(String, 16);
}
function save(data) {
  localStorage.setItem("savedata", JSON.stringify(data).hexE());
  output("Data saved!")
}
function load() {
  var d = JSON.parse(localStorage.getItem("savedata").hexD());
  output("Data loaded from last game!");
  return d;
  /*
  If I did this...
  
  alert("Data loaded from last game!");
  return JSON.parse(localStorage.getItem("savedata"));
  
  ...it will display "Data loaded from last game!" before it is loaded
  */
}
