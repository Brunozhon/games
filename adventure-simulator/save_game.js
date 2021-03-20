function save(data) {
  localStorage.setItem("savedata", JSON.stringify(data));
  alert("Data saved!")
}
function load() {
  var d = JSON.parse(localStorage.getItem("savedata"));
  alert("Data loaded from last game!");
  return d;
  /*
  If I did this...
  
  alert("Data loaded from last game!");
  return JSON.parse(localStorage.getItem("savedata"));
  
  ...it will display "Data loaded from last game!" before it is loaded
  */
}
