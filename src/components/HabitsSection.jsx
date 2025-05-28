import { HabitContext } from "../context/HabitContext.jsx";
import  { useContext, useEffect } from "react";
import HabitComponent from "./HabitComponent.jsx";



const HabitsSection = ({ saveToLocalStorage, loadFromLocalStorage }) => {

	const { habitList, setHabitList } = useContext(HabitContext);


	const changeFirstDayOfWeek = () => {
		return null;
	}
	
	const handleDeleteHabit = (habitId) => {
		const tempHabitList = [...habitList];

		const updatedHabitList = tempHabitList.filter(item => item.id !== habitId); // find and removes the habit

		setHabitList(updatedHabitList);
		saveToLocalStorage("habits", updatedHabitList);
	}


	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{
				habitList && habitList.map(habit => {
					return (
						<HabitComponent key={habit.id} habit={habit} handleDeleteHabit={handleDeleteHabit}/>
					)
				}

				)
			}			
		</div>
	)
}

export default HabitsSection