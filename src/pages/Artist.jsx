import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, BadgeCheck } from 'lucide-react';
import { mockArtists, mockSongs, mockAlbums } from '../mockData';

const Artist = ({ onPlaySong }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artist = mockArtists.find((a) => a.id === id);

  if (!artist) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#121212]">
        <p className="text-white text-xl">Artist not found</p>
      </div>
    );
  }

  const artistSongs = mockSongs.filter((song) => song.artistId === artist.id);
  const artistAlbums = mockAlbums.filter((album) => album.artistId === artist.id);

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#5f3b7f] to-[#121212] pb-24">
      {/* Header */}
      <div className="px-8 pt-20 pb-6 flex items-end gap-6">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-56 h-56 rounded-full shadow-2xl"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            {artist.verified && <BadgeCheck className="w-6 h-6 text-blue-500" fill="#3b82f6" />}
            <p className="text-sm font-semibold text-white">Verified Artist</p>
          </div>
          <h1 className="text-white text-7xl font-bold mb-6">{artist.name}</h1>
          <p className="text-gray-300 text-lg">{artist.monthlyListeners} monthly listeners</p>
        </div>
      </div>

      {/* Controls */}
      <div className="px-8 py-6 flex items-center gap-8">
        <button className="bg-[#1DB954] rounded-full p-4 hover:scale-105 hover:bg-[#1ed760] transition-all shadow-lg">
          <Play className="w-7 h-7 text-black" fill="black" />
        </button>
        <button className="border border-gray-400 text-gray-400 hover:border-white hover:text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
          Following
        </button>
      </div>

      {/* Popular Songs */}
      <div className="px-8 pb-6">
        <h2 className="text-white text-2xl font-bold mb-4">Popular</h2>
        <div className="space-y-1">
          {artistSongs.slice(0, 5).map((song, index) => (
            <div
              key={song.id}
              onClick={() => onPlaySong(song)}
              className="flex items-center gap-4 px-4 py-3 rounded hover:bg-[#ffffff14] cursor-pointer group"
            >
              <div className="text-gray-400 text-sm w-4">{index + 1}</div>
              <img
                src={song.image}
                alt={song.title}
                className="w-10 h-10 rounded"
              />
              <div className="flex-1">
                <div className="text-white font-medium">{song.title}</div>
              </div>
              <div className="text-gray-400 text-sm">{song.duration}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Discography */}
      <div className="px-8 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-2xl font-bold">Discography</h2>
          <button className="text-gray-300 text-sm font-semibold hover:underline">
            Show all
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {artistAlbums.map((album) => (
            <div
              key={album.id}
              onClick={() => navigate(`/album/${album.id}`)}
              className="bg-[#181818] p-4 rounded-lg cursor-pointer transition-all hover:bg-[#282828] group"
            >
              <div className="relative mb-4">
                <img
                  src={album.image}
                  alt={album.name}
                  className="w-full aspect-square object-cover rounded-md shadow-lg"
                />
                <button className="absolute bottom-2 right-2 bg-[#1DB954] rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-105">
                  <Play className="w-6 h-6 text-black" fill="black" />
                </button>
              </div>
              <h3 className="text-white font-semibold mb-1 truncate">{album.name}</h3>
              <p className="text-gray-400 text-sm">{album.year} • Album</p>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="px-8 pb-6">
        <h2 className="text-white text-2xl font-bold mb-4">About</h2>
        <div className="flex items-start gap-6">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-64 h-80 object-cover rounded-lg"
          />
          <div>
            <div className="text-white text-5xl font-bold mb-4">{artist.followers}</div>
            <div className="text-gray-300 mb-6">Followers</div>
            <div className="flex flex-wrap gap-2">
              {artist.genres.map((genre, index) => (
                <span
                  key={index}
                  className="bg-[#282828] text-white px-4 py-2 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
