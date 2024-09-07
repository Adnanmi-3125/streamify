import { Stream } from "@/@types";

const songs = [
  { songName: "Blinding Lights", artist: "The Weeknd" },
  { songName: "Shape of You", artist: "Ed Sheeran" },
  { songName: "Bad Guy", artist: "Billie Eilish" },
  { songName: "Rockstar", artist: "Post Malone" },
  { songName: "Someone Like You", artist: "Adele" },
  { songName: "Senorita", artist: "Shawn Mendes & Camila Cabello" },
  { songName: "Perfect", artist: "Ed Sheeran" },
  { songName: "Circles", artist: "Post Malone" },
  { songName: "Dance Monkey", artist: "Tones and I" },
  { songName: "Havana", artist: "Camila Cabello" },
  { songName: "Old Town Road", artist: "Lil Nas X" },
  { songName: "Levitating", artist: "Dua Lipa" },
  { songName: "Watermelon Sugar", artist: "Harry Styles" },
  { songName: "Peaches", artist: "Justin Bieber" },
  { songName: "Good 4 U", artist: "Olivia Rodrigo" },
  { songName: "Stay", artist: "The Kid LAROI & Justin Bieber" },
  { songName: "Savage Love", artist: "Jawsh 685 & Jason Derulo" },
  { songName: "Sunflower", artist: "Post Malone & Swae Lee" },
  { songName: "Memories", artist: "Maroon 5" },
  { songName: "Without Me", artist: "Halsey" },
  { songName: "Lucid Dreams", artist: "Juice WRLD" },
  { songName: "Thank U, Next", artist: "Ariana Grande" },
  { songName: "Bad Habits", artist: "Ed Sheeran" },
  { songName: "Drivers License", artist: "Olivia Rodrigo" },
  { songName: "Montero (Call Me By Your Name)", artist: "Lil Nas X" },
  { songName: "Kiss Me More", artist: "Doja Cat ft. SZA" },
  { songName: "Falling", artist: "Trevor Daniel" },
  { songName: "Shallow", artist: "Lady Gaga & Bradley Cooper" },
  { songName: "Sweet But Psycho", artist: "Ava Max" },
  { songName: "Dance Monkey", artist: "Tones and I" },
  { songName: "7 Rings", artist: "Ariana Grande" },
  { songName: "Circles", artist: "Post Malone" },
  { songName: "Don't Start Now", artist: "Dua Lipa" },
  { songName: "Señorita", artist: "Shawn Mendes & Camila Cabello" },
  { songName: "No Tears Left to Cry", artist: "Ariana Grande" },
  { songName: "In My Feelings", artist: "Drake" },
  { songName: "I Like It", artist: "Cardi B, Bad Bunny & J Balvin" },
  { songName: "Thank U, Next", artist: "Ariana Grande" },
  { songName: "Dynamite", artist: "BTS" },
  { songName: "Stuck with U", artist: "Ariana Grande & Justin Bieber" },
  { songName: "Butter", artist: "BTS" },
  { songName: "Positions", artist: "Ariana Grande" },
  { songName: "Savage", artist: "Megan Thee Stallion" },
  { songName: "Rain on Me", artist: "Lady Gaga & Ariana Grande" },
  { songName: "WAP", artist: "Cardi B ft. Megan Thee Stallion" },
  { songName: "Go Crazy", artist: "Chris Brown & Young Thug" },
  { songName: "Say So", artist: "Doja Cat" },
  { songName: "Intentions", artist: "Justin Bieber ft. Quavo" },
  { songName: "Life Goes On", artist: "BTS" },
];

const generateDates = (startDate: Date, endDate: Date): string[] => {
  const dates = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate).toISOString().split('T')[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
};

const dates = generateDates(new Date('2023-01-01'), new Date('2024-09-07'));

const streams: Stream[] = dates.map((date, index) => {
  const song = songs[index % songs.length]; 
  return {
    id: `${index + 1}`,
    songName: song.songName,
    artist: song.artist,
    dateStreamed: date,
    streamCount: 100 + (index * 10) % 500,
    userId: `${100 + index}`,
    createdAt: date,
  };
});

export default streams;
