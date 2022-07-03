import './style.css'
import Subnav from '../../components/Subnav'
import Subscribe from '../../components/Subscribe'
import Footer from '../../components/Footer'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const SingleItem = ({ baseUrl }) => {

    const [singleData, setSingleData] = useState({})
    let pathId = useLocation().pathname.split("/")[1]

    useEffect(()=> {
        const fetchSingleData = async ()=> {
            const response = await axios.get(`${baseUrl}/api/food/${pathId}`)
            setSingleData(response.data)
        }

        fetchSingleData()

    }, [pathId, baseUrl])

    let imageFile = `${baseUrl}/uploads/`

  return (
    <>
        <section className="single-item">
            <Subnav />
            <div className="return">
                <Link to='/menu'>
                    <button className='return-btn' >Return to list</button>
                </Link>
            </div>
            <div className="single-wrapper">
                <div className="poster-box">
                    <img src={imageFile + singleData.poster} alt="poster" className='single-poster' />
                </div>
                <div className="food-info">
                    <h2>{singleData.title}</h2>
                    <p>{singleData.desc}</p>
                    <p>{singleData.guide}</p>
                </div>
            </div>
        </section>
        <Subscribe/>
        <Footer/>
    </>
  )
}

export default SingleItem