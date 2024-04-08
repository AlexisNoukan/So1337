import React from 'react';

const Roadmap = () => {
    return (
        <div className='flex flex-col w-full justify-center items-center bg-opacity-0  relative mb-5 '>
            <div className='flex flex-col  items-center pt-3 justify-evenly bg-white h-screen min-h-fit relative mb-9 px-5 overflow-scroll  xl:w-4/5 md:w-5/6 sm:w-5/6  '>
		<div className="py-6 px-3 bg-black ">
		    <h1 className="uppercase text-center font-bold text-white text-4xl ">Roadmap</h1>
		</div>
		<div className="flex justify-center flex-wrap">
		    <ul className="flex items-center flex-col text-2xl font-light w-full ">
			<h2 className="Uppercase font-bold text-2xl">Q1</h2>
			<li className="pl-2 done">Launch with live streaming </li>
			<li className="pl-2 done">Create TG, Twitter and a fancy Website </li>
			<li className="pl-2 done">DexScreener Socials </li>
			<li className="pl-2 done">DexTools Socials </li>
			<li className="pl-2 done">Leet & Unleet Bot in Tg </li>
			<li className="pl-2 done">Hub for sharing SO1337 ressources </li>
			<li className="pl-2 done">Extended communities</li>
			<li className="pl-2 done">1600 followers on X </li>
			<li className="pl-2 done"><a className="underline" href="https://zealy.io/cw/so1337">Zealy Airdrop campaign (still active)</a></li>
		    </ul>
		    <ul className="flex flex-col items-center text-2xl font-light w-full">
			<h2 className="Uppercase font-bold text-2xl">Q2</h2>
			<li className="pl-2 done">New team in charge</li>
			<li className="pl-2 done">New website</li>
			<li className="pl-2 done">New objective brainstorming</li>
			<li className="pl-2 ip">31337-bot (website)</li>
			<li className="pl-2 ip">1337 translated website</li>
			<li className="pl-2 invader">Weekly AMA</li>
			<li className="pl-2 invader">Daily updates</li>
			<li className="pl-2 invader">Regular VC with the devs </li>
		    </ul>
		    <ul className="flex flex-col items-center text-2xl font-light w-full ">
			<h2 className="Uppercase font-bold text-2xl">Q3</h2>
			<li className="pl-2 ip">Public unveiling of the new project</li>
			<li className="pl-2 ip">New project Beta release for SO1337 holders on TG</li>
			<li className="pl-2 ip">New project Final release for SO1337 holders (wordwide)</li>
			<li className="pl-2 ip">Continuous improvement, based on community feedback</li>
		    </ul>
		</div>
	    </div>
        </div>
    );
};

export default Roadmap;
