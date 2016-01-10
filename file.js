function time(){
	var pcTime = new Date;
	var hour = pcTime.getHours();
	var minutes = pcTime.getMinutes();
	var seconds = pcTime.getSeconds();
	
	if (hour > 12){
		hour -= 12;
}
	else if (hour === 0){
	hour += 12;
	}
		

	if(seconds < 10){
		seconds = "0" + seconds;
	}
	if (minutes < 10){
		minutes = "0" + minutes;
	}


	var call = document.getElementById("clock");
	call.innerHTML = hour + ":" + minutes + ":" + seconds;
}
time();
setInterval(time, 1000);