import React, {useState} from 'react'


import Form from '../components/Form/Form'
import Table from '../components/Table/Table';
import WelcomeMessage from '../components/WelcomeMessage/WelcomeMessage';

export default function MainScreen({setToggleView, toggleView}) {


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






//Props to pass down - have not used Redux for this project given relativally few components & states to manage
const welcomeProps = {toggleView, setToggleView}
const formProps = {user, setUser,  setToggleView}
const tableProps = {user, setToggleView}

    return (
        <div className="content">
        <div className="container">
        
        {toggleView === "welcome" && <WelcomeMessage {...welcomeProps}/>}

        {toggleView === "form" && <Form {...formProps}/>}
   
         {toggleView === "table" &&  <Table {...tableProps}/>}

        </div>
      </div>
    )
}
