import './style.css'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Featured = ({ foods, baseUrl }) => {

    let imageFile = `${baseUrl}/uploads/`

  return (
    <section className="featured">
        <div className="featured-title">
            <h1>TOP FEATURED</h1>
            <div className="underline"></div>
        </div>
        <div className="featured-wrapper">
            {
                foods.map(food=> {
                    return <article key={food._id} className="featured-card" >
                                <img src={imageFile+food.poster} alt="featured-poster" />
                                <div className="featured-card-info">
                                    <h2>{food.title}</h2>
                                    <Link to={`/${food._id}`}>
                                        <BsSearch className='featured-icon'/>
                                    </Link>
                                </div>
                           </article>
                })
            }
        </div>
    </section>
  )
}

export default Featured