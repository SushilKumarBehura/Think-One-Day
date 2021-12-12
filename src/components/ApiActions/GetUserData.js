import React, { useEffect, useState } from "react";

const GetUserData = () => {
    let REACT_APP_URI = process.env.REACT_APP_URI
    let REACT_APP_URI_DJANGO = process.env.REACT_APP_URI_DJANGO

    let [getUserDataThreewords, setGetUserDataThreewords] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch(`${REACT_APP_URI_DJANGO}/api/userinformation/`)
        const data = await res.json()
        return data
    }

    useEffect(() => {
        const getUserData = async () => {
            const UserDataFromServer = await fetchUserData()
            let three_word_map = new Map()
            for (let i=0; i<UserDataFromServer.length; i++){
                let temp_arr = UserDataFromServer[i].today_three_words.split("+++")
                for (let j=0; j<3; j++){
                    if (three_word_map.has(temp_arr[j])){
                        three_word_map.set(temp_arr[j], three_word_map.get(temp_arr[j])+1)
                    }else{
                        three_word_map.set(temp_arr[j], 1)
                    }
                }
            }
            // find the max frequency
            three_word_map = new Map([...three_word_map.entries()].sort((a, b) => b[1] - a[1]));
            
            let count = 0
            let three_word_arr = []
            for(let [keye, value] of three_word_map.entries()){
                if (count>=3){
                    break
                }
                three_word_arr.push(keye)
                count++
            }
            setGetUserDataThreewords(three_word_arr)
        }
        getUserData()
    }, [])

    return {getUserDataThreewords}
}

export default GetUserData
