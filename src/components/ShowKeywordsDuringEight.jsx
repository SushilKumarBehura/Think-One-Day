import React, { useEffect, useState } from "react";
import GetUserData from './ApiActions/GetUserData.js'
import GetOneUserData from './ApiActions/GetOneUserData.js'
import Timer from './ClientFunctions/Timer.js'


const ShowKeywordsDuringEight = () => {

    // GET USER'S THREE_WORDS HE SUBMITTED 8HRS AGO.
	let three_words = GetUserData().getUserDataThreewords
	// let time_started = GetOneUserData().getOneUserDataTime
	let time_started = '2021-12-11T11:02:12.886478Z'
    let timer_html = Timer(time_started)
    // console.log(three_words)

    let listy = [];
	for (let i = 0; i < three_words.length; i++) {
		listy.push(
            <div>
                <p>{three_words[i]}</p>
            </div>
        );
	}
    return (
        <>
            <div>
                <div className="showkeyword">
                        <p>Here are some words to think about</p>
                        {listy}
                        <input type="text" placeholder="keyword" />
                        <p>To give your answer, come back after... </p>
                        
                        <button type="submit">{timer_html}</button>
                        <h2>ThinkOneDay</h2>
                        
                </div>
            </div> 
        </>
    )
}

export default ShowKeywordsDuringEight;
