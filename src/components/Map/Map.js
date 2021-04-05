import GoogleMapReact from 'google-map-react';
import React from 'react';
import './Map.css';

const Map = () => {
    return (
        <div className='w-100 google-map my-5'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDms9TQpMEmmw6k1LspTgoKYJSOd5HCnqo'}}
                defaultCenter={{lat: 59.95, lng: 30.33}}
                defaultZoom={11}
            ></GoogleMapReact>
        </div>
    );
};

export default Map;
