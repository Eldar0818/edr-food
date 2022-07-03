import './style.css'
import { BiFoodMenu } from 'react-icons/bi'
import { GiMeal } from 'react-icons/gi'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false)

  const handleScroll = ()=> {
    let valueScroll = window.scrollY
    if(valueScroll < 100){
      setScrolled(false)
    }else{
      setScrolled(true)
    }
  }

  window.onscroll = () => {
    handleScroll()
  }

  return (
    <nav className={ scrolled ? 'navbar active' : 'navbar'}>
      <Link to='/' >
        <div className="logo">
            <GiMeal className='logo-icon'/>
            EDR-TEST.
        </div>
      </Link>
      <Link to='/menu'>
        <div className="menu-btn">
            <BiFoodMenu
             className='menu-icon'
             />
        </div>
      </Link>
    </nav>
  )
}

export default Navbar