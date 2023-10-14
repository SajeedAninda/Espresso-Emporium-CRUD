import React, { useEffect, useState } from 'react';
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
            {coffeeData.map(coffee => (
                <SingleCard
                    key={coffee._id}
                    coffee={coffee}
                    coffeeData={coffeeData} 
                    setCoffeeData={setCoffeeData} 
                />
            ))}
        </div>
    );
};

export default CoffeeCard;
