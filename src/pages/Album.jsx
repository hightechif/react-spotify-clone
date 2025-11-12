import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, Heart, MoreHorizontal, Clock } from 'lucide-react';
import { mockAlbums, mockSongs } from '../mockData';

const Album = ({ onPlaySong }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const album = mockAlbums.find((a) => a.id === id);

  if (!album) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#121212]">
        <p className="text-white text-xl">Album not found</p>
      </div>
    );
  }

  const albumSongs = mockSongs.filter((song) => song.albumId === album.id);

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#7f5f3b] to-[#121212] pb-24">
      {/* Header */}
      <div className="px-8 pt-20 pb-6 flex items-end gap-6">
        <img
          src={album.image}
          alt={album.name}
          className="w-56 h-56 rounded shadow-2xl"
        />
        <div className="flex-1">
          <p className="text-sm font-semibold text-white mb-2">ALBUM</p>
          <h1 className="text-white text-7xl font-bold mb-6">{album.name}</h1>
          <div className="flex items-center gap-2 text-sm">
            <span
              className="text-white font-semibold cursor-pointer hover:underline"
              onClick={() => navigate(`/artist/${album.artistId}`)}
            >
              {album.artist}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-300">{album.year}</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-300">{albumSongs.length} songs</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="px-8 py-6 flex items-center gap-8">
        <button className="bg-[#1DB954] rounded-full p-4 hover:scale-105 hover:bg-[#1ed760] transition-all shadow-lg">
          <Play className="w-7 h-7 text-black" fill="black" />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Heart className="w-8 h-8" />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <MoreHorizontal className="w-8 h-8" />
        </button>
      </div>

      {/* Song List */}
      <div className="px-8 pb-6">
        <div className="grid grid-cols-[16px_1fr_80px] gap-4 px-4 py-2 border-b border-gray-800 text-gray-400 text-sm mb-2">
          <div>#</div>
          <div>TITLE</div>
          <div className="flex items-center justify-end">
            <Clock className="w-4 h-4" />
          </div>
        </div>

        <div className="space-y-1">
          {albumSongs.map((song, index) => (
            <div
              key={song.id}
              onClick={() => onPlaySong(song)}
              className="grid grid-cols-[16px_1fr_80px] gap-4 px-4 py-3 rounded hover:bg-[#ffffff14] cursor-pointer group"
            >
              <div className="text-gray-400 text-sm flex items-center">
                {index + 1}
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-white font-medium">{song.title}</div>
                  <div className="text-gray-400 text-sm">{song.artist}</div>
                </div>
              </div>
              <div className="text-gray-400 text-sm flex items-center justify-end">
                {song.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Album;
