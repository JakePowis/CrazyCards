import React from 'react'
import StepCounter from '../StepCounter/StepCounter'
import './WelcomeMessage.css'
import cardIcon from './cardicon.png'

export default function WelcomeMessage({toggleView, setToggleView}) {
    return (
        <div className="welcomeMessage">
        <StepCounter step1 />
        <div><h1>Welcome to Crazy Cards </h1></div>
        <div>Enter some quick details and we'll match <b>you</b> with the right card for you</div>
        <img src={cardIcon} className="cardIcon" alt="image of credit cards"/>
        <button onClick={()=> setToggleView("form")}>Find My Perfect Card</button>
        </div>
        
    )
}
