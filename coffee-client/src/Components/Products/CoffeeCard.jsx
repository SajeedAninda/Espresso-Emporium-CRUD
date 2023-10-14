import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from './SingleCard';

const CoffeeCard = () => {
    let [coffeeData, setCoffeeData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/coffees")
            .then(res => res.json())
            .then(data => setCoffeeData(data));
    }, []);

    return (
        <div className='grid grid-cols-2 gap-6'>
            {
                coffeeData.map(coffee => <SingleCard key={coffee._id} coffee={coffee}></SingleCard>)
            }
        </div>
    );
};

export default CoffeeCard;