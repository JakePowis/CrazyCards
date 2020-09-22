import React, {useState} from 'react'
import './Form.css'

export default function Form() {


    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(user)

    }

    const [user,setUser] = useState({
        "prefix": "",
        "firstName": "",
        "lastName": "",
        "dob": "",
        "occupation": "",
        "houseNumber": "",
        "postCode": "",
        "income": ""
    })

    const handleChange = (e) => {
        setUser({...user, [e.target.id]:e.target.value})
    }


    return (
        <div className="formContainer">
          <form onSubmit={submitHandler} className="form" onChange={handleChange}>
            <ul className="form-container">
                <li>
                    <h2>Your Details</h2>
                </li>

                <li>
                    <label htmlFor="name">Prefix</label>
                    <input type="text" name="prefix" id="prefix">
                    </input>
                </li>
         
                <li>
                    <label htmlFor="name">First Names</label>
                    <input type="text" name="firstName" id="firstName">
                    </input>
                </li>

                <li>
                    <label htmlFor="name">Last Name</label>
                    <input type="text" name="lastName" id="lastName">
                    </input>
                </li>
                <li>
                    <label htmlFor="email">Date of Birth</label>
                    <input type="text" name="dob" id="dob" >
                    </input>
                </li>
                <li>
                    <label htmlFor="password">Occupation</label>
                    <input type="text" id="occupation" name="occupation" >
                    </input>
                </li>
                <li>
                    <label htmlFor="password">House Number</label>
                    <input type="text" id="houseNumber" name="houseNumber" >
                    </input>
                </li>
                <li>
                    <label htmlFor="password">Post Code</label>
                    <input type="text" id="postCode" name="postCode" >
                    </input>
                </li>
                <li>
                    <label htmlFor="rePassword">Annual Income</label>
                    <input type="password" id="income" name="income" >
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Find a Card!</button>
                </li>
          </ul>
          </form>
        </div>
    )
}
