import React, { useEffect, useState } from "react";
import './css/authentication.css';
import GetQuestion from './ApiActions/GetQuestion.js'

const ThinkKeywords = () => {

    let REACT_APP_URI = process.env.REACT_APP_URI
    let REACT_APP_URI_DJANGO = process.env.REACT_APP_URI_DJANGO

    const [kw1, setKw1] = useState('')
    const [kw2, setKw2] = useState('')
    const [kw3, setKw3] = useState('')
    
    // GET THE QUESTIONS FROM THE BACKEND
    let question_here = GetQuestion().getQuestion

    // Add the kEYWORD data to the database (ENDPOINT - USERINFORMATION, later will pass to the answertoquestions endpoint)
    const addData = async (keyword) => {
        const res = await fetch(`${REACT_APP_URI_DJANGO}/api/userinformation/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ 
                "user_name": "DGK",
                "current_three_words": String(keyword)
            })
        })
        const data = await res.json()
    }

    // check if the keyword written is just one word
    const checkOneword = (key) => {
        let keylen = key.split(" ")
        console.log(keylen)
        let keylen2 = []
        for (const i in keylen){
            if (keylen[i]!==''){
                keylen2.push(keylen[i])
            }
        }
        if (keylen2.length>=2){
            return 0
        }else{
            return 1
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!(kw1) | !(kw2) | !(kw3)) {
            alert('Please add the entry to submit!')
            return 
        }
        // check if the keyword written is just one word
        if (!(checkOneword(kw1)) | !(checkOneword(kw2)) | !(checkOneword(kw3))) {
            alert('Please enter one word keyword')
            return 
        }
        let keyword = kw1 + "+++" + kw2 + "+++" + kw3

        addData(keyword)
    }

    return (
        <>
            {/* <p><span>Thoughts</span> to be thought about</p> */}
            <div className="thinkkeywordpage">
                <h1>{question_here}</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Write down the first 3" value={kw1} onChange={(e) => setKw1(e.target.value)} />
                    <br />
                    <input type="text" placeholder="words that comes to" value={kw2} onChange={(e) => setKw2(e.target.value)} />
                    <br />
                    <input type="text" placeholder="your mind" value={kw3} onChange={(e) => setKw3(e.target.value)} />
                    <br />
                    <button type="submit">Start Thinking</button>
                    <br />
                </form>
                
                {/* OPTIONS FOR RENDERING THE NOTE ABOVE THE INPUT TAG */}
                {/* <div className="h5here">
                    <h5>Write down the first 3 words that comes to you mind.</h5>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="input text" />
                    <br />
                    <input type="text" placeholder="" />
                    <br />
                    <input type="text" placeholder="" />
                    <br />
                    <button type="submit">Start Thinking</button>
                    <br />
                </form> */}
                <p>ThinkOneDay</p>
            </div>
        </>
    )
}

export default ThinkKeywords
