import StatsBox from "./StatsBox";
import { useContext } from "react";
import { HabitContext } from "../context/HabitContext.jsx";
import { Flame, ShieldCheck, BookCheck, Calendar } from "lucide-react";

// Calculation functions
const calculateCompletedToday = (habitList) => {
	return habitList.filter(habit => habit.completedToday).length;
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
		colorOne: "#34d399",
		colorTwo: "#3b82f6",
		value: calculateCompletedToday(habitList),
	},
	{
		id: 1,
		title: "Longest Streak",
		icon: <Flame size={32} />,
		colorOne: "#f97316",
		colorTwo: "#ef4444",
		value: calculateLongestStreak(habitList),
	},
	{
		id: 2,
		title: "Active Habits",
		icon: <ShieldCheck size={32} />,
		colorOne: "#8b5cf6",
		colorTwo: "#06b6d4",
		value: calculateActiveHabits(habitList),
	},
	{
		id: 3,
		title: "Days Left",
		icon: <Calendar size={32} />,
		colorOne: "#6366f1",
		colorTwo: "#14b8a6",
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
