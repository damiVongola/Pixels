onmessage = makeRow;

randColor = null;
heightCounter = 0;

var worker = new Worker("worker.js");
//addEvent(document,"click",makeRow,false);

function makeRow(event){
		if( heightCounter < event.innerHeight ){
		for( i = 0 ; i < event.innerHeight; i++){
			worker.postMessage("start");
			worker.onmessage = function (eventObject){
				randColour = eventObject.data;
				console.log(randColor,canvas.style.width,canvas.style.height);
				context.fillStyle = randColor;
				context.fillRect(0,heightCounter,event.innerWidth,1);
			heightCounter++;
 			}
		} 
	}else { heightCounter = 0; makeRow()}
}


function addEvent(object, evName, fnName, cap) {
    if (object.attachEvent)
        object.attachEvent("on" + evName, fnName);
    else if (object.addEventListener)
        object.addEventListener(evName, fnName, cap);
}