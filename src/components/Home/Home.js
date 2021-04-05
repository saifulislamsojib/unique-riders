import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import rideData from '../../rideData/rideData';
import Ride from '../Ride/Ride';
import './Home.css';

const Home = () => {
    const [rides, setRides] = useState([]);

    useEffect(() => {
        setRides(rideData)
    }, []);

    return (
        <Container>
           <div className='mt-5 mt-xl-0 d-flex align-items-center home-container'>
            <Row>
                {
                    rides.map((ride=> <Ride ride={ride} key={ride.id} /> ))
                }
            </Row>
           </div>
        </Container>
    );
};

export default Home;