import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import apiClient from '../../spotify';
import Songcard from '../../components/SongCard/Songcard';
import Queuee from '../../components/Queue/Queuee';
import "./PlayerCss.css"
import AudioPlayerr from '../../components/audioPlayer/AudioPlayerr';

const Player = () => {

  const location=useLocation();

  const [tracks,setTracks]=useState([])
  const [currentTrakes,setCurrentTrakes]=useState({})
  const [currentIndex,setCurrentIndex]=useState(0)


  useEffect(()=>{

    // console.log(location.state.id)  gives current playlist id

    if(location.state)
    {
      apiClient.get(`https://api.spotify.com/v1/playlists/${location.state?.id}/tracks`)
      .then((response)=>{
          // console.log(response.data)
          setTracks(response.data.items)
          setCurrentTrakes(response.data.items[0].track)
          
          
      })
    }
  },[location.state]);

  useEffect(()=>{
    // setCurrentTrakes(tracks[currentIndex].track);
    console.log(currentIndex);
    console.log(tracks[currentIndex]?.track)
    setCurrentTrakes(tracks[currentIndex]?.track);
  },[tracks,currentIndex]);
  
  return (
    <div className='screen-container flex'>
      <div className='left-player-body'>
        <AudioPlayerr currentTrakes={currentTrakes}
         currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}
          total={tracks} />
      </div>
      <div className='right-player-body'>
        <Songcard album={currentTrakes?.album}/>   
        {/* ^^^ inside conmponet  */}
        <Queuee tracks={tracks} setCurrentIndex={setCurrentIndex}/>
      </div>
    </div>
  )



}

export default Player
