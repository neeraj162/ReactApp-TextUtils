/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Utils"/>
      <div className="container my-5">
        <TextForm heading="Enter the text to analyze"/>
        {/* <About/> */}
      </div>
      
      
    </>
  );
}

export default App;
