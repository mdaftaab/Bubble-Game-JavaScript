var timer = 60;
var score = 0;
var hitnum = 0;

function increaseScore(){
	score += 10;
	document.querySelector("#scoreval").innerText = score;
}

function hitNumer(){
	hitnum = Math.floor(Math.random()*10);
	document.querySelector("#hitval").innerText = hitnum;
}

function makeBubble(){
	var bubbles = "";
	for(var i=1;i<=85;i++){
		var rn = Math.floor(Math.random()*10);
		bubbles += `<div class="bubble">${rn}</div>`;
	}
	document.querySelector(".pbot").innerHTML = bubbles;
}

function runTimer(){
	var timerset = setInterval(function (){
		if(timer > 0){
		timer --;
		document.querySelector('#timeval').innerText = timer;
	}
	else{
		clearInterval(timerset);
		document.querySelector(".pbot").innerHTML = `<h1>Game Over <br/><p>Your Score: ${score}</p></h1>`;
	}
	},1000);
}

document.querySelector(".pbot").addEventListener("click", function(e){
	var clickedNumber = Number(e.target.innerText);
	if(clickedNumber === hitnum){
		increaseScore();
		hitNumer();
		makeBubble();
	}
});

runTimer();
makeBubble();
hitNumer();