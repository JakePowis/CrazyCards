import React from 'react'
import StepCounter from '../StepCounter/StepCounter'
import './WelcomeMessage.css'
import cardIcon from './cardicon.png'

export default function WelcomeMessage({toggleView, setToggleView}) {
    return (
        <div className="welcomeMessage">
        <StepCounter step1 />
        <div>Welcome to Crazy Cards. </div>
        <div>Enter some quick details to match you with a card:</div>
        <img src={cardIcon} className="cardIcon" alt="image of credit cards"/>
        <button onClick={()=> setToggleView("form")}>Find Me a Card!</button>
        </div>
        
    )
}
