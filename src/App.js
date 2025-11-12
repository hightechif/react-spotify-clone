import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MusicPlayer from "./components/MusicPlayer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import Playlist from "./pages/Playlist";
import Artist from "./pages/Artist";
import Album from "./pages/Album";
import { mockSongs } from "./mockData";

function App() {
  const [currentSong, setCurrentSong] = useState(mockSongs[0]);

  const handlePlaySong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="h-screen flex flex-col bg-black">
      <BrowserRouter>
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home onPlaySong={handlePlaySong} />} />
            <Route path="/search" element={<Search onPlaySong={handlePlaySong} />} />
            <Route path="/library" element={<Library />} />
            <Route path="/playlist/:id" element={<Playlist onPlaySong={handlePlaySong} />} />
            <Route path="/artist/:id" element={<Artist onPlaySong={handlePlaySong} />} />
            <Route path="/album/:id" element={<Album onPlaySong={handlePlaySong} />} />
          </Routes>
        </div>
        <MusicPlayer currentSong={currentSong} />
      </BrowserRouter>
    </div>
  );
}

export default App;
