import React, {useState} from 'react'
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/AboutSection/data';
import PortfolioSection from '../components/PortfolioSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <AboutSection {...homeObjOne}/>
      <PortfolioSection/>
    </>
  )
}

export default Home
