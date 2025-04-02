import {FaDollarSign} from 'react-icons/fa'
import { useState } from 'react'
import React from 'react'

function Card( {card} ) {
  const maxlength =30;

  const [showFullDescription, setshowFullDescription] =useState(false);

  // toggle function
  const toggleDescription =() =>{
    setshowFullDescription(!showFullDescription);
  }

  //get description to render
  let description = card.description;
  // if show fulldescript is false and greater than max length make it short
  if(!showFullDescription && description.length > maxlength) {
    description = description.substring(0,maxlength) +'...';//to render
  }
  return (
    <ul>
        <li>{card.orderId}</li>
        <li><FaDollarSign style={ { display : 'inline'}}/>
          {card.totalAmount}
        </li>
        <li>{card.paymentStatus}</li>
        <li>{card.orderStatus}</li>
        <li>{card.deliveryStatus}</li>
        <li>{description}</li>

        {/* If actual deswcription length is greater than maxlength is true
        then code after the && (button)  is rendered. */}
        { card.description.length > maxlength && (
        <button onClick={ toggleDescription} >
          { showFullDescription ? 'less': 'more'}
        </button>
        )}
    </ul>
  )
}

export default Card