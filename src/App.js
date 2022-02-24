import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
    </>
  );
}

export default App;
