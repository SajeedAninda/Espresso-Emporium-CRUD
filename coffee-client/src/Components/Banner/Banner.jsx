import React from 'react';
import "./banner.css"
const Banner = () => {
    return (
        <div className='bannerBg h-screen flex justify-end items-center '>
            <div className='space-y-3 mr-32'>
                <h1 className='text-5xl text-white'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-base  text-white'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='text-[#242222] bg-[#E3B577] px-4 py-3'>
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Banner;