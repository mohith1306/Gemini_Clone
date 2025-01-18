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



import React, { createContext, useEffect } from "react";
import run from "../config/gemini";

const Context = createContext(); // Properly define the Context

const ContextProvider = (props) => {
    const onSent = async (prompt) => {
        await run(prompt);
    };

    useEffect(() => {
        // Call onSent only once after the component mounts
        onSent("What is react.js");
    }, []); // Empty dependency array ensures this runs only once

    const ContextValue = {
        // Add meaningful values or methods here
    };

    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
