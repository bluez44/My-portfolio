import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Logo from '../assets/react.svg'
import '../styles/Header.css'
function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='position-fixed w-100 z-3 shadow'>
        <nav className='container text-white d-flex align-items-center justify-content-between py-3 py-md-0'>
            <div className='flex-grow-1 flex-shrink-1'>
                <img src={Logo} alt="logo" />
            </div>
            
            <div className='d-flex flex-column align-items-end d-md-block flex-grow-1 flex-shrink-1'>
              <FontAwesomeIcon icon={faBars} size={"xl"} className='d-md-none' onClick={handleMenu}/>
              <div className='position-absolute z-2 position-md-relative top-100 start-0 end-0 px-0 d-flex justify-content-end'>
                <ul 
                  className={`${isMenuOpen ? 'd-block' : 'd-none'} list-unstyled position-md-relative d-md-flex flex-md-row justify-content-md-between fs-6 p-0 text-center bg-mobile-menu bg-md-transparent w-100`}
                  style={{'--bs-bg-opacity': 0.8}}
                  onClick={handleMenu}
                >
                    <li className='w-100'><a className='group_link py-4 px-2 w-100 d-block' href="#">Home</a></li>
                    <li className='w-100'><a className='group_link py-4 px-2 w-100 d-block' href="#project">Project</a></li>
                    <li className='w-100'><a className='group_link py-4 px-2 w-100 d-block' href="#skills">Skills</a></li>
                    <li className='w-100'><a className='group_link py-4 px-2 w-100 d-block' href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
        </nav>
    </header>
  )
}

export default Header