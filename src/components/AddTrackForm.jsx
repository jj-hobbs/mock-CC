import React, { useState } from 'react'

function AddTrackForm({ onAddTrack }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [artist, setArtist] = useState("");
  const [bpm, setBpm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8001/tracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "image": image,
        "title": title,
        "artist": artist,
        "BPM": bpm,
      })
    })
    .then(resp => resp.json())
    .then(newTrack => onAddTrack(newTrack));
  }
  
  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            value="" 
            type="text" 
            name="image" 
            placeholder="Image URL" 
            // eslint-disable-next-line
            value={image} 
            onChange={(e) => setImage(e.target.value)}
          />
          <input 
            value="" 
            type="text" 
            name="title" 
            placeholder="title" 
            // eslint-disable-next-line
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
          />
          <input 
            value="" 
            type="text" 
            name="artist" 
            placeholder="Artist" 
            // eslint-disable-next-line
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <input 
            value="" 
            type="number" 
            name="bpm" 
            placeholder="BPM" 
            step="1.00" 
            // eslint-disable-next-line
            value={bpm}
            onChange={(e) => setBpm(e.target.value)}
          />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm