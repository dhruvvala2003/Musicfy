import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './FeedCss.css';

const Feed = () => {

  const [songList,setSongList]=useState([]);

  const [currentSong, setCurrentSong] = useState(null);
  const [audioPlayer, setAudioPlayer] = useState(null);


  useEffect(()=>{

    const fetchStringList = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getAllSongs'); // Change URL accordingly
        setSongList(response.data); // Set the list of strings in the state
        console.log(response);
        console.log("sucesfully fetch all songs...")
      } catch (error) {
        console.error('Error fetching string list:', error);
      }
    };

    fetchStringList();

  }, [])

  
  const playSong = (url) => {
    if (audioPlayer && currentSong === url) {
      // If the same song is already playing, pause it
      if (!audioPlayer.paused) {
        audioPlayer.pause();
      } else {
        audioPlayer.play();
      }
    } else {
      // If a different song is playing, pause it first
      if (audioPlayer) {
        audioPlayer.pause();
      }
      // Create a new audio player and play the selected song
      const newAudioPlayer = new Audio(url);
      newAudioPlayer.play();
      setCurrentSong(url);
      setAudioPlayer(newAudioPlayer);
    }
  };

  return (
    <div className='screen-container'>
    
      {/* {songList.map((str, index) => (

        <audio controls>
        <source src={str} type="audio/mpeg" />
        Your browser does not support the audio element.
        </audio>

          
        ))} */}

        <div className="song-list-container">
      <h2 className="song-list-title">Song List</h2>
      <ul className="song-list">
        {songList.map((song, index) => (
          <li key={index} className="song-item" onClick={() => playSong(song)}>
            <span className="song-name">{song.split("/").pop() }</span>
            <button className="play-button">&#9654;</button>
          </li>
        ))}
      </ul>
    </div>
     
    </div>
  )
}

export default Feed
