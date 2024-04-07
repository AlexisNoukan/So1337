import React from 'react';

const Header = () => {
    return (
	<header className="flex justify-center my-6 ">
            {/* Header content */}
            <div className="flex flex-col py-6  w-full bg-black relative z-10 items-center justify-center">
		<h1 className="text-7xl text-white">Welcome to</h1>
		<div class="hero-container">
		    <div class="environment"></div>
		    <h1 class="hero glitch layers" data-text="SO1337"><span className="px-7">SO1337</span></h1>
		    <br/>
		</div>
		<button className="text-white" onClick={() =>  navigator.clipboard.writeText('D6y6PmrH47d2vTgXZjzADbp1bgQQF9Przk9UDRBJuM7R')}
		>CA: D6y6PmrH47d2vTgXZjzADbp1bgQQF9Przk9UDRBJuM7R
		</button>
            </div>
	</header>
    );
};

export default Header;