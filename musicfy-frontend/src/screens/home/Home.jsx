import React, { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Library from '../library/Library'
import Favorites from '../favourite/Favorites'
import Feed from '../feed/Feed'
import Trending from '../trending/Trending'
import Player from '../player/Player'
import './home.css'
import Slidebar from '../../components/slidebar/Slidebar'
import Login from '../auth/Login'
import { setClientToken } from '../../spotify'
import Authenti from '../../Authentication/Authenti'
import Admin from '../../Admin'
const Home = () => {

  const [token,setToken]=useState("");

  useEffect(()=>{
    const token=window.localStorage.getItem("token")
      const hash=window.location.hash;        // # pachi nu badhu avase url ma hoy e....
     
      if(!token && hash)  // alredy local storej ma present nai hase to store karavase & pachhi hook ma store karavse. 
      {
        const _token=hash.split("&")[0].split("=")[1];
        window.localStorage.setItem("_token",_token);
        setToken(_token)
        setClientToken(_token);
      }
      else{
        setToken(token)
        setClientToken(token);
      }
      
      
  },[])
  return (!token?(<Login/>):
  
    (
        <BrowserRouter>
        <div className='main-body'>

          <Slidebar/>
            <Routes>
                 <Route path='/' element={<Library/>}/>
                 <Route path='/auth' element={<Authenti/>}/>
                <Route path='/player' element={<Player/>}/>
                <Route path='/trending' element={<Trending/>}/>
                <Route path='/song' element={<Feed/>}/>
                <Route path='/favorites' element={<Favorites/>} /> 

               <Route path='/admin' element={<Admin/>} /> 

               

            </Routes>

          
        </div>
        </BrowserRouter>
   
  )
  )
}

export default Home
