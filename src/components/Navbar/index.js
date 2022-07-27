import React, {useEffect, useState} from 'react'
import { animateScroll as scroll } from 'react-scroll/modules'
import {Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks, 
  Img 
} from './navbarElements'
import {FaBars} from 'react-icons/fa'
import svg from "../../Visuals/Home/Images/Logo.svg"

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);
  
  const changeNav = () => {
    if(window.scrollY > 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
          <NavLogo to="/" onClick={toggleHome}>
            <Img src={require("../../Visuals/Home/Images/logo.png")}/>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" 
                smooth={true} 
                duration={500}
                spy={true}
                exact
                offset={-100}
              >ABOUT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="portfolio"
              smooth={true} 
              duration={500}
              spy={true}
              exact='true'
              offset={-80}>PORTFOLIO</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="gallery"
              smooth={true} 
              duration={500}
              spy={true}
              exact='true'
              offset={-80}>GALLERY</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact"
              smooth={true} 
              duration={500}
              spy={true}
              exact='true'
              offset={-80}>CONTACT</NavLinks>
            </NavItem>
          </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar
