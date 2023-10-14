import React from 'react';
import one from "../../assets/icons/1.png";
import two from "../../assets/icons/2.png";
import three from "../../assets/icons/3.png";
import four from "../../assets/icons/4.png";

const SubBanner = () => {
    return (
        <div className='bg-[#ECEAE3] h-fit'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 w-[85%] mx-auto py-6'>
                <div>
                    <img className='w-[60px]' src={one} alt="" />
                    <h3 className='text-[#331A15] text-2xl'>Awesome Aroma</h3>
                    <p className='text-[#1B1A1A]'>You will definitely be a fan of the <br /> design & aroma of your coffee</p>
                </div>

                <div>
                    <img className='w-[60px]' src={two} alt="" />
                    <h3 className='text-[#331A15] text-2xl'>High Quality</h3>
                    <p className='text-[#1B1A1A]'>We served the coffee to you <br /> maintaining the best quality</p>
                </div>

                <div>
                    <img className='w-[60px]' src={three} alt="" />
                    <h3 className='text-[#331A15] text-2xl'>Pure Grades</h3>
                    <p className='text-[#1B1A1A]'>The coffee is made of the green coffee beans <br /> which you will love</p>
                </div>

                <div>
                    <img className='w-[60px]' src={four} alt="" />
                    <h3 className='text-[#331A15] text-2xl'>Proper Roasting</h3>
                    <p className='text-[#1B1A1A]'>Your coffee is brewed by first roasting the <br /> green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default SubBanner;