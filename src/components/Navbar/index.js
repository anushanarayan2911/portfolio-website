import React, {useEffect, useState} from 'react'
import { animateScroll as scroll } from 'react-scroll/modules'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './navbarElements'
import {FaBars} from 'react-icons/fa'

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
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            dolla
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
                offset={-80}
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
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
