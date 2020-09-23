import React, {useEffect, useState} from 'react'
import { useParams } from "react-router";
import CardDetails from '../components/CardDetails/CardDetails';
import cardData from '../data/cards'

export default function CardScreen(props) {


    let { _id } = useParams();

    const [card, setCard] = useState(null)

    useEffect(() => {
        //load correct card based on address
        setCard(...cardData.cards.filter((x) => x._id === _id))
    }, [_id])


    return (
        <div>
        {card && <CardDetails card={card} />}
        </div>
    )
}
