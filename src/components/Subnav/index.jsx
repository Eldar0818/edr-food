import './style.css'
import { Link } from 'react-router-dom'
import { GiMeal } from 'react-icons/gi'

const Subnav = () => {
  return (
    <nav className="little-nav">
    <Link to='/'>
      <div className="menulist-logo">
        <GiMeal className='menulist-logo-icon'/>
        <h1>EDR-TEST.</h1>
      </div>
    </Link>
  </nav>
  )
}

export default Subnav