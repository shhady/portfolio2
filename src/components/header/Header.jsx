import React, {useState}  from "react";
import "./header.css"
import { FaBars } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
function Header({ currentPage, handleSectionClick }) {
    const [showMenu, setShowMenu] = useState(false);
  
    const menuAnimation = useSpring({
      transform: showMenu ? 'translateX(0)' : 'translateX(100%)',
    });
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  
    return (
      <div className="header">
        <div className="header-content">
          <h3>Shhady  Serhan</h3>
         {!showMenu ? (<FaBars className="menu-icon" onClick={toggleMenu} />):(<div onClick={toggleMenu}>X</div>)} 
        {showMenu &&   <div className="menu" style={menuAnimation}>
            <div onClick={() => {handleSectionClick(0); setShowMenu(false)}}>Home</div>
            <div onClick={() => {handleSectionClick(1); setShowMenu(false)}}>Services</div>
            <div onClick={() =>{ handleSectionClick(2); setShowMenu(false)}}>Work Experience</div>
            <div onClick={() => {handleSectionClick(3); setShowMenu(false)}}>Full Stack Expertise</div>
          </div>}
        </div>
      </div>
    );
  }

  export default Header;