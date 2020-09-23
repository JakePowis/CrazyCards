import React from 'react'
import './CardDetails.css'

export default function CardDetails({card}) {
    return (
    
        <div className="cardDetailsContainer">

        <div className="cardTitle">
            <img src={`../${card.image}`} alt="" style={{height:"220px"}}/>
            <div>{card.name}</div>
        </div>

        <div className="cardInfo">
                <div>Credit Limit: £{card.credit}</div>    
                <div>APR: {card.apr}%</div>
                <div>Balance Transfer: {card.balanceTransferDur !== 0 ? card.balanceTransferDur + " months" : "None"}</div>
               <div>Purchase Offer: {card.purchaseOfferDur !== 0 ? card.purchaseOfferDur + " months" : "None"}</div>
          
        </div>


        <div className="cardInfoFull">
               <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit. Aliquet bibendum enim facilisis gravida neque convallis. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Vitae purus faucibus ornare suspendisse. Vel fringilla est ullamcorper eget nulla facilisi etiam. Cursus vitae congue mauris rhoncus aenean. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.</div>
               <br/>
               <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit. Aliquet bibendum enim facilisis gravida neque convallis. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Vitae purus faucibus ornare suspendisse. Vel fringilla est ullamcorper eget nulla facilisi etiam. Cursus vitae congue mauris rhoncus aenean. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.</div>
        </div>
                     

        </div>
    )
}
