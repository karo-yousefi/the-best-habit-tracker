import { Flame, ShieldCheck, BookCheck, Calendar } from "lucide-react";


const statsInfo = [
	{
		id: 0,
		title: "Completed Today",
		icon: <BookCheck size={32} />,
		fromColor: "from-lime-500",
		toColor: "to-sky-600",
	},
	{
		id: 1,
		title: "Longest Streak",
		icon: <Flame size={32} />,
		fromColor: "from-purple-500",
		toColor: "to-rose-600",
	},
	{
		id: 2,
		title: "Active Habits",
		icon: <ShieldCheck size={32} />,
		fromColor: "from-yellow-500",
		toColor: "to-rose-600",
	},
	{
		id: 3,
		title: "Days Left",
		icon: <Calendar size={32} />,
		fromColor: "from-purple-500",
		toColor: "to-sky-600",
	},
];


const daysOfWeek = {
	"sat": ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
	"sun": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	"mon": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
};


const flameColors = [
  "#3B82F6", // starting color | day 1
  "#06B6D4", // early progress | day 2-3
  "#10B981", // gaining momentum | day 4-6
  "#22C55E", // healthy streak | day 7-9
  "#EAB308", // heating up | day 10-14
  "#F59E0B", // hot | day 15-18
  "#EF4444", // intense | day 19-23
  "#DC2626", // on fire | day 24-27
  "#EA580C", // blazing | day 28-32
  "#F97316", // full flame | day 33+
]

export {
	statsInfo,
	daysOfWeek,
}