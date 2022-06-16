import React, { useEffect, useState } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
  const [tracks, setTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    fetch("http://localhost:8001/tracks")
    .then((resp) => resp.json())
    .then((tracksArray) => {
        setTracks(tracksArray);
    })
}, []);  

function handleAddTrack(newTrack) {
  const updatedTracksArray = [...tracks, newTrack]
  setTracks(updatedTracksArray)
}

const displayedTracks = tracks.filter((track) => {
  return track.title.toLowerCase().includes(searchTerm.toLowerCase());
});

  return (
    <div>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <AddTrackForm onAddTrack={handleAddTrack}/>
      <TracksList tracks={displayedTracks}/>
    </div>
  )
}

export default TracksPage