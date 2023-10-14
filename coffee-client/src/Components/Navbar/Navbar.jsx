import React from 'react';
import logo from "../../assets/more/logo1.png"
import "./navbar.css"

const Navbar = () => {
    return (
        <div className='h-[15vh] navbg flex items-center justify-center gap-2'>
            <img className='w-[75px] h-[90px]' src={logo} alt="Logo" />
            <h1 className='text-4xl text-white'>Espresso Emporium</h1>
        </div>
    );
};

export default Navbar;