onmessage = getRandColour;

function getRandColour(event) {
	var string = "rgb(" + randNum() + "," 
	+ randNum() + "," + randNum() + ")";
    postMessage(string);
}

function randNum(){
	var rand = Math.random() * 255;
	return Math.floor(rand);
}