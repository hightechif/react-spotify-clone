import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListMusic, User, Music } from 'lucide-react';
import { mockPlaylists, mockArtists, mockAlbums } from '../mockData';

const Library = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('playlists');

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#2a2a2a] to-[#121212] pb-24">
      <div className="px-8 pt-6">
        <h1 className="text-white text-4xl font-bold mb-6">Your Library</h1>

        {/* Tabs */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveTab('playlists')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeTab === 'playlists'
                ? 'bg-white text-black'
                : 'bg-[#232323] text-white hover:bg-[#2a2a2a]'
            }`}
          >
            Playlists
          </button>
          <button
            onClick={() => setActiveTab('artists')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeTab === 'artists'
                ? 'bg-white text-black'
                : 'bg-[#232323] text-white hover:bg-[#2a2a2a]'
            }`}
          >
            Artists
          </button>
          <button
            onClick={() => setActiveTab('albums')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeTab === 'albums'
                ? 'bg-white text-black'
                : 'bg-[#232323] text-white hover:bg-[#2a2a2a]'
            }`}
          >
            Albums
          </button>
        </div>

        {/* Content */}
        {activeTab === 'playlists' && (
          <div className="space-y-2">
            {mockPlaylists.map((playlist) => (
              <div
                key={playlist.id}
                onClick={() => navigate(`/playlist/${playlist.id}`)}
                className="flex items-center p-2 rounded hover:bg-[#282828] cursor-pointer group"
              >
                <img
                  src={playlist.image}
                  alt={playlist.name}
                  className="w-16 h-16 rounded mr-4"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium">{playlist.name}</div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Playlist</span>
                    <span>•</span>
                    <span>{playlist.creator}</span>
                  </div>
                </div>
                <ListMusic className="w-5 h-5 text-gray-400 mr-4" />
              </div>
            ))}
          </div>
        )}

        {activeTab === 'artists' && (
          <div className="space-y-2">
            {mockArtists.map((artist) => (
              <div
                key={artist.id}
                onClick={() => navigate(`/artist/${artist.id}`)}
                className="flex items-center p-2 rounded hover:bg-[#282828] cursor-pointer group"
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium">{artist.name}</div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Artist</span>
                  </div>
                </div>
                <User className="w-5 h-5 text-gray-400 mr-4" />
              </div>
            ))}
          </div>
        )}

        {activeTab === 'albums' && (
          <div className="space-y-2">
            {mockAlbums.map((album) => (
              <div
                key={album.id}
                onClick={() => navigate(`/album/${album.id}`)}
                className="flex items-center p-2 rounded hover:bg-[#282828] cursor-pointer group"
              >
                <img
                  src={album.image}
                  alt={album.name}
                  className="w-16 h-16 rounded mr-4"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium">{album.name}</div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Album</span>
                    <span>•</span>
                    <span>{album.artist}</span>
                  </div>
                </div>
                <Music className="w-5 h-5 text-gray-400 mr-4" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;
