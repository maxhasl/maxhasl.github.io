var msec = 1;
var sec = 1;
var min = 1;
var hour = 1;
var globt;
var buttong = document.getElementsByClassName('button');
//FUNCTION CREATE TIMER
function timerf () {
  var ms = document.getElementsByClassName('text__display');
    if(msec < 996) {
        ms[3].innerHTML = msec;
        msec = msec+4;
    } else {
        if (sec<10) {        	
            ms[2].innerHTML = "0" + sec + ":";
        	sec++;
    	   	msec = 0; 
    	} else if (sec>9&&sec<60) {
            ms[2].innerHTML = sec + ":";	
    	   	sec++;
    	   	msec = 0;
    	} else {
            ms[2].innerHTML = "00:";   
            // ms[1].innerHTML = "00:";
    		sec = 1;
    	   	msec = 0;
    		if (min<10) {
               ms[1].innerHTML = "0" + min + ":";
        	   min++;    	   	      
    		} else if (min>9&&min<60){
               ms[1].innerHTML = min + ":";	
    	       min++;
    	    } else {              
               ms[1].innerHTML = "00:";
               min = 1;
               if (hour<10) {
                  ms[0].innerHTML = "0" + hour + ":";
        	      hour++;
               } else if (hour>9&&hour<24) {
               	  ms[0].innerHTML = hour + ":";	
    	          hour++;
               } else {
               	  ms[0].innerHTML = "00:";
                  hour = 1;
               }
    	   	}
    	}
    }  
  }

// FUNCTION START
function startf () {
    var buttonl = document.getElementsByClassName('button');
    buttonl[0].style.display='none';
    buttonl[1].style.display='block';
    var timer = setInterval(timerf, 4);
    window.globt = timer;
}
// FUNCTION RESET
function resetf () {
	var buttonl = document.getElementsByClassName('button');
    var ms = document.getElementsByClassName('text__display');
    clearInterval(globt);
    buttonl[2].style.display='none';
    buttonl[1].style.display='none';
    buttonl[0].style.display='block';
    msec = 1;
    sec = 1;
    min = 1;
    hour = 1;
    ms[0].innerHTML = '00:';
    ms[1].innerHTML = '00:';
    ms[2].innerHTML = '00:';
    ms[3].innerHTML = '000';
}
//FUNCTION PAUSE
function pausef () {
    var buttonl = document.getElementsByClassName('button');
    buttonl[1].style.display='none';
    buttonl[2].style.display='block';
    clearInterval(globt);
}
//FUNCTION CONTINUE
function continuef () {
	var buttonl = document.getElementsByClassName('button');
    buttonl[2].style.display='none';
    buttonl[1].style.display='block';
    globt = setInterval(timerf, 4);
}
// CALLING FUNCTION
buttong[0].addEventListener('click', startf);
buttong[1].addEventListener('click', pausef);
buttong[2].addEventListener('click', continuef);
buttong[3].addEventListener('click', resetf);