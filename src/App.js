import React from 'react';
import Header from "./components/Header";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import './App.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
