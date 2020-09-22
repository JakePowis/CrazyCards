import React from 'react'
import StepCounter from '../StepCounter/StepCounter'
import './Table.css'


export default function Table({cardsList, setToggleView}) {


    return (
        <div>

            <StepCounter step3 />
        
        

            <button className="editButton" onClick={()=> setToggleView("form")}>Edit Details</button>

            TABLE Of RESULTS

            <button onClick={()=> setToggleView("welcome")}>Home</button>
        </div>
    )
}
