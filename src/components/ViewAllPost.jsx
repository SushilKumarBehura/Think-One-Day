import React, { useEffect, useState } from "react";

const ViewAllPost = () => {
	let REACT_APP_URI_DJANGO = process.env.REACT_APP_URI_DJANGO;
	let REACT_APP_URI = process.env.REACT_APP_URI;

	let [allPostAnswers, setallPostAnswers] = useState([]);
	let [allPostLike, setallPostLike] = useState([]);

	let today = new Date();
	let today_date = today.getDate();
	let today_month = today.getMonth() + 1;
	let today_year = today.getFullYear();


	const OnLikeClick = (e) => {
        // e.preventDefault()
        // if (!(kw1) | !(kw2) | !(kw3)) {
        //     alert('Please add the entry to submit!')
        //     return 
        // }
        // // check if the keyword written is just one word
        // if (!(checkOneword(kw1)) | !(checkOneword(kw2)) | !(checkOneword(kw3))) {
        //     alert('Please enter one word keyword')
        //     return 
        // }
        // let keyword = kw1 + "+++" + kw2 + "+++" + kw3

        // addData(keyword)
    }



	const fetchPostData = async () => {
		const res = await fetch(
			`${REACT_APP_URI_DJANGO}/api/answertoquestions/?search=${today_year}-${today_month}-${today_date}`
		);
		const data = await res.json();
		return data;
	};

	useEffect(() => {
		const getPostData = async () => {
			const PostDataFromServer = await fetchPostData();
			let temp_arr_answers = []
			let temp_arr_likes = []
			for (let i=0; i<PostDataFromServer.length; i++){
				temp_arr_answers.push(PostDataFromServer[i].answer_given)
				temp_arr_likes.push(PostDataFromServer[i].liked_integer)
			}
			setallPostAnswers(temp_arr_answers);
			setallPostLike(temp_arr_likes)
		};
		getPostData();
		// console.log(allPosts)
		
	}, []);

	console.log(allPostAnswers)
	let listy = []
	for (let i = 0; i < allPostAnswers.length; i++) {
		listy.push(
			<div className="viewallposts">
				<p>{allPostAnswers[i]}</p>
				<button onClick={OnLikeClick}>{allPostLike[i]}</button>
				<h2>ThinkOneDay</h2>
				<hr/>
			</div>
		);
	}

	return (
		<>
		{/* Can also Use the concept of props to create a new jsx  */}
		{listy}
		</>
	);
};

export default ViewAllPost;
