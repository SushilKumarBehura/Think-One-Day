import React, { useEffect, useState } from "react";

const GetQuestion = () => {
    let REACT_APP_URI = process.env.REACT_APP_URI
    let REACT_APP_URI_DJANGO = process.env.REACT_APP_URI_DJANGO


    
    let [getQuestion, setGetQuestion] = useState('');
    let [getQuestionId, setGetQuestionId] = useState('');

    let today = new Date();
    let today_date = today.getDate();
    let today_month = today.getMonth() + 1;
    let today_year = today.getFullYear();


    const fetchQuesData = async () => {
        const res = await fetch(`${REACT_APP_URI_DJANGO}/api/questionlist/?search=${today_year}-${today_month}-${today_date}`)
        const data = await res.json()
        return data
    }

    useEffect(() => {
        const getQuesData = async () => {
            const QuesDataFromServer = await fetchQuesData()
            setGetQuestion(QuesDataFromServer[0].question)
            setGetQuestionId(QuesDataFromServer[0].question_id)
        }
        getQuesData()
    }, [])

    // console.log(getQuestion)
    return {getQuestion, getQuestionId}
}

export default GetQuestion

