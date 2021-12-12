import React, { useEffect, useState } from "react";

const Timer = (countDownDate) => {

    let [timerCrack, setTimerCrack] = useState('')

    // Set the date we're counting down to
    // let countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
    countDownDate = new Date(countDownDate).getTime();

    countDownDate = countDownDate + 8*(60*60*1000)

    // Update the count down every 1 second
    let x = setInterval(function() {

        // Get present time
        let now = new Date().getTime();
        
        // Find the distance between now and the count down date
        let distance = countDownDate - now;
            
        // Time calculations for hours, minutes and seconds
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        // Output the result in an element with id="demo"
        setTimerCrack(hours + "h " + minutes + "m " + seconds + "s ")
            
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            setTimerCrack("EXPIRED");
        }
    }, 1000);
    // console.log(timerCrack)

    return (
        <div>
            {timerCrack}
        </div>
    )
}

export default Timer
