import { Metric } from '@/@types';
import { Calendar, BarChart2, DollarSign, Star } from 'lucide-react';

 
const generateDates = (startDate: Date, endDate: Date): string[] => {
  const dates = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate).toISOString().split('T')[0]);
    currentDate.setMonth(currentDate.getMonth() + 1);
  }
  return dates;
};

const dates = generateDates(new Date('2023-01-01'), new Date('2024-09-01'));

const generateMetrics = (dates: string[]): Metric[] => {
  return dates.flatMap((date, index) => [
    { title: 'Total Users', value: `${12000 + (index * 500)}`, icon: Calendar, description: `+${(index * 100) % 1000} since last month`, createdAt: date },
    { title: 'Active Users', value: `${4000 + (index * 200)}`, icon: BarChart2, description: `+${(index * 50) % 500} since last month`, createdAt: date },
    { title: 'Total Streams', value: `${100000 + (index * 1000)}`, icon: BarChart2, description: `+${(index * 500) % 5000} since last month`, createdAt: date },
    { title: 'Revenue', value: `$${24000 + (index * 1000)}`, icon: DollarSign, description: `+${(index * 200) % 2000} since last month`, createdAt: date },
    { title: 'Top Artist', value: `${['The Weeknd', 'Drake', 'Adele', 'Taylor Swift', 'Billie Eilish'][index % 5]}`, icon: Star, description: 'Most streamed this month', createdAt: date },
  ]);
};

const metrics: Metric[] = generateMetrics(dates);

export default metrics;
