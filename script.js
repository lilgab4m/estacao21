document.getElementById("checkButton").addEventListener("click", function() {
  var dateInput = document.getElementById("dateInput").value;
  var date = new Date(dateInput);
  var month = date.getMonth() + 1; // January is 0

  var season = "";
  if (month >= 3 && month <= 5) {
    season = "Primavera";
  } else if (month >= 6 && month <= 8) {
    season = "Verão";
  } else if (month >= 9 && month <= 11) {
    season = "Outono";
  } else {
    season = "Inverno";
  }

  document.getElementById("result").textContent = "A estação do ano é: " + season;
});
