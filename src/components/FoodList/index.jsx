import { Link } from 'react-router-dom'
import './style.css'

const FoodList = ({  imageFile, food }) => {
  return (
    <section className="food-list">
        <div className='foodlist-title'>
            <h5>{food.title}</h5>
        </div>
        <img src={imageFile + food.poster} className='foodlist-poster' alt="poster" />
        <Link to={`/${food._id}`} >
          <button className='food-list-btn'>INFORMATION</button>
        </Link>
    </section>
  )
}

export default FoodList