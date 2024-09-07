import { UserGrowthData } from "@/@types";
import { format } from 'date-fns';

 
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

const userGrowth: UserGrowthData[] = dates.map((date, index) => ({
  month: format(new Date(date), 'MMM'),
  totalUsers: 3000 + (index * 200) % 5000,
  activeUsers: 1500 + (index * 100) % 2000,
  createdAt: date,
}));


export default userGrowth;
