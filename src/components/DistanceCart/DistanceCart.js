import React from 'react';
import { Image } from 'react-bootstrap';
import './DistanceCart.css'
import personIcons from '../../images/peopleicon.png'

const DistanceCart = ({data, ride}) => {
    const {person, price}= data;
    const {image, name} = ride;
    return (
        <div className='distance-cart d-flex justify-content-between p-4 bg-white mb-3 rounded align-items-center'>
            <Image src={image} className='ride-img' fluid />
            <h4>{name}</h4>
            <div className='d-flex align-items-center'>
            <Image src={personIcons} className='person-img'  fluid />
                <h6 className='ml-2'>{person}</h6>
            </div>
            <h6>${price}</h6>
        </div>
    );
};

export default DistanceCart;