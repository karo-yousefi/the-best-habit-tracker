import { useEffect, useState } from "react";
import HabitComponent from "./HabitComponent";


const HabitsSection = ({ habitList, setHabitList, saveToLocalStorage, loadFromLocalStorage }) => {




	const handleDeleteHabit = (habitId) => {
		const tempHabitList = [...habitList];

		const updatedHabitList = tempHabitList.filter(item => item.id !== habitId); // find and removes the habit

		setHabitList(updatedHabitList);
		saveToLocalStorage("habits", updatedHabitList);
	}



	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{
				habitList && habitList.map(habit => (
					<HabitComponent key={habit.id} id={habit.id} title={habit.name} colorOne={habit.colorOne} colorTwo={habit.colorTwo} icon={habit.icon} streak={habit.streak} handleDeleteHabit={handleDeleteHabit}/>
				))
			}			
		</div>
	)
}

export default HabitsSection