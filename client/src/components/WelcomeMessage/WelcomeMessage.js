import React from 'react'
import StepCounter from '../StepCounter/StepCounter'
import './WelcomeMessage.css'
import cardIcon from './cardicon.png'

export default function WelcomeMessage({toggleView, setToggleView}) {
    return (
        <div className="welcomeMessage">
        <StepCounter step1 />
        <div><h1>Welcome to Crazy Cards </h1></div>
        <div>Enter some quick details and we'll match <b>you</b> with your perfect cardu</div>
        <img src={cardIcon} className="cardIcon" alt=""/>
        <button onClick={()=> setToggleView("form")}>Find My Perfect Card</button>
        </div>
        
    )
}
