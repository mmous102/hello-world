import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
  let content = {
    English: {
      home: "Home",
      evaluate: "Evaluate",
      activities: "Activities",
      register: "Register",
      
    },
    French: {
      home: "Acceuil",
      evaluate: "Évaluer",
      activities: "Activités",
      register: "S'inscrire",
      
    }
  };

  props.language === "French"
    ? (content = content.French)
    : (content = content.English);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i class='fa fa-campground' />
            Championes Camp
            
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <select
            className="custom-select"
            value={props.language}
            onChange={e => props.handleSetLanguage(e.target.value)}
          >
          <option value="language"> Language</option>
            <option value="English">En</option>
            <option value="French">Fr</option>
          </select>
          
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                {content.home}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Evaluate'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {content.evaluate}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Activities'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {content.activities}
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Register

              </Link>
            </li>
          
          </ul>
          {button && <Button class='bouton'>{content.register}</Button>}
          <li className='nav-item-help'>
              <Link
                to='/help'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class="fas fa-info-circle"></i>

              </Link>
            </li>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
