import React, { useState } from 'react';
import Navbar from '../Components/Shared/Navbar';

const BloodSearch = () => {
     const [location, setLocation] = useState('');
     return (
          <div className="flex-1 flex flex-col">
               <Navbar />
               <ul className="steps mx-auto w-full mt-20">
                    <li className="step step-primary">Put location</li>
                    <li className="step step-primary">Choose plan</li>
                    <li className="step">Purchase</li>
                    <li className="step">Receive Product</li>
               </ul>
               <div className="flex-1 flex items-center justify-center h-96">
                    <div className="pt-8 sm:max-w-md md:max-w-lg lg:max-w-xl flex items-center justify-center">
                         <form action="" className="flex justify-center items-center flex-col">
                              <input type="text" placeholder="Type location" className="input w-full sm:w-64 md:w-80 lg:w-96 text-lg" onChange={event => setLocation(event.target.value)} value={location} />
                              <button class="btn text-[#fff] gap-2 bg-primary border-primary hover:bg-[#222] disabled:bg-[#f3f3f3] mt-[30px]" disabled={!location}>
                                   Read More
                              </button>
                         </form>
                    </div>
               </div>p
               <div className="h-20"></div>
          </div>
     );
};

export default BloodSearch;
