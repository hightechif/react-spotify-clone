import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Mic2, ListMusic, Maximize2 } from 'lucide-react';
import { Slider } from './ui/slider';

const MusicPlayer = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(33);
  const [volume, setVolume] = useState(80);

  if (!currentSong) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-gray-800 px-4 py-3 z-50">
      <div className="flex items-center justify-between">
        {/* Left - Currently Playing */}
        <div className="flex items-center w-1/4 min-w-[180px]">
          <img
            src={currentSong.image}
            alt={currentSong.title}
            className="w-14 h-14 rounded"
          />
          <div className="ml-3 overflow-hidden">
            <div className="text-white text-sm font-medium truncate">
              {currentSong.title}
            </div>
            <div className="text-gray-400 text-xs truncate">
              {currentSong.artist}
            </div>
          </div>
        </div>

        {/* Center - Player Controls */}
        <div className="flex flex-col items-center w-2/5 max-w-[722px]">
          <div className="flex items-center gap-4 mb-2">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Shuffle className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white rounded-full p-2 hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-black" fill="black" />
              ) : (
                <Play className="w-5 h-5 text-black" fill="black" />
              )}
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Repeat className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-gray-400 min-w-[40px] text-right">1:23</span>
            <Slider
              value={[progress]}
              onValueChange={(value) => setProgress(value[0])}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-gray-400 min-w-[40px]">{currentSong.duration}</span>
          </div>
        </div>

        {/* Right - Volume and Other Controls */}
        <div className="flex items-center justify-end gap-4 w-1/4 min-w-[180px]">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Mic2 className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <ListMusic className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Volume2 className="w-4 h-4" />
          </button>
          <Slider
            value={[volume]}
            onValueChange={(value) => setVolume(value[0])}
            max={100}
            step={1}
            className="w-24"
          />
          <button className="text-gray-400 hover:text-white transition-colors">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
