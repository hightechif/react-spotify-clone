import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, Library, Plus } from 'lucide-react';
import { mockPlaylists } from '../mockData';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-black h-full flex flex-col text-gray-300">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold">Spotify</h1>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-2">
        <button
          onClick={() => navigate('/')}
          className={`flex items-center w-full px-4 py-3 mb-2 rounded-md transition-colors ${
            isActive('/') ? 'bg-gray-800 text-white' : 'hover:text-white'
          }`}
        >
          <Home className="w-6 h-6 mr-4" />
          <span className="font-semibold">Home</span>
        </button>

        <button
          onClick={() => navigate('/search')}
          className={`flex items-center w-full px-4 py-3 mb-2 rounded-md transition-colors ${
            isActive('/search') ? 'bg-gray-800 text-white' : 'hover:text-white'
          }`}
        >
          <Search className="w-6 h-6 mr-4" />
          <span className="font-semibold">Search</span>
        </button>

        <button
          onClick={() => navigate('/library')}
          className={`flex items-center w-full px-4 py-3 mb-6 rounded-md transition-colors ${
            isActive('/library') ? 'bg-gray-800 text-white' : 'hover:text-white'
          }`}
        >
          <Library className="w-6 h-6 mr-4" />
          <span className="font-semibold">Your Library</span>
        </button>

        {/* Create Playlist */}
        <button className="flex items-center w-full px-4 py-3 mb-2 rounded-md hover:text-white transition-colors">
          <div className="w-6 h-6 mr-4 bg-gray-600 flex items-center justify-center rounded-sm">
            <Plus className="w-4 h-4" />
          </div>
          <span className="font-semibold">Create Playlist</span>
        </button>

        {/* Playlists */}
        <div className="mt-4 border-t border-gray-800 pt-4">
          {mockPlaylists.slice(0, 6).map((playlist) => (
            <button
              key={playlist.id}
              onClick={() => navigate(`/playlist/${playlist.id}`)}
              className="block w-full text-left px-4 py-2 text-sm hover:text-white transition-colors truncate"
            >
              {playlist.name}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
