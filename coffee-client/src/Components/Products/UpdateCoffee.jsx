import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    let coffeeData = useLoaderData();
    console.log(coffeeData);
    let { _id, name, chef, price, taste, category, details, imgUrl } = coffeeData;
    let navigate = useNavigate();

    let handleUpdate = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let chef = e.target.chef.value;
        let price = e.target.price.value;
        let taste = e.target.taste.value;
        let category = e.target.category.value;
        let details = e.target.details.value;
        let imgUrl = e.target.imgUrl.value;
        let coffeeDetails = { name, chef, price, taste, category, details, imgUrl };

        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: 'PUT',
            body: JSON.stringify(coffeeDetails),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                if (json.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Coffee Updated Successfully',
                        'success'
                    );
                    navigate("/");
                }
            });
    }

    return (
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
                        <h1 className='text-[#331A15] text-4xl' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>Update Existing Coffee Details</h1>
                        <p className='w-[50%] text-lg mx-auto'>
                            Adding a new coffee to a coffee list can be a delightful and flavorful experience, both for coffee enthusiasts and coffee shop owners. It's a process that involves more than just jotting down a name on a list; it's an art that combines the elements of taste, aroma, and presentation.
                        </p>
                    </div>


                    <form onSubmit={handleUpdate}>
                        <div className=' px-16'>
                            <div className='w-full flex gap-6 justify-between my-4'>
                                <div className='flex-1'>
                                    <label className='text-left text-2xl' htmlFor="name">Name</label> <br />
                                    <input className='w-full p-2 rounded-md' defaultValue={name} required type="text" placeholder='Enter Coffee Name' name='name' />
                                </div>
                                <div className='flex-1'>
                                    <label className='text-left text-2xl' htmlFor="name">Chef</label> <br />
                                    <input className='w-full p-2 rounded-md' defaultValue={chef} required type="text" placeholder='Enter Chef Name' name='chef' />
                                </div>
                            </div>



                            <div className='w-full flex gap-6 justify-between my-4'>
                                <div className='flex-1'>
                                    <label className='text-left text-2xl' htmlFor="price">Price</label> <br />
                                    <input className='w-full p-2 rounded-md' defaultValue={price} required type="text" placeholder='Enter Price' name='price' />
                                </div>
                                <div className='flex-1'>
                                    <label className='text-left text-2xl' htmlFor="Taste">Taste</label> <br />
                                    <input className='w-full p-2 rounded-md' defaultValue={taste} required type="text" placeholder='Enter Taste' name='taste' />
                                </div>
                            </div>


                            <div className='w-full flex gap-6 justify-between my-4'>
                                <div className='flex-1'>
                                    <label className='text-left text-2xl' htmlFor="Category">Category</label> <br />
                                    <input className='w-full p-2 rounded-md' defaultValue={category} required type="text" placeholder='Enter Category Name' name='category' />
                                </div>
                                <div className='flex-1'>
                                    <label className='text-left text-2xl' htmlFor="Details">Details</label> <br />
                                    <input className='w-full p-2 rounded-md' defaultValue={details} required type="text" placeholder='Enter Coffee Details' name='details' />
                                </div>
                            </div>


                            <div className='w-full flex gap-6 justify-between my-4'>
                                <div className='flex-1'>
                                    <label className='text-left text-2xl' htmlFor="Photo">Photo</label> <br />
                                    <input className='w-full p-2 rounded-md' defaultValue={imgUrl} required type="text" placeholder='Enter Photo URL' name='imgUrl' />
                                </div>
                            </div>


                            <div className='w-full flex gap-6 justify-between my-4'>
                                <button type='submit' className='text-[#242222] text-center flex items-center justify-center gap-2 bg-[#E3B577] w-full py-2 text-lg border-2 border-[#242222] rounded-lg'>
                                    <p>Update Existing Cofee</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
                                        <path d="M13.7143 11.4286V2.28571H2.28571V11.4286C2.28571 12.0348 2.52653 12.6162 2.95518 13.0448C3.38384 13.4735 3.96522 13.7143 4.57143 13.7143H11.4286C12.0348 13.7143 12.6162 13.4735 13.0448 13.0448C13.4735 12.6162 13.7143 12.0348 13.7143 11.4286ZM1.14286 0H18.2857C18.8919 0 19.4733 0.240816 19.902 0.66947C20.3306 1.09812 20.5714 1.67951 20.5714 2.28571V5.71429C20.5714 6.3205 20.3306 6.90188 19.902 7.33053C19.4733 7.75918 18.8919 8 18.2857 8H16V11.4286C16 12.641 15.5184 13.8038 14.6611 14.6611C13.8037 15.5184 12.641 16 11.4286 16H4.57143C3.35901 16 2.19625 15.5184 1.33894 14.6611C0.481631 13.8038 0 12.641 0 11.4286V1.14286C0 0.839753 0.120408 0.549062 0.334735 0.334735C0.549063 0.120408 0.839752 0 1.14286 0ZM16 2.28571V5.71429H18.2857V2.28571H16Z" fill="#331A15" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;