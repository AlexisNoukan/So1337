import React from "react";
import Layout from "./components/Layouts";
import Main from "./panels/Main";
import Leet from "./panels/Leet";
import Contact from "./panels/Contact";

function App() {
  return (
    <div className="App">
          <Layout>
            <Main/>
            <Leet/>
            <Contact/>
        </Layout>
    </div>
  );
}

export default App;
