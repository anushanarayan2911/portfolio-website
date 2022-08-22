import React, {useState} from 'react'
import ContactSection from '../components/ContactSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const ContactPage = (id="contact") => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <ContactSection/>
    </>
    
  )
}

export default ContactPage