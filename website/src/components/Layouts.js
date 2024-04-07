// Layout.js
import { MatrixRainingLetters } from 'react-mdr';
import React from 'react';

const Layout = ({ children }) => {
    return (

	<div className="overflow-scroll h-screen z-0 ">
            <MatrixRainingLetters custom_class="absolute" />
	    <main className='flex flex-col items-center '>
		{/* Main content */}
		{children}
	    </main>
	    <footer>
		{/* Footer content */}
		<p>Copyright © 2024 My App</p>
	    </footer>
	</div>
    );
};

export default Layout;
