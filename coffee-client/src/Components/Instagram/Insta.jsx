import React from 'react';
import cup1 from "../../assets/cups/1.png";
import cup2 from "../../assets/cups/2.png";
import cup3 from "../../assets/cups/3.png";
import cup4 from "../../assets/cups/4.png";
import cup5 from "../../assets/cups/5.png";
import cup6 from "../../assets/cups/6.png";
import cup7 from "../../assets/cups/7.png";
import cup8 from "../../assets/cups/8.png";

const Insta = () => {
    return (
        <div className='w-[85%] mx-auto py-12'>
            <div className='text-center mb-6'>
                <h5 className='text-[#1B1A1A] text-lg'>Follow Us Now</h5>
                <h1 className='text-[#331A15] text-4xl' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
                    Follow On Instagram
                </h1>
            </div>

            <div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="grid gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src={cup1} alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src={cup2} alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src={cup3} alt="" />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src={cup4} alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src={cup5} alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src={cup6}alt="" />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src={cup7} alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src={cup8} alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src={cup2} alt="" />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src={cup3} alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src={cup1} alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src={cup4} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Insta;
