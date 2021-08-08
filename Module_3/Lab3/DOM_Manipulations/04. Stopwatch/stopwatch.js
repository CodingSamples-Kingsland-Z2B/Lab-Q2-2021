function stopwatch() {
    let startBtn = document.getElementById("startBtn");
    let stopBtn = document.getElementById("stopBtn");
    let stopTimer;
    startBtn.addEventListener("click",function(){
        startBtn.setAttribute("disabled","true");
        stopBtn.removeAttribute("disabled");
        stopTimer = setInterval(function(){
            let time = document.getElementById("time");
            let [mins,secs] = time.innerHTML.split(":");//"00:00:000" ["00","00"]
            mins = Number(mins);
            secs = Number(secs);
            // 59
            secs++;//00:59
            //60   //01:61
            if(secs>=60){
                mins++;
                secs= secs%60;
            }
            
            if(mins<10){
                mins = "0"+mins;
            }
            if(secs<10){
                secs = "0" +secs;
            }

            time.innerHTML = mins+":"+secs;
        },1000);
        

    });

    stopBtn.addEventListener("click",function(){
        clearInterval(stopTimer);
        startBtn.removeAttribute("disabled");
        stopBtn.setAttribute("disabled","true");
        document.getElementById("time").innerHTML = "00:00";
    });
}