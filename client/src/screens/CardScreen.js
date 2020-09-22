import React, {useEffect} from 'react'
import { useParams } from "react-router";

export default function CardScreen(props) {


    let { _id } = useParams();

    useEffect(() => {
       //get data from params card on load
    }, [])


    return (
        <div>
            Card Screen, card selected is {_id}
        </div>
    )
}
