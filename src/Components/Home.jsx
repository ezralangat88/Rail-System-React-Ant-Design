import React from "react";
import About from "./About";
import AppFeatures from "./Features";
import AppDescription from "./Description";
import Features from "./Features";
import AppContact from "./Contact";
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
