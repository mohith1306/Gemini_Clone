import React from 'react'
import './main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon}/>
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I heelp you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest good places for vacation</p>
                    <img src={assets.compass_icon}/>
                </div>
                <div className="card">
                    <p>Suggest good songs</p>
                    <img src={assets.bulb_icon}/>
                </div>
                <div className="card">
                    <p>Suggest good food for dinner</p>
                    <img src={assets.message_icon}/>
                </div>
                <div className="card">
                    <p>Brainstrom team bonding activities for our work retreat</p>
                    <img src={assets.code_icon}/>
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type='text' placeholder="Enter your prompt"></input>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate information
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
