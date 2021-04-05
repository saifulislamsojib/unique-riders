import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DistanceCart from '../DistanceCart/DistanceCart';
import './Distance.css';

const Distance = ({ride}) => {

    const {handleSubmit, register} = useForm();

    const [distance, setDistance] = useState({});

    const onSubmit = data => setDistance(data);
    return (
        <div className='distance mt-5'>
            {!distance.from ?

            <form className='distance-form mb-2' onSubmit={handleSubmit(onSubmit)}>
                <h3>Pick From</h3>
                <input className='p-4 form-control my-3' type='text' name="from" ref={register} placeholder="Pick From" required />
                <h3>Pick To</h3>
                <input className='p-4 form-control my-3' type='text' name="to" ref={register} placeholder="Pick To" required />
                <h3>Date From</h3>
                <input className='p-4 form-control my-3' type='date' name="fromDate" ref={register} required />
                <h3>Date To</h3>
                <input className='p-4 form-control my-3' type='date' name="toDate" ref={register} required />

                <input className='p-2 w-100 btn btn-primary my-3' type="submit" value="Search"/>
            </form>:

            <div className='p-4 rounded'>
                <div className='bg-danger rounded text-white mb-4 from-to'>
                    <div className='from-to-icon'></div>
                    <h3 className='my-3'>{distance.from}</h3>
                    <h3 className='my-3'>{distance.to}</h3>
                </div>
                {[
                    {person:4, price: 66},
                    {person:8, price: 80},
                    {person:12, price: 100}
                ].map(data => <DistanceCart data={data} ride={ride} key={data.person} /> )}
            </div>
            }
        </div>
    );
};

export default Distance;