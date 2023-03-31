import {React,useState,useEffect} from 'react';
import Header from "./components/Header";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Works from "./components/Works"
import Contact from "./components/Contact"
import { HashLoader } from 'react-spinners';

// import './App.css'
function App() {
  const [loader,setloader]=useState(false)
  useEffect(()=>{
    setloader(true)
    setTimeout(() => {
      setloader(false)  
    }, 3000);
  },[])
  return (
    <div className="App">
    {
      loader?
        <HashLoader
            color={"#AA367C"}
            loading={loader}
            size={120}
          />
      :
      <div id='box'>
        <BrowserRouter>
          <Header/>
          <Landing/>
          <Skills/>
          <Projects/>
          <Routes>
              <Route path="/" element={<Works/>}/>
              <Route path="/react-portfolio/contact" element={<Contact/>}/>
              <Route path="/react-portfolio/desc" element={<><p className='desc'>Contact With Me</p> <Contact/></>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    }
    </div>
  );
}

export default App;
