import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
