import React from 'react';
import Banner from './Banner/Banner';
import SubBanner from './SubBanner/SubBanner';
import Insta from './Instagram/Insta';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <SubBanner></SubBanner>
            <Insta></Insta>
        </div>
    );
};

export default Homepage;