import React from "react";
import About from "../Home/About";
import AppFeatures from "../Home/Features";
import AppDescription from "../Home/Description";
import Features from "../Home/Features";
import AppContact from "../Home/Contact";
// Views
const AppHome = () => {
  return (
    <div>
        <AppDescription/>
        <About/>
        <Features/>
        <AppContact/>
        
    </div>
  )
}

export default AppHome
