import { RevenueDistributionData } from "@/@types";
 
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

const revenueDistribution: RevenueDistributionData[] = dates.flatMap((date, index) => {
    const subscriptionBase = 18000 + (index * 500);
    let adsValue = 7000 + (index * 300);

 
    if (Math.random() < 0.3) {
        adsValue = subscriptionBase + Math.floor(Math.random() * 1000) + 1000;
    }

    return [
        { name: "Subscriptions", value: subscriptionBase, createdAt: date },
        { name: "Ads", value: adsValue, createdAt: date },
    ];
});

export default revenueDistribution;
