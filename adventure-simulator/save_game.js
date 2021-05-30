function String.prototype.hexEncode() {
  var hexStr = "0123456789ABCDEF";
  var low = String % 16;
  var high = (String - low) / 16;
  var hex = "" + hexStr.charAt(high) + hexStr.charAt(low);
  return hex;
}
function String.prototype.hexDecode() {return parseInt(String, 16);}
function encode(d) {
  d = d.hexEncode();
  return d;
}
function decode(b) {
  b = b.hexDecode();
  return b;
}
function save(data) {
  localStorage.setItem("savedata", JSON.stringify(data).hexEncode());
  output("Data saved!")
}
function load() {
  var d = JSON.parse(localStorage.getItem("savedata").hexDecode());
  output("Data loaded from last game!");
  return d;
  /*
  If I did this...
  
  alert("Data loaded from last game!");
  return JSON.parse(localStorage.getItem("savedata"));
  
  ...it will display "Data loaded from last game!" before it is loaded
  */
}
