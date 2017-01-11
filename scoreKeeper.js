var p1Button = document.querySelector("#p1Button");
var p1ScoreDisp = document.querySelector("#p1ScoreDisp");
var p1Congrat = document.querySelector("p#p1Congrat");
var p1Box = document.querySelector("#p1Box");
var p2Button = document.querySelector("#p2Button");
var p2ScoreDisp = document.querySelector("#p2ScoreDisp");
var p2Congrat = document.querySelector("p#p2Congrat");
var p2Box = document.querySelector("#p2Box");
var resButton = document.querySelector("#resButton");
var scoreInput = document.querySelector("input");
var scoreInputDisp = document.querySelector("#scoreInputDisp")

var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var endGame = false;

p1Button.addEventListener("click", function(){
	if (endGame === false) {
		p1Score++;
		p1ScoreDisp.textContent = p1Score;
		if (p1Score === winningScore) {
			endGame = true;
			p1Congrat.classList.remove("hidden");
			p1Box.classList.add("highlight");
		}
	}
});

p2Button.addEventListener("click", function(){
	if (endGame === false) {
	p2Score++;
	p2ScoreDisp.textContent = p2Score;
		if (p2Score === winningScore) {
			endGame = true;
			p2Congrat.classList.remove("hidden");
			p2Box.classList.add("highlight");
		}
	}
});

scoreInput.addEventListener("change", function() {
	scoreInputDisp.textContent = scoreInput.value;
	resetGame();
	winningScore = Number(scoreInput.value);
	if (scoreInput.value < 0) {
		alert("Please enter a final score.")
		reset();
	}
});

resButton.addEventListener("click", resetGame);

function resetGame() {
	endGame = false;
	p1Score = 0;
	p1ScoreDisp.textContent = p1Score;
	p2Score = 0;
	p2ScoreDisp.textContent = p2Score;
	p1Congrat.classList.add("hidden");
	p1Box.classList.remove("highlight");
	p2Congrat.classList.add("hidden");
	p2Box.classList.remove("highlight");
}

