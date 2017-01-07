function calculateTip() {
  var bill = document.getElementById('totalBill').value;
  var percent = document.getElementById('percentTip').value;
  var people = document.getElementById('people').value;

  var totalTip = bill * percent / people;

document.getElementById('tip').innerHTML = totalTip;
document.getElementById('totalTip').style.display = "initial";
}





document.getElementById('totalTip').style.display = "none";

document.getElementById('calculate').onclick = function () {
  calculateTip();
}
