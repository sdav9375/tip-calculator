function calculateTip() {

  var bill = totalBill.value;
  var percent = percentTip.value;

  if (people.value === "" || people.value <= 1) {
    people.value = "1";
    document.getElementById('each').style.display = "none";
  } else {
    document.getElementById('each').style.display = "block";
  }

  var ppl = people.value;

  var totalTip = (bill * percent) / ppl;
  totalTip = Math.round(totalTip * 100) / 100;
  totalTip = totalTip.toFixed(2);

  document.getElementById('tip').innerHTML = totalTip;
  document.getElementById('totalTip').style.display = "initial";
};




document.getElementById('totalTip').style.display = "none";

document.getElementById('calculate').onclick = function () {
  calculateTip();
}
