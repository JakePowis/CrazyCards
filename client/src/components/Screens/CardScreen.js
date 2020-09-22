import React from 'react'
import { useParams } from "react-router";

export default function CardScreen(props) {


    let { _id } = useParams();


    return (
        <div>
            Card Screen, card selected is {_id}
        </div>
    )
}
