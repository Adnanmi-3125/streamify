import { Calendar, BarChart2, DollarSign, Star, LucideIcon } from 'lucide-react';

export type Metric = {
  title: string;
  value: string;
  icon: LucideIcon;
  description: string;
};

export type UserGrowthData = {
  month: string;
  totalUsers: number;
  activeUsers: number;
};

export type RevenueDistributionData = {
  name: string;
  value: number;
};

export type TopSongData = {
  name: string;
  streams: number;
};

export type Stream = {
  id: string;
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
};

const data = {
  metrics: [
    { title: 'Total Users', value: '12500', icon: Calendar, description: '+500 since last month' },
    { title: 'Active Users', value: '4500', icon: BarChart2, description: '+200 since last month' },
    { title: 'Total Streams', value: '105000', icon: BarChart2, description: '+8000 since last month' },
    { title: 'Revenue', value: '$25000', icon: DollarSign, description: '+$2500 since last month' },
    { title: 'Top Artist', value: 'The Weeknd', icon: Star, description: 'Most streamed this month' },
  ],
  userGrowth: [
    { month: 'Jan', totalUsers: 3000, activeUsers: 1500 },
    { month: 'Feb', totalUsers: 3500, activeUsers: 1600 },
    { month: 'Mar', totalUsers: 2900, activeUsers: 1700 },
    { month: 'Apr', totalUsers: 4500, activeUsers: 1800 },
    { month: 'May', totalUsers: 5000, activeUsers: 1900 },
    { month: 'Jun', totalUsers: 5500, activeUsers: 2000 },
    { month: 'Jul', totalUsers: 5000, activeUsers: 2100 },
    { month: 'Aug', totalUsers: 6500, activeUsers: 2200 },

  ],
  revenueDistribution: [
    { name: 'Subscriptions', value: 18000 },
    { name: 'Ads', value: 7000 },
  ],
  topSongs: [
    { name: 'Blinding Lights', streams: 5000 },
    { name: 'Save Your Tears', streams: 4500 },
    { name: 'Peaches', streams: 4000 },
    { name: 'Leave The Door Open', streams: 3500 },
    { name: 'Levitating', streams: 3000 },
  ],
  streams: [
    { id: '1', songName: 'Blinding Lights', artist: 'The Weeknd', dateStreamed: '2023-10-01', streamCount: 500, userId: '101' },
    { id: '2', songName: 'Save Your Tears', artist: 'The Weeknd', dateStreamed: '2023-10-02', streamCount: 450, userId: '102' },
    { id: '3', songName: 'Peaches', artist: 'Justin Bieber', dateStreamed: '2023-10-03', streamCount: 400, userId: '103' },
    { id: '4', songName: 'Leave The Door Open', artist: 'Bruno Mars', dateStreamed: '2023-10-04', streamCount: 350, userId: '104' },
    { id: '5', songName: 'Levitating', artist: 'Dua Lipa', dateStreamed: '2023-10-05', streamCount: 300, userId: '105' },
    { id: '6', songName: 'Bad Habits', artist: 'Ed Sheeran', dateStreamed: '2023-10-06', streamCount: 250, userId: '106' },
    { id: '7', songName: 'Watermelon Sugar', artist: 'Harry Styles', dateStreamed: '2023-10-07', streamCount: 200, userId: '107' },
    { id: '8', songName: 'Good 4 U', artist: 'Olivia Rodrigo', dateStreamed: '2023-10-08', streamCount: 150, userId: '108' },
    { id: '9', songName: 'MONTERO (Call Me By Your Name)', artist: 'Lil Nas X', dateStreamed: '2023-10-09', streamCount: 100, userId: '109' },
    { id: '10', songName: 'Kiss Me More', artist: 'Doja Cat', dateStreamed: '2023-10-10', streamCount: 50, userId: '110' },
  ],
};

export default data;
