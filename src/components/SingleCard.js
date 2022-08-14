import React from 'react';
import '../components/singlecard.css';

function SingleCard({card}) {
  return (
    <div className="card">
        <div>
        <img className='front' src={card.src} alt="card-front" />
        <img className='back' src="cover.jpg" alt="card-back" />
        </div>
  </div>
  )
}

export default SingleCard