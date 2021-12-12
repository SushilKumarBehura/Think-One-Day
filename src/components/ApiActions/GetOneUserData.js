import React, { useEffect, useState } from "react";

const GetOneUserData = () => {
    let REACT_APP_URI = process.env.REACT_APP_URI
    let REACT_APP_URI_DJANGO = process.env.REACT_APP_URI_DJANGO

    let [getUserName, setGetUserName] = useState('');
    let [getOneUserDataId, setGetOneUserDataId] = useState('');
    let [getOneUserDataThreewords, setGetOneUserDataThreewords] = useState('');
    let [getOneUserDataTime, setGetOneUserDataTime] = useState('');
    
    // when login then simultaneously create a user in the userinformation endpoint and save the url_key
    // in the cookies/localstorage/whatever. And when I fetch the userinformation endpoint now then use that 
    // url_key to filter a particular user and get its details.

    const fetchUserData = async () => {
        const res = await fetch(`${REACT_APP_URI_DJANGO}/api/userinformation/`)
        const data = await res.json()
        return data
    }

    useEffect(() => {
        const getOneUserData = async () => {
            const UserDataFromServer = await fetchUserData()
            setGetUserName(UserDataFromServer[0].user_name)
            setGetOneUserDataId(UserDataFromServer[0].url_key)
            setGetOneUserDataThreewords(UserDataFromServer[0].today_three_words)
            setGetOneUserDataTime(UserDataFromServer[0].today_datetime_posted)
        }
        getOneUserData()
    }, [])

    // console.log(getOneUserData)
    return {getUserName, getOneUserDataId, getOneUserDataThreewords, getOneUserDataTime}
}

export default GetOneUserData
