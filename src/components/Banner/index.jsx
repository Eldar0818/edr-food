import './style.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="bannerBg">

            <article className='banner-content'>
                <h2>unforgetable test</h2>
                <p>Welcome to our restaurant, With us, You will taste and experience delicious meals, snackes and amazing drinks</p>
                <Link to='/menu'>
                  <button>Show Menu</button>
                </Link>
            </article>

        </div>
    </div>
  )
}

export default Banner