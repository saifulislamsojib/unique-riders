import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import rideData from '../../rideData/rideData';
import Distance from '../Distance/Distance';
import Map from '../Map/Map';

const Destination = () => {
    const {id} = useParams();

    const [ride, setRide] = useState([]);

    useEffect(() => {
        const matchedRide = rideData.find(ride => ride.id === +id) || rideData[0];
        setRide(matchedRide);
    }, [id]);

    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <Distance ride={ride} />
                </Col>
                <Col lg={8}>
                    <Map />
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;