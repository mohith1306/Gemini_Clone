// import { createContext } from "react";
// import run from "../config/gemini";

// export const Context = createContext();

// const ContextProvider = (props)=>{

//     const onSent = async (prompt)=>{
//         await run(prompt)
//     }

//     onSent("What is react.js")

//     const ContextValue = {

//     }

//     return (
//         <Context.Provider value={ContextValue}>
//             {props.children}
//         </Context.Provider>
//     )
// }


// export default ContextProvider



import React, { createContext, useState, useEffect } from "react";
import run from "../config/gemini";
// import React, { useState } from 'react'
export const Context = createContext(); // Properly define the Context

const ContextProvider = (props) => {

    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const[prevPrompts,setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");
    const delayPara = (index,nextWord) =>{
        setTimeout(function () {
            setResultData((prevData) => prevData + nextWord);
        },75*index)
    }
    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
        const response = await run(input);
        let responseArray = response.split(("**"));
        let newResponse ="";
        for(let i = 0; i < responseArray.length;i++){
            if(i === 0 || i % 2 !==1){
                newResponse+=responseArray[i];
            }
            else{
                newResponse+="<b>"+responseArray[i]+"</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("<br>");
        let newResponseArray = newResponse2.split(" ");
        for(let i = 0; i<newResponseArray.length;i++){
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+" ");
        }
        setLoading(false);
        setInput("");
    };
    const ContextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    };

    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
