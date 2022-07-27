import React, {useState} from 'react'
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import { homeObjOne } from '../components/AboutSection/data';
import PortfolioSection from '../components/PortfolioSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Navbar toggle={toggle}/>
    </>
  )
}

export default Home
