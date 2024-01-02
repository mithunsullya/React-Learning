import React from 'react'
import './card.css';
import { Link } from 'react-router-dom';

const Listing = (props) => {
    const {name, image, id, description } = props;
  return (
    <div className='card-list'>
        <Link to={`/details/${id}`}>
            <img src={image[0]} alt="" srcSet={image[0]} />
            <h3> {name} </h3>
            <p>{description}</p>
        </Link>
    </div>
  )
}

export default Listing