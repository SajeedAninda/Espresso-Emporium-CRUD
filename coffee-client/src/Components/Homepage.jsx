import React from 'react';
import Banner from './Banner/Banner';
import SubBanner from './SubBanner/SubBanner';
import Insta from './Instagram/Insta';
import Products from './Products/Products';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <SubBanner></SubBanner>
            <Products></Products>
            <Insta></Insta>
        </div>
    );
};

export default Homepage;