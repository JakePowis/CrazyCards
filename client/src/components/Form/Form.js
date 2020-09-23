import React from 'react'
import StepCounter from '../StepCounter/StepCounter'

import './Form.css'

export default function Form({user, setUser, setToggleView}) {


    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(user)
        setToggleView("table")
    }


    const handleChange = (e) => {
        setUser({...user, [e.target.id]:e.target.value})
    }

 


    return (
        <div>
        <StepCounter step2 />
        <div>
          <form onSubmit={submitHandler} className="form" onChange={handleChange}>
            <ul className="formContainer">
                <li>
                    <h2>Your Details</h2>
                </li>

                <li>
                    <label htmlFor="name">Prefix</label>
                    <input type="text" name="prefix" id="prefix">
                    </input>
                </li>
         
                <li>
                    <label htmlFor="firstname">First Names</label>
                    <input type="text" name="firstName" id="firstName">
                    </input>
                </li>

                <li>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName">
                    </input>
                </li>
                <li>
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="text" name="dob" id="dob" >
                    </input>
                </li>
                <li>
                    <label htmlFor="occupation">Occupation</label>
                    <input type="text" id="occupation" name="occupation" >
                    </input>
                </li>
                <li>
                    <label htmlFor="houseNumber">House Number</label>
                    <input type="text" id="houseNumber" name="houseNumber" >
                    </input>
                </li>
                <li>
                    <label htmlFor="postCode">Post Code</label>
                    <input type="text" id="postCode" name="postCode" >
                    </input>
                </li>
                <li>
                    <label htmlFor="income">Annual Income</label>
                    <input type="text" id="income" name="income" >
                    </input>
                </li>
             
          </ul>
        <div className="submitContainer">
            <button type="submit" className="button primary">Get Results</button>
        </div>
         
          </form>
        </div>
        </div>
    )
}
