import './style.css'
import { BiSearchAlt2 } from 'react-icons/bi'

const Searchbar = ({ searchValue, setSearchValue }) => {

    console.log(searchValue);

  return (
    <div className='searcbar'>
        <BiSearchAlt2 className='searchbar-icon' />
        <input 
            type="search"
            placeholder='Search...' 
            onChange={(e)=> setSearchValue(e.target.value)}
        />
    </div>
  )
}

export default Searchbar