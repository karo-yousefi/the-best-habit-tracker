import { useEffect, useState } from "react";
import HabitComponent from "./HabitComponent";
import { Calendar } from "lucide-react";

const HabitsSection = ({ habitList, setHabitList, saveToLocalStorage, loadFromLocalStorage }) => {

	const [habits, setHabits] = useState([]);

	const removeHabit = (id) => {
		null
	}

	useEffect(() => {
		const loadedHabits = loadFromLocalStorage("habits");
		
		setHabitList(loadedHabits);
	}, [])
	

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{
				habitList && habitList.map(habit => (
					<HabitComponent key={habit.id} id={habit.id} title={habit.name} colorOne={habit.colorOne} colorTwo={habit.colorTwo} icon={habit.icon} streak={habit.streak} />
				))
			}			
		</div>
	)
}

export default HabitsSection