import React, {useState} from 'react'


import Form from '../Form/Form'
import Table from '../Table/Table';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';

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

const [cardsList, setCardsList] = useState([])




//Props to pass down - have not used Redux for this project given relativally few components & states to manage
const welcomeProps = {toggleView, setToggleView}
const formProps = {user, setUser, setCardsList, setToggleView}
const tableProps = {cardsList, setToggleView}

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
