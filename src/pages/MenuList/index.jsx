import './style.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import FoodList from '../../components/FoodList'
import Subsscribe from '../../components/Subscribe'
import Footer from '../../components/Footer'
import Searchbar from '../../components/Searchbar'
import Subnav from '../../components/Subnav'

const MenuList = ({ baseUrl }) => {

const [foods, setFoods] = useState([])
useEffect(()=> {
  const fetchAllFoods = async()=> {
    try {
      const response = await axios.get(`${baseUrl}/api/foods`)
      setFoods(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  fetchAllFoods()

}, [baseUrl])

console.log(foods);
let imageFile = `${baseUrl}/uploads/`

const [searchValue, setSearchValue] = useState("")

  return (
    <>
    <main className='menulist-page'>

        <Subnav/>

        <Searchbar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <div className="foods-wrapper">
          {
            foods.filter(item=> searchValue ? item.title.toLowerCase().includes(searchValue.toLowerCase()) : item).map(food=> {
              return <FoodList 
                        key={food._id}
                        imageFile={imageFile}
                        food={food}
                      />
            })
          }
        </div>


    </main>
    <Subsscribe/>
    <Footer/>
    </>
  )
}

export default MenuList