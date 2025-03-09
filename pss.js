function checkAnswer() {
  var answer = document.querySelector('input[name="q1"]:checked').value;
  if (answer === "A") {
    document.getElementById("result").innerText = "Correct Answer!";
  } else {
    document.getElementById("result").innerText = "Incorrect. Try again.";
  }
}
