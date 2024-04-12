import React, { useEffect, useState } from 'react';
import APIKit from '../../spotify';
// import './LikedMusic.css';
import { IconContext } from 'react-icons';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import './TrendingCss.css'

const Trending = () => {
  const [likedTracks, setLikedTracks] = useState(null);

  useEffect(() => {
    APIKit.get('me/tracks').then((response) => {
      setLikedTracks(response.data.items);
      console.log(response.data.items);

    });
  }, []);

  const navigate = useNavigate();

  const playTrack = (trackId) => {
    console.log("track id =",trackId);

    navigate('/player', { state: { trackId: trackId } });
  };

  return (
    <div className="liked-music-container">
      <h2>Your Liked Music</h2>
      <div className="liked-music-list">
        {likedTracks?.map((track) => (
          <div className="track-card" key={track.track.id} onClick={() => alert("selected")}>
            <img src={track.track.album.images[0].url} className="track-image" alt="track-Art" />

            <p className="track-title">{track.track.name}</p>
            <p className="track-artist">{track.track.artists.map((artist) => artist.name).join(', ')}</p>

            <div className="play-button">
              <IconContext.Provider value={{ size: '50px', color: '#E99D72' }}>
                <FaRegCirclePlay />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
