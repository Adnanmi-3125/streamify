import { TopSongData } from "@/@types";
 
const generateDates = (startDate: Date, endDate: Date): string[] => {
    const dates = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
        dates.push(new Date(currentDate).toISOString().split('T')[0]);
        currentDate.setDate(currentDate.getDate() + 15);  
    }
    return dates;
};

const dates = generateDates(new Date('2023-01-01'), new Date('2024-09-07'));

const songNames = [
    'Blinding Lights',
    'Save Your Tears',
    'Peaches',
    'Leave The Door Open',
    'Levitating',
    'Good 4 U',
    'Bad Habits',
    'Watermelon Sugar',
    'drivers license',
    'MONTERO (Call Me By Your Name)'
];

let index = 0;
const topSongs: TopSongData[] = dates.flatMap(date => [
    { name: songNames[(index++) % songNames.length], streams: 5000 + (index * 100) % 5000, createdAt: date },
    { name: songNames[(index++) % songNames.length], streams: 4500 + (index * 200) % 5000, createdAt: date },
    { name: songNames[(index++) % songNames.length], streams: 4000 + (index * 300) % 5000, createdAt: date },
    { name: songNames[(index++) % songNames.length], streams: 3500 + (index * 400) % 5000, createdAt: date },
    { name: songNames[(index++) % songNames.length], streams: 3000 + (index * 500) % 5000, createdAt: date }
]);

export default topSongs;

