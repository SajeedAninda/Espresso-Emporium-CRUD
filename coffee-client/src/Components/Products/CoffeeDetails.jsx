import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {
    let detailedData = useLoaderData();
    console.log(detailedData);
    let { _id, name, chef, price, taste, category, details, imgUrl } = detailedData;
    return (
        <div>
            <div>
                <div className='addCoffeeBg h-fit'>
                    <Link to={"/"}>
                        <div className='flex items-center gap-2 my-6 justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19.5 12H4.5M4.5 12L11.25 18.75M4.5 12L11.25 5.25" stroke="#331A15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h1 className='text-[#331A15] text-2xl' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>Back to Home</h1>
                        </div>
                    </Link>
                    <div className='w-[85%] mx-auto bg-[#F4F3F0] py-8'>
                        <div className='text-center space-y-3'>
                            <h1 className='text-[#331A15] text-4xl' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>{name}</h1>
                        </div>
                        <div className='flex  flex-col md:flex-row items-center justify-center'>
                            <div className='flex-1 flex justify-center'>
                                <img src={imgUrl} alt="" />
                            </div>
                            <div className='flex-1'>
                                <p className='text-xl'>Name: <span className='text-[#5C5B5B]'>{name}</span>
                                </p>

                                <p className='text-xl'>Chef: <span className='text-[#5C5B5B]'>{chef}</span>
                                </p>


                                <p className='text-xl'>Price: <span className='text-[#5C5B5B]'>{price}</span>
                                </p>


                                <p className='text-xl'>Details: <span className='text-[#5C5B5B]'>{details}</span>
                                </p>

                                <p className='text-xl'>Taste: <span className='text-[#5C5B5B]'>{taste}</span>
                                </p>


                                <p className='text-xl'>Category: <span className='text-[#5C5B5B]'>{category}</span>
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;