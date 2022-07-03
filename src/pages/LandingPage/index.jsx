import Navbar from '../../components/Navbar'
import About from '../../components/About'
import Banner from '../../components/Banner'
import Featured from '../../components/Featured'
import Feedback from '../../components/Feedback'
import './style.css'
import data from '../../da.json'
import Subscribe from '../../components/Subscribe'
import Footer from '../../components/Footer'
import axios from 'axios'
import { useState, useEffect } from 'react'

const LandingPage = ({ baseUrl }) => {

  const [getData, setGetData] = useState([])

  useEffect(()=> {
    const fetchFaturedDate = async ()=> {
     try {
      const response = await axios.get(`${baseUrl}/api/foods`)
      setGetData(response.data)
     } catch (error) {
      console.log(error);
     }
  }

  fetchFaturedDate()

  }, [baseUrl])

  return (
    <main className="landing-page">
        <Navbar/>
        <Banner/>
        <About/>
        <Featured foods={getData.filter(data=> data.isFeatured === true)} baseUrl={baseUrl} />
        <Feedback feeds={data.feedbacks} />
        <Subscribe/>
        <Footer/>
    </main>
  )
}

export default LandingPage