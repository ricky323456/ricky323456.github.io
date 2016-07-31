//Clock
setInterval(function(){
var d = new Date();
var h = d.getHours();
var m=d.getMinutes();
var s=d.getSeconds();
var day="";
if(h<12){
	day=" morning"
}
else if(h>11&&h<19){
day=" afternoon"
}
else{
day="evening"
}
if(h===0){
	h=12;
}
if(h>12){
	h-=12
}

if(m<10){
	m="0"+m;
}
if(s<10){
	s="0"+s;
}

document.getElementById("TOD").innerHTML=day;
document.getElementById("at").innerHTML= h+":"+m+":"+s;
}
,1000);
//end of clock script