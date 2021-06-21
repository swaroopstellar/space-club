import React,{useState,useEffect} from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/pages.js/index"
import About from "./components/pages.js/about"
import Items from "./components/pages.js/items"
import Footer from "./components/Footer"
import {Switch, Route} from "react-router-dom"
import Dropdown from "./components/Dropdown";

function App() {
  const [isSmall,setIsSmall]=useState(false);

  const toggle=()=>{
    setIsSmall(!isSmall);
  };

  useEffect(()=>{
    const hiddenMenu = ()=>{
      if(window.innerWidth>768 && isSmall)
      {
        setIsSmall(false)
      }
    };
    window.addEventListener('resize',hiddenMenu);

    return ()=>{
      window.removeEventListener('resize',hiddenMenu);
    }
  })
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isSmall={isSmall} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/items" component={Items} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
