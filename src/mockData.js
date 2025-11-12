// Mock data for Spotify clone

export const mockPlaylists = [
  {
    id: '1',
    name: 'Today\'s Top Hits',
    description: 'Ed Sheeran is on top of the Hottest 50!',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    songs: ['1', '2', '3', '4', '5'],
    creator: 'Spotify',
    followers: '32,456,789'
  },
  {
    id: '2',
    name: 'RapCaviar',
    description: 'New music from Kendrick Lamar, Travis Scott and more',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    songs: ['6', '7', '8', '9', '10'],
    creator: 'Spotify',
    followers: '15,234,567'
  },
  {
    id: '3',
    name: 'Rock Classics',
    description: 'Rock legends & epic songs that continue to inspire',
    image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop',
    songs: ['11', '12', '13', '14', '15'],
    creator: 'Spotify',
    followers: '8,765,432'
  },
  {
    id: '4',
    name: 'Chill Vibes',
    description: 'Kick back to the best new and recent chill hits',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    songs: ['16', '17', '18', '19', '20'],
    creator: 'Spotify',
    followers: '12,345,678'
  },
  {
    id: '5',
    name: 'Peaceful Piano',
    description: 'Relax and indulge with beautiful piano pieces',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=300&fit=crop',
    songs: ['21', '22', '23', '24', '25'],
    creator: 'Spotify',
    followers: '6,543,210'
  },
  {
    id: '6',
    name: 'Deep Focus',
    description: 'Keep calm and focus with ambient and post-rock music',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop',
    songs: ['26', '27', '28', '29', '30'],
    creator: 'Spotify',
    followers: '5,432,109'
  }
];

export const mockArtists = [
  {
    id: '1',
    name: 'The Weeknd',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
    followers: '94,567,890',
    verified: true,
    genres: ['Pop', 'R&B'],
    monthlyListeners: '89,456,789',
    topTracks: ['1', '2', '3', '4', '5']
  },
  {
    id: '2',
    name: 'Taylor Swift',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=500&fit=crop',
    followers: '92,345,678',
    verified: true,
    genres: ['Pop', 'Country'],
    monthlyListeners: '87,234,567',
    topTracks: ['6', '7', '8', '9', '10']
  },
  {
    id: '3',
    name: 'Drake',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=500&fit=crop',
    followers: '88,765,432',
    verified: true,
    genres: ['Hip-Hop', 'Rap'],
    monthlyListeners: '82,765,432',
    topTracks: ['11', '12', '13', '14', '15']
  },
  {
    id: '4',
    name: 'Billie Eilish',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    followers: '78,654,321',
    verified: true,
    genres: ['Alternative', 'Pop'],
    monthlyListeners: '75,654,321',
    topTracks: ['16', '17', '18', '19', '20']
  }
];

export const mockSongs = [
  { id: '1', title: 'Blinding Lights', artist: 'The Weeknd', artistId: '1', album: 'After Hours', albumId: '1', duration: '3:20', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' },
  { id: '2', title: 'Save Your Tears', artist: 'The Weeknd', artistId: '1', album: 'After Hours', albumId: '1', duration: '3:35', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' },
  { id: '3', title: 'Starboy', artist: 'The Weeknd', artistId: '1', album: 'Starboy', albumId: '2', duration: '3:50', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' },
  { id: '4', title: 'Die For You', artist: 'The Weeknd', artistId: '1', album: 'Starboy', albumId: '2', duration: '4:20', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' },
  { id: '5', title: 'I Feel It Coming', artist: 'The Weeknd', artistId: '1', album: 'Starboy', albumId: '2', duration: '4:29', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' },
  { id: '6', title: 'Anti-Hero', artist: 'Taylor Swift', artistId: '2', album: 'Midnights', albumId: '3', duration: '3:21', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop' },
  { id: '7', title: 'Lavender Haze', artist: 'Taylor Swift', artistId: '2', album: 'Midnights', albumId: '3', duration: '3:23', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop' },
  { id: '8', title: 'Shake It Off', artist: 'Taylor Swift', artistId: '2', album: '1989', albumId: '4', duration: '3:39', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop' },
  { id: '9', title: 'Blank Space', artist: 'Taylor Swift', artistId: '2', album: '1989', albumId: '4', duration: '3:51', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop' },
  { id: '10', title: 'Wildest Dreams', artist: 'Taylor Swift', artistId: '2', album: '1989', albumId: '4', duration: '3:40', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop' },
  { id: '11', title: 'One Dance', artist: 'Drake', artistId: '3', album: 'Views', albumId: '5', duration: '2:54', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop' },
  { id: '12', title: 'God\'s Plan', artist: 'Drake', artistId: '3', album: 'Scorpion', albumId: '6', duration: '3:19', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop' },
  { id: '13', title: 'In My Feelings', artist: 'Drake', artistId: '3', album: 'Scorpion', albumId: '6', duration: '3:37', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop' },
  { id: '14', title: 'Hotline Bling', artist: 'Drake', artistId: '3', album: 'Views', albumId: '5', duration: '4:27', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop' },
  { id: '15', title: 'Started From the Bottom', artist: 'Drake', artistId: '3', album: 'Nothing Was the Same', albumId: '7', duration: '2:54', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop' },
  { id: '16', title: 'bad guy', artist: 'Billie Eilish', artistId: '4', album: 'WHEN WE ALL FALL ASLEEP', albumId: '8', duration: '3:14', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' },
  { id: '17', title: 'everything i wanted', artist: 'Billie Eilish', artistId: '4', album: 'everything i wanted', albumId: '9', duration: '4:05', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' },
  { id: '18', title: 'Happier Than Ever', artist: 'Billie Eilish', artistId: '4', album: 'Happier Than Ever', albumId: '10', duration: '4:58', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' },
  { id: '19', title: 'Lovely', artist: 'Billie Eilish', artistId: '4', album: 'dont smile at me', albumId: '11', duration: '3:20', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' },
  { id: '20', title: 'ocean eyes', artist: 'Billie Eilish', artistId: '4', album: 'dont smile at me', albumId: '11', duration: '3:20', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' },
  { id: '21', title: 'Clair de Lune', artist: 'Claude Debussy', artistId: '5', album: 'Classical Piano', albumId: '12', duration: '5:03', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=300&fit=crop' },
  { id: '22', title: 'Moonlight Sonata', artist: 'Ludwig van Beethoven', artistId: '6', album: 'Piano Sonatas', albumId: '13', duration: '5:42', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=300&fit=crop' },
  { id: '23', title: 'Nocturne Op. 9 No. 2', artist: 'Frédéric Chopin', artistId: '7', album: 'Nocturnes', albumId: '14', duration: '4:30', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=300&fit=crop' },
  { id: '24', title: 'River Flows in You', artist: 'Yiruma', artistId: '8', album: 'First Love', albumId: '15', duration: '3:40', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=300&fit=crop' },
  { id: '25', title: 'Kiss the Rain', artist: 'Yiruma', artistId: '8', album: 'First Love', albumId: '15', duration: '4:30', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=300&fit=crop' },
  { id: '26', title: 'Weightless', artist: 'Marconi Union', artistId: '9', album: 'Weightless', albumId: '16', duration: '8:09', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop' },
  { id: '27', title: 'Ambient 1', artist: 'Brian Eno', artistId: '10', album: 'Music for Airports', albumId: '17', duration: '6:43', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop' },
  { id: '28', title: 'Deep Focus Flow', artist: 'Focus Music', artistId: '11', album: 'Concentration', albumId: '18', duration: '5:22', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop' },
  { id: '29', title: 'Study Session', artist: 'Study Music', artistId: '12', album: 'Focus', albumId: '19', duration: '4:15', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop' },
  { id: '30', title: 'Calm Waters', artist: 'Nature Sounds', artistId: '13', album: 'Peaceful', albumId: '20', duration: '7:30', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop' }
];

export const mockAlbums = [
  { id: '1', name: 'After Hours', artist: 'The Weeknd', artistId: '1', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop', year: '2020', songs: ['1', '2'] },
  { id: '2', name: 'Starboy', artist: 'The Weeknd', artistId: '1', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop', year: '2016', songs: ['3', '4', '5'] },
  { id: '3', name: 'Midnights', artist: 'Taylor Swift', artistId: '2', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop', year: '2022', songs: ['6', '7'] },
  { id: '4', name: '1989', artist: 'Taylor Swift', artistId: '2', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop', year: '2014', songs: ['8', '9', '10'] },
  { id: '5', name: 'Views', artist: 'Drake', artistId: '3', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop', year: '2016', songs: ['11', '14'] },
  { id: '6', name: 'Scorpion', artist: 'Drake', artistId: '3', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop', year: '2018', songs: ['12', '13'] }
];
