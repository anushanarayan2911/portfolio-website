import React, {useState} from 'react'
import ReorderIcon from '@material-ui/icons/Reorder'
import '../../App.css'

function Navbar() {

  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className='Navbar'>
      <div className='leftSide'>
        <div className='links' id={showLinks ? "hidden" : ""}>
          <a href="/home">Home</a>
          <a href="/about">Feedback</a>
          <a>About Us</a>
          <a>Contact</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}><ReorderIcon/></button>
      </div>
      <div className='rightSide'></div>
    </div>
  )
}

export default Navbar
