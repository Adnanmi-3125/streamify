import { Metric } from '@/@types';
import { Calendar, BarChart2, DollarSign, Star } from 'lucide-react';

const metrics: Metric[] = [
  { title: 'Total Users', value: '12500', icon: Calendar, description: '+500 since last month' },
  { title: 'Active Users', value: '4500', icon: BarChart2, description: '+200 since last month' },
  { title: 'Total Streams', value: '105000', icon: BarChart2, description: '+8000 since last month' },
  { title: 'Revenue', value: '$25000', icon: DollarSign, description: '+$2500 since last month' },
  { title: 'Top Artist', value: 'The Weeknd', icon: Star, description: 'Most streamed this month' },
];

export default metrics;
