import { useEffect, useState } from "react";
import HabitComponent from "./HabitComponent";
import { Calendar } from "lucide-react";

const HabitsSection = () => {

	const [habits, setHabits] = useState([]);

	useEffect(() => {
		setHabits([
		{
			id: 0,
			title: "workout",
			streak: 3,
			icon: <Calendar />,
			fromColor: "from-pink-400",
			toColor: "to-rose-600",
		},
		{
			id: 1,
			title: "workout",
			streak: 3,
			icon: <Calendar />,
			fromColor: "from-purple-400",
			toColor: "to-violet-600",
		}
	])
	}, [])
	

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{
				habits && habits.map(habit => (
					<HabitComponent key={habit.id} id={habit.id} title={habit.title} streak={habit.streak} icon={habit.icon} fromColor={habit.fromColor} toColor={habit.toColor} />
				))
			}			
		</div>
	)
}

export default HabitsSection