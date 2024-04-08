import React from "react";
import Layout from "./components/Layouts";
import Header from "./panels/Header";
import Main from "./panels/Main";
import Tokenomics from "./panels/Tokenomics";
import Roadmap from "./panels/Roadmap";
import Contact from "./panels/Contact";

function App() {
    return (
	<div className="App">
	    <div>
		<Layout>
		    <Header/>
		    <Main/>
		    <Tokenomics/>
		    <Roadmap/>
		    <Contact/>
		</Layout>
	    </div>
	</div>
    );
}

export default App;

