function Ultrasonic() {
  var x = document.getElementById("Ultrasonic").value;
  if (x >= 20) {
    document.getElementById("Panen").style.display = "block";
  } else {
    document.getElementById("Panen").style.display = "none";
  }
}

function Pendingin() {
  // from checkbox with id pendingin, if checked display block
  // else display none
  var checkBox = document.getElementById("myonoffswitch");

  if (checkBox.checked) {
    document.getElementById("Dingin").style.display = "block";
  } else {
    document.getElementById("Dingin").style.display = "none";
  }
}
