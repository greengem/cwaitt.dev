'use client'
import Calendar from 'react-github-contribution-calendar';

export default function SkillsContributionCalendar() {
    const getPastSixMonthsDates = (): Record<string, number> => {
        const values: Record<string, number> = {};
        const currentDate = new Date();
        for (let month = 0; month < 6; month++) {
            const date = new Date();
            date.setMonth(currentDate.getMonth() - month);
            const year = date.getFullYear();
            const monthFormatted = String(date.getMonth() + 1).padStart(2, '0');
            const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();
            for (let day = 1; day <= daysInMonth; day++) {
                const dayFormatted = String(day).padStart(2, '0');
                // Example: '2023-01-01'
                const dateString = `${year}-${monthFormatted}-${dayFormatted}`;
                // Assign a sample contribution value here
                values[dateString] = Math.floor(Math.random() * 5); // Random value between 0 and 4
            }
        }
        return values;
    };

    const until = new Date().toISOString().split('T')[0]; // Format: 'YYYY-MM-DD'
    const values = getPastSixMonthsDates();

    return (
        <Calendar 
            values={values} 
            until={until}
            weekLabelAttributes={{}} // Add empty or default attributes
            monthLabelAttributes={{}} // Add empty or default attributes
            panelAttributes={{}} // Add empty or default attributes
        />
    );
}
