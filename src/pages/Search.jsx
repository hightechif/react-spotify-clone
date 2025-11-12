import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import { mockSongs, mockArtists, mockAlbums, mockPlaylists } from '../mockData';

const SearchPage = ({ onPlaySong }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Pop', color: 'bg-pink-500', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' },
    { name: 'Hip-Hop', color: 'bg-purple-600', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop' },
    { name: 'Rock', color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop' },
    { name: 'Latin', color: 'bg-orange-500', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop' },
    { name: 'Jazz', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=300&h=300&fit=crop' },
    { name: 'Classical', color: 'bg-indigo-600', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=300&fit=crop' },
    { name: 'Electronic', color: 'bg-teal-500', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' },
    { name: 'R&B', color: 'bg-rose-600', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop' },
  ];

  const filteredSongs = searchQuery
    ? mockSongs.filter(
        (song) =>
          song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const filteredArtists = searchQuery
    ? mockArtists.filter((artist) =>
        artist.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const filteredAlbums = searchQuery
    ? mockAlbums.filter(
        (album) =>
          album.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          album.artist.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const hasResults = filteredSongs.length > 0 || filteredArtists.length > 0 || filteredAlbums.length > 0;

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#1f1f1f] to-[#121212] pb-24">
      <div className="px-8 pt-6">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="What do you want to listen to?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-black pl-12 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>

        {!searchQuery ? (
          /* Browse Categories */
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Browse all</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`${category.color} rounded-lg p-4 h-48 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform`}
                >
                  <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute bottom-0 right-0 w-28 h-28 object-cover rotate-25 translate-x-4 translate-y-4 shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : hasResults ? (
          /* Search Results */
          <div>
            {/* Top Result */}
            {filteredSongs.length > 0 && (
              <div className="mb-10">
                <h2 className="text-white text-2xl font-bold mb-4">Top result</h2>
                <div
                  onClick={() => onPlaySong(filteredSongs[0])}
                  className="bg-[#181818] p-6 rounded-lg hover:bg-[#282828] cursor-pointer transition-colors max-w-md"
                >
                  <img
                    src={filteredSongs[0].image}
                    alt={filteredSongs[0].title}
                    className="w-24 h-24 rounded-md mb-4"
                  />
                  <h3 className="text-white text-3xl font-bold mb-2">{filteredSongs[0].title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="bg-black text-white text-xs px-2 py-1 rounded-full">Song</span>
                    <span className="text-gray-300">{filteredSongs[0].artist}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Songs */}
            {filteredSongs.length > 0 && (
              <div className="mb-10">
                <h2 className="text-white text-2xl font-bold mb-4">Songs</h2>
                <div className="space-y-2">
                  {filteredSongs.slice(0, 4).map((song) => (
                    <div
                      key={song.id}
                      onClick={() => onPlaySong(song)}
                      className="flex items-center p-2 rounded hover:bg-[#282828] cursor-pointer group"
                    >
                      <img
                        src={song.image}
                        alt={song.title}
                        className="w-12 h-12 rounded mr-3"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-medium truncate">{song.title}</div>
                        <div className="text-gray-400 text-sm truncate">{song.artist}</div>
                      </div>
                      <div className="text-gray-400 text-sm mr-4">{song.duration}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Artists */}
            {filteredArtists.length > 0 && (
              <div className="mb-10">
                <h2 className="text-white text-2xl font-bold mb-4">Artists</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {filteredArtists.map((artist) => (
                    <div
                      key={artist.id}
                      onClick={() => navigate(`/artist/${artist.id}`)}
                      className="bg-[#181818] p-4 rounded-lg cursor-pointer transition-all hover:bg-[#282828]"
                    >
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-full aspect-square object-cover rounded-full shadow-lg mb-4"
                      />
                      <h3 className="text-white font-semibold mb-1 truncate">{artist.name}</h3>
                      <p className="text-gray-400 text-sm">Artist</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Albums */}
            {filteredAlbums.length > 0 && (
              <div className="mb-10">
                <h2 className="text-white text-2xl font-bold mb-4">Albums</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {filteredAlbums.map((album) => (
                    <div
                      key={album.id}
                      onClick={() => navigate(`/album/${album.id}`)}
                      className="bg-[#181818] p-4 rounded-lg cursor-pointer transition-all hover:bg-[#282828]"
                    >
                      <img
                        src={album.image}
                        alt={album.name}
                        className="w-full aspect-square object-cover rounded-md shadow-lg mb-4"
                      />
                      <h3 className="text-white font-semibold mb-1 truncate">{album.name}</h3>
                      <p className="text-gray-400 text-sm truncate">{album.artist}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-20">
            <h3 className="text-white text-xl mb-2">No results found for "{searchQuery}"</h3>
            <p className="text-gray-400">Please make sure your words are spelled correctly or use fewer or different keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
