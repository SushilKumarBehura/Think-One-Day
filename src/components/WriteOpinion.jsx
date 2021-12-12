import React, { useEffect, useState } from "react";
import GetQuestion from './ApiActions/GetQuestion.js'
import GetOneUserData from './ApiActions/GetOneUserData.js'

const WriteOpinion = () => {

	let REACT_APP_URI = process.env.REACT_APP_URI
	let REACT_APP_URI_DJANGO = process.env.REACT_APP_URI_DJANGO

	// GET THE QUESTIONS FROM THE BACKEND
	let question_here = GetQuestion().getQuestion
	let question_id = GetQuestion().getQuestionId

	// GET USER'S THREE_WORDS HE SUBMITTED 8HRS AGO.
	let three_words = GetOneUserData().getOneUserDataThreewords
	let user_id = GetOneUserData().getOneUserDataId
	console.log()


	// ADD OPINION TO THE BACKEND (endpoint - answertoquestions)
	const addData = async (opinion_post) => {
		const res = await fetch(`${REACT_APP_URI_DJANGO}/api/answertoquestions/`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				"answer_given": String(opinion_post),
				"three_words": String(three_words),
				"user_ref_id": String(user_id),
				"question_ref_id": question_id
			})
		})
		const data = await res.json()
	}

	const check25word = (opinion) => {
		if (opinion.split(" ").length<10){
			return 0
		}else{
			return 1
		}
	}

	let [opinion, setOpinion] = useState('')
	const handleSubmit = (e) => {
        e.preventDefault()
        if (!(opinion)) {
            alert('Please add the entry to submit!')
            return 
        }
        // check if the opinion sentence has 
        if (!(check25word(opinion))) {
            alert('Sentence should atleast have 10 words.')
            return 
        }
        addData(opinion)
    }



	return (
		<div>
			<div className="writeopinion">
				<h1>{question_here}</h1>
                <form onSubmit={handleSubmit}> 
					<textarea rows="15" cols="38" name="comment" form="usrform" placeholder="Your answer here..." value={opinion} onChange={(e) => setOpinion(e.target.value)}></textarea>
					<button type="submit">Share your opinion</button>
				</form>
				<p>ThinkOneDay</p>
			</div>
		</div>
	);
};

export default WriteOpinion;
