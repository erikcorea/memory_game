import React from 'react';
import '../components/singlecard.css';

function SingleCard({card, handleChoice}) {

    const handleClick = () =>{
        handleChoice(card);
    }

  return (
    <div className="card">
        <div>
        <img className='front' src={card.src} alt="card-front" />
        <img className='back' src="cover.jpg"onClick={handleClick} alt="card-back" />
        </div>
  </div>
  )
}

export default SingleCard