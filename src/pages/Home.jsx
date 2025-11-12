import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';
import { mockPlaylists, mockAlbums, mockArtists } from '../mockData';

const PlaylistCard = ({ playlist, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="bg-[#181818] p-4 rounded-lg cursor-pointer transition-all hover:bg-[#282828] relative group"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-4">
        <img
          src={playlist.image}
          alt={playlist.name}
          className="w-full aspect-square object-cover rounded-md shadow-lg"
        />
        {isHovered && (
          <button className="absolute bottom-2 right-2 bg-[#1DB954] rounded-full p-3 shadow-lg transition-all hover:scale-105 hover:bg-[#1ed760]">
            <Play className="w-6 h-6 text-black" fill="black" />
          </button>
        )}
      </div>
      <h3 className="text-white font-semibold mb-2 truncate">{playlist.name}</h3>
      <p className="text-gray-400 text-sm line-clamp-2">{playlist.description}</p>
    </div>
  );
};

const Home = ({ onPlaySong }) => {
  const navigate = useNavigate();
  const currentHour = new Date().getHours();
  let greeting = 'Good evening';
  if (currentHour < 12) greeting = 'Good morning';
  else if (currentHour < 18) greeting = 'Good afternoon';

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#1e3a5f] to-[#121212] pb-24">
      <div className="px-8 pt-6">
        {/* Greeting */}
        <h1 className="text-white text-4xl font-bold mb-6">{greeting}</h1>

        {/* Quick Access Playlists */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {mockPlaylists.slice(0, 6).map((playlist) => (
            <div
              key={playlist.id}
              onClick={() => navigate(`/playlist/${playlist.id}`)}
              className="bg-[#ffffff14] rounded-md flex items-center overflow-hidden cursor-pointer hover:bg-[#ffffff1f] transition-all group"
            >
              <img
                src={playlist.image}
                alt={playlist.name}
                className="w-20 h-20 object-cover"
              />
              <span className="text-white font-semibold px-4 flex-1 truncate">
                {playlist.name}
              </span>
              <button className="mr-4 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1DB954] rounded-full p-2">
                <Play className="w-5 h-5 text-black" fill="black" />
              </button>
            </div>
          ))}
        </div>

        {/* Spotify Playlists */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-2xl font-bold">Spotify Playlists</h2>
            <button className="text-gray-300 text-sm font-semibold hover:underline">
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {mockPlaylists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                playlist={playlist}
                onClick={() => navigate(`/playlist/${playlist.id}`)}
              />
            ))}
          </div>
        </div>

        {/* Popular Artists */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-2xl font-bold">Popular Artists</h2>
            <button className="text-gray-300 text-sm font-semibold hover:underline">
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {mockArtists.map((artist) => (
              <div
                key={artist.id}
                onClick={() => navigate(`/artist/${artist.id}`)}
                className="bg-[#181818] p-4 rounded-lg cursor-pointer transition-all hover:bg-[#282828] group"
              >
                <div className="relative mb-4">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full aspect-square object-cover rounded-full shadow-lg"
                  />
                  <button className="absolute bottom-2 right-2 bg-[#1DB954] rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-105">
                    <Play className="w-6 h-6 text-black" fill="black" />
                  </button>
                </div>
                <h3 className="text-white font-semibold mb-1 truncate">{artist.name}</h3>
                <p className="text-gray-400 text-sm">Artist</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Albums */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-2xl font-bold">Popular Albums</h2>
            <button className="text-gray-300 text-sm font-semibold hover:underline">
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {mockAlbums.map((album) => (
              <PlaylistCard
                key={album.id}
                playlist={{
                  ...album,
                  description: `${album.artist} • ${album.year}`,
                }}
                onClick={() => navigate(`/album/${album.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
