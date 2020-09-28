import React, { useEffect } from "react";
import StepCounter from "../StepCounter/StepCounter";

import "./Form.css";

export default function Form({ user, setUser, setToggleView }) {
  const submitHandler = (e) => {
    e.preventDefault();
    //save data to local store so user doesnt have to renter is leaves page (redux could also solve this)
    localStorage.setItem("user", JSON.stringify(user));
    setToggleView("table");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleClear = () => {
    setUser({
      prefix: "",
      firstName: "",
      lastName: "",
      dob: "",
      occupation: "",
      houseNumber: "",
      postCode: "",
      income: "",
    });
    localStorage.removeItem("user");
  };

  //get saved user data if held
  useEffect(() => {
    const savedData = localStorage.getItem("user");
    if (savedData) {
      setUser(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="formPage">
      <StepCounter step2 />

      {/* NOTE: Getting React warning that can't have values when there is no onChnage event, 
        however there is an onChange event on the form so values can be changed. Values need to be there to 
        set user data from local store automatically on component mount */}

      <form onSubmit={submitHandler} className="form" onChange={handleChange}>
        <ul className="formContainer">
          <li>
            <h2>Your Details</h2>
          </li>

          <div className="startForm">
            <li>
              <label htmlFor="name">Prefix</label>
              <select
                type="text"
                name="prefix"
                id="prefix"
                value={user.prefix}
                required
              >
                <option value="">- select - </option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Miss</option>
                <option>Other</option>
              </select>
            </li>

            <li>
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="text"
                name="dob"
                id="dob"
                value={user.dob}
                placeholder="DD/MM/YYY"
                required
              ></input>
            </li>
          </div>

          <div className="nameForm">
            <li>
              <label htmlFor="firstname">First Names</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={user.firstName}
                required
              ></input>
            </li>

            <li>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={user.lastName}
                required
              ></input>
            </li>
          </div>

          <div className="workForm">
            <li>
              <label htmlFor="name">Occupation</label>
              <select
                id="occupation"
                name="occupation"
                value={user.occupation}
                required
              >
                <option value="">- select - </option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Student</option>
                <option>Other</option>
              </select>
            </li>

            <li>
              <label htmlFor="income">Annual Income</label>
              <input
                type="number"
                id="income"
                name="income"
                value={user.income}
                required
              ></input>
            </li>
          </div>

          <div className="otherForm">
            <li>
              <label htmlFor="houseNumber">House Number</label>
              <input
                type="text"
                id="houseNumber"
                name="houseNumber"
                value={user.houseNumber}
                required
              ></input>
            </li>
            <li>
              <label htmlFor="postCode">Post Code</label>
              <input
                type="text"
                id="postCode"
                name="postCode"
                value={user.postCode}
                required
              ></input>
            </li>
          </div>
        </ul>
        <div className="submitContainer">
          <button type="submit" className="button primary">
            Get Results
          </button>
          <button onClick={handleClear} type="reset" className="button clear">
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
}
