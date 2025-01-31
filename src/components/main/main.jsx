import React, { useContext } from 'react'; 
import './main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context.jsx';

const Main = () => {

    const { 
        onSent, 
        recentPrompt, 
        showResult, 
        loading, 
        resultData, 
        setInput, 
        input 
    } = useContext(Context);

  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="user icon" />
        </div>
        <div className="main-container">
            {!showResult
            ?<>
                    <div className="greet">
                    <p><span>Hello, Dev.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest good places for vacation</p>
                        <img src={assets.compass_icon} alt="compass" />
                    </div>
                    <div className="card">
                        <p>Suggest good songs</p>
                        <img src={assets.bulb_icon} alt="bulb" />
                    </div>
                    <div className="card">
                        <p>Suggest good food for dinner</p>
                        <img src={assets.message_icon} alt="message" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.code_icon} alt="code" />
                    </div>
                </div>
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading 
                    ? 
                       <div className="loader">
                           <hr />
                           <hr />
                           <hr /> 
                       </div>
                    :
                       <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div>
            </div>
            }
            <div className="main-bottom">
                <div className="search-box">
                    <input 
                        onChange={(e) => setInput(e.target.value)} 
                        value={input}  // Now input is available
                        type="text" 
                        placeholder="Enter your prompt"
                    />
                    <div>
                        <img src={assets.gallery_icon} alt="gallery" />
                        <img src={assets.mic_icon} alt="mic" />
                        {input?<img onClick = {()=>onSent()} src={assets.send_icon} alt="send" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate information
                </p>
            </div>
        </div>
    </div>
  );
}

export default Main;
