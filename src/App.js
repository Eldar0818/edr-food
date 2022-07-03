import './App.css';
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import MenuList from './pages/MenuList';
import SingleItem from './pages/SingleItem';
import { useState, useEffect } from 'react'

function App() {

  let baseUrl = 'https://restaurant-api-edr.herokuapp.com'

  const [loading, setLoading] = useState(false)
  useEffect(()=> {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 2500)
  }, [])

  return (
    <>
    { loading ?<div className='loading-screen'> <h1 className='loading-text'>Loading...</h1></div> : (
      <Routes>
        <Route path='/' element={<LandingPage baseUrl={baseUrl} />}/>
        <Route path='/menu' element={<MenuList baseUrl={baseUrl} />}/>
        <Route path='/:id' element={ <SingleItem baseUrl={baseUrl} /> }/>
      </Routes>
      )}
   </>
  );
}

export default App;
