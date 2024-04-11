import React, { useEffect, useState } from 'react'
import APIKit from '../../spotify';
import './LibraryCss.css';
import { IconContext } from 'react-icons';
import { FaRegCirclePlay } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Library = () => {

  const [playLists,setPlaylists]=useState(null);

  useEffect(()=>{
      APIKit.get("me/playlists").then((response)=>{
          // console.log(response.data);
          setPlaylists(response.data.items)
          console.log(response.data.items);
      });
  },[]);

    const navigate=useNavigate();
    const playPlayList=(id)=>{
        navigate("/player",{state:{id:id}});
    }

  return (
    <div className='screen-container'>
    <div className='library-body'>
      {playLists?.map((pl)=>(
        <div className='playlist-card' key={pl.id} onClick={()=>playPlayList(pl.id)}>
        <img 
          src={pl.images[0].url}
          className='playlist-image'
          alt='playlist-Art'
          />
        

        <p className='playlist-title'>{pl.name}</p>
        <p className='playlist-subtitle'>{pl.tracks.total} Songs</p>

        <div className='playlist-fade'>
          <IconContext.Provider value={{size:"50px",color:"#E99D72"}}>
            <FaRegCirclePlay/>
          </IconContext.Provider>
        </div>
        </div>
      ))};
      </div>
    </div>
  )
}

export default Library
