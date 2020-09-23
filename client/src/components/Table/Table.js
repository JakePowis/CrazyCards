import React, {useEffect, useState} from 'react'
import StepCounter from '../StepCounter/StepCounter'
import cardData from '../../data/cards'
import matchCards from '../../util/matchCards'
import { Link } from 'react-router-dom';
import './Table.css'


export default function Table({user, setToggleView}) {

    const [matchedCards, setMatchedCards] = useState([])
    const [selectedCards, setSelectedCards] = useState([])

    useEffect(() => {

        //load update card list on page load - would be from API using Fetch request, but here just using data file
        const cardList = (cardData.cards)   

        //then match the cards using user data using matchCards util
        setMatchedCards(matchCards(user, cardList))


         }, [user])
    
    const handleSelected = (card) => {


        if (document.getElementById(card._id).classList.contains("selected")){
            document.getElementById(card._id).classList.remove("selected");
            setSelectedCards(selectedCards.filter(x => x._id !== card._id))

        }
        else {
            document.getElementById(card._id).classList.add("selected");
            setSelectedCards([...selectedCards, card] )
        }


    }

    return (
        <div>

            <StepCounter step3 />
        

           
            <h3>Your Matches. Click to select.</h3>
            <div className="table">
           {matchedCards.map((card)=> (
            
            <div className="result" onClick={()=>handleSelected(card)} key={card._id} id={card._id}>
                <div className="image">
                <img src={card.image} alt=""/>
                </div>

                <div className="cardName">
                <div>{card.name}</div>
               </div>


               <div className="cardDetails">
               <div>APR:{card.apr}%</div>
               <div>Balance Transfer: {card.balanceTransferDur !== 0 ? card.balanceTransferDur + " months" : "None"}</div>
               <div>Purchase Offer: {card.purchaseOfferDur !== 0 ? card.purchaseOfferDur + " months" : "None"}</div>
               <Link to={`/card/${card._id}`}> <div>Click here for More Info</div></Link>
               </div>

               <div className="cardCredit">
               <div>Limit: £{card.credit}</div>
               </div>

            </div>
            
           ))}
           </div>

            <div className="total">
                <div>Total Credit Selected: £{selectedCards.reduce((a, card) => a + card.credit, 0)}</div>
            </div>



        <div className="buttonContainer">
           <button className="editButton" onClick={()=> setToggleView("form")}>Edit Details</button>

            <button onClick={()=> setToggleView("apply")} disabled >Apply</button>

            </div>
        </div>
    )
}
