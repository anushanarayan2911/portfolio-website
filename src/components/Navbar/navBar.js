import React, {useState} from 'react'
import ReorderIcon from '@material-ui/icons/Reorder'
import '../../App.css'

function Navbar() {

  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className='Navbar'>
      <div className='links' id={showLinks ? "hidden" : ""}>
        <a href="/home">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/portfolio">PORTFOLIO</a>
        <a href="/gallery">GALLERY</a>
        <a href="/contact">CONTACT</a>
      </div>
      <button onClick={() => setShowLinks(!showLinks)}><ReorderIcon/></button>
    </div>
  )
}

export default Navbar
