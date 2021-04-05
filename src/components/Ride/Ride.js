import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './Ride.css';

const Ride = ({ride}) => {
    
    const history = useHistory();
    const handleDestination = (id) => {
        history.push(`/destination/${id}`);
    }

    const {name, image, id} = ride;
    return (
        <Col className='mb-4' md={6} lg={4} xl={3}>
            <div onClick={()=>handleDestination(id)} className="bg-white p-5 text-center h-100 rounded shadow ride">
                <div className='img-container'>
                    <Image src={image} fluid/>
                </div>
                <h2 className='mt-4 mt-md-2'>{name}</h2>
            </div>
        </Col>
    );
};

export default Ride;