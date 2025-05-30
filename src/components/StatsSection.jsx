import StatsBox from "./StatsBox";
import { useContext, useEffect } from "react";
import { HabitContext } from "../context/HabitContext.jsx";
import { Flame, ShieldCheck, BookCheck, Calendar } from "lucide-react";

// Calculation functions

let howManyCompletedToday = 0

const getdayName = () => {
	const today = new Date();
	const dayName = today.toLocaleDateString("en-US", { weekday: "long" });

	return dayName.slice(0, 3).toLowerCase();
}


const calculateCompletedToday = (habitList) => {
	// habitList.map(habit => {
	// 	const dayObj = habit.week.find(d => d.day === getdayName());
		
	// 	dayObj.hasCompleted ? howManyCompletedToday += 1 : null
	// });

	return habitList.filter(habit => habit.completedInDays.includes(getdayName())).length;
};

const calculateLongestStreak = (habitList) => {
	return Math.max(...habitList.map(habit => habit.longestStreak || 0), 0);
};

const calculateActiveHabits = (habitList) => {
	return habitList.length;
};

const calculateDaysLeftInMonth = () => {
	const today = new Date();
	const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
	return (endOfMonth.getDate() - today.getDate());
};

//  Static config with dynamic value logic
const getStatsConfig = (habitList) => [
	{
		id: 0,
		title: "Completed Today",
		icon: <BookCheck size={32} />,
		colorOne: "#10b981",
		colorTwo: "#22d3ee",
		value: calculateCompletedToday(habitList),
	},
	{
		id: 1,
		title: "Longest Streak",
		icon: <Flame size={32} />,
		colorOne: "#f43f5e",
		colorTwo: "#f97316",
		value: calculateLongestStreak(habitList),
	},
	{
		id: 2,
		title: "Active Habits",
		icon: <ShieldCheck size={32} />,
		colorOne: "#3b82f6",
		colorTwo: "#6366f1",
		value: calculateActiveHabits(habitList),
	},
	{
		id: 3,
		title: "Days Left",
		icon: <Calendar size={32} />,
		colorOne: "#9333ea",
		colorTwo: "#e11d48",
		value: calculateDaysLeftInMonth(),
	},
];

const StatsSection = () => {
	const { habitList } = useContext(HabitContext);
	const statsConfig = getStatsConfig(habitList); // run the functions once per render


	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-9">
			{statsConfig.map(stat => (
				<StatsBox
					key={stat.id}
					colorOne={stat.colorOne}
					colorTwo={stat.colorTwo}
					icon={stat.icon}
					title={stat.title}
					value={stat.value}
				/>
			))}
		</div>
	);
};

export default StatsSection;
