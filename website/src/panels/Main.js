import React from 'react';


const Main = () => {
    return (
        <div className='flex flex-col w-full justify-center items-center bg-opacity-0  h-screen  relative mb-5 '>
            <div className='flex flex-col  items-center pt-3 justify-evenly    xl:w-3/5 md:w-4/5  bg-white h-screen min-h-fit relative pb-5 px-5 '>
		<div className="py-6 px-3 bg-black ">
		    <h1 className="uppercase typing-greetings text-center font-bold text-white text-4xl">GR33TINGS, FR13ND</h1>
		</div>
		<p className="uppercase font-normal text-2xl">
		    “If you don't believe me or don't get it, <br/> I don't have time to try to convince you, sorry.” <br/> -satoshi
		</p>
		<p className="uppercase font-light text-2xl">
		    we are not leet; we are so1337 <br/>
		    we don't try to escape the matrix; <br/>
		    we 4r3 7h3 m4tr1x!
		</p>
            </div>
	    <div className="flex flex-col bg-black bg-opacity-0 items-center w-full">
		<p className="flex bg-black  my-9 p-2">
		    <h2 className="uppercase font-light text-white text-1xl"> neo, andrew tate, vitalik <br/>
			they all try to be <span className="font-bold">SO1337</span></h2>
		</p>
		<div className="flex text-white mb-5 uppercase font-bold text-3xl">No j33ts 4ll0w3d</div>
	    </div>
        </div>
    );
};

export default Main;
