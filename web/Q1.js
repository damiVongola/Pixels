/**This program uses web workers to randomly color every pixel on a browser window page everytime the page is clicked */
browserWidth = window.innerWidth;
browserHeight = window.innerHeight;
randColour = null;
heightCounter = 0;

window.onload = function init(){
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	canvas.setAttribute("height", window.innerHeight);
	canvas.setAttribute("width", window.innerWidth);

	var worker = new Worker("worker.js");

	addEvent(document,"click",makeRow,false);

	function makeRow(){
		if( heightCounter < browserHeight ){
		for( i = 0 ; i < browserHeight; i++){
			worker.postMessage("start");
			worker.onmessage = function (eventObject){
				randColour = eventObject.data;
				console.log(randColour,canvas.style.width,canvas.style.height);
				context.fillStyle = randColour;
				context.fillRect(0,heightCounter,browserWidth,1);
			heightCounter++;
 			}
		} 
	}else { heightCounter = 0; makeRow()}
}
}

function addEvent(object, evName, fnName, cap) {
    if (object.attachEvent)
        object.attachEvent("on" + evName, fnName);
    else if (object.addEventListener)
        object.addEventListener(evName, fnName, cap);
}

