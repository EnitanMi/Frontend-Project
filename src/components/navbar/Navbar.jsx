
import './Navbar.css'
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-bar">
      <div className="logo">
      <Link to='/'>
        <h1 className="the">The</h1>
        <h1 className="next">Next Gen</h1>
        <h1 className="show">Show</h1>
        </Link>
      </div>
      
        
      <div className={`nav-links ${isOpen? "open" : "close"}`}>
        <Link to='/'></Link>
        <Link to='/about'>About Us</Link>
        <Link to='/talents'>Talents</Link>
        <Link to='/events'>Events</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      
      <div>
        <button ><Link to='/join us'>Join Us</Link></button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
    </div>
  );
}
