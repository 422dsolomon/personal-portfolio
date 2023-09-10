import './App.css';
import React, { useEffect, useState } from "react";
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileNavBar } from './mobilecomponents/MobileNavBar';
import { MobileBanner} from './mobilecomponents/MobileBanner'
import { MobileSkills } from './mobilecomponents/MobileSkills';
import { MobileProjects } from './mobilecomponents/MobileProjects'
import { MobileContact } from './mobilecomponents/MobileContact';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 995;

  return (
    <div className="App">
      {isMobile? 
      (
        <MobileNavBar />
        ) : (
        <NavBar />
      )}
      {isMobile? 
      (
        <MobileBanner />
        ) : (
        <Banner />
      )}
      {isMobile? 
      (
        <MobileSkills />
        ) : (
        <Skills />
      )}
      {isMobile? 
      (
        <MobileProjects />
        ) : (
        <Projects />
      )}
       {/* {isMobile? 
      (
        <MobileContact />
        ) : (
        <Contact />
      )} */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
