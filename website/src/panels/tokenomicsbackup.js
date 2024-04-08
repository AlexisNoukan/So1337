import React, { useEffect } from 'react';
import decode from '../components/decode';

const Tokenomics = () => {
    useEffect(() => {
        decode(); // Call the decode function when the component mounts
    }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

    const handleHover = () => {
        decode(); // Call the decode function when hovering over the element
    };
    return (
        <div className='flex flex-col w-full justify-center items-center bg-opacity-0  relative mb-5 '>
            <div className='flex flex-col  items-center pt-3 justify-evenly  xl:w-2/5 md:w-4/5   bg-white h-screen min-h-fit relative mb-9 px-5'>
		<div className="py-6 px-3 bg-black ">
		    <div class="decode-text" onMouseEnter={handleHover}>
  			<div class="text-animation">G</div>
  			<div class="text-animation">R</div>
   			<div class="text-animation">3</div>
			<div class="text-animation">3</div>
			<div class="text-animation">T</div>
			<div class="text-animation">!</div>
   			<div class="text-animation">N</div>
			<div class="text-animation">G</div>
			<div class="text-animation">S</div>
			<div class="space"></div>
  			<div class="text-animation">F</div>
  			<div class="text-animation">R</div>
   			<div class="text-animation">!</div>
			<div class="text-animation">3</div>
			<div class="text-animation">N</div>
			<div class="text-animation">D</div>
			<div class="space"></div>
		    </div>
		    <h1 className="uppercase text-center font-bold text-white text-4xl">SO1337N0M1C5</h1>
		</div>
		<div className="flex flex-wrap w-96 h-96 ">
		    <div className="flex flex-col w-1/2 h-1/2 pb-6 pr-9">
			<div className="bg-token bg-contain bg-center bg-no-repeat w-full h-full "></div>
			<p className="uppercase text-xl text-center font-medium pt-6">1,337,000,000 supply</p>
		    </div>
		    <div className="flex flex-col w-1/2 h-1/2 pb-6 pl-9">
			<div className="bg-lp bg-contain bg-center bg-no-repeat w-full h-full "></div>
			<p className="uppercase text-xl text-center font-medium pt-6">100% LP</p>
		    </div>
		    <div className="flex flex-col w-1/2 h-1/2 pt-6 pr-9">
			<div className="bg-burn bg-contain bg-center bg-no-repeat w-full h-full "></div>
			<p className="uppercase text-xl text-center font-medium pt-6">lp burned at launch</p>
		    </div>
		    <div className="flex flex-col w-1/2 h-1/2 pt-6 pl-9">
			<div className="bg-ownership bg-contain bg-center bg-no-repeat w-full h-full "></div>
			<p className="uppercase text-xl text-center font-medium pt-6">dev allocation zero</p>
		    </div>
		</div>
            </div>
            <div className='flex flex-col w-full justify-center items-center bg-opacity-0  relative mb-5 '>
		<div className="bg-head animate-pulse bg-contain bg-center bg-no-repeat w-40 h-40 "></div>
            </div>
        </div>
    );
};

export default Tokenomics;
