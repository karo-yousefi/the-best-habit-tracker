import StatsSection from  "./components/StatsSection";
import HabitsSection from "./components/HabitsSection";
import HeaderSection from "./components/HeaderSection";
import HabitContext from "./context/habitContext";
import { useState } from "react";
import AddHabitModal from "./components/AddHabitModal";


const App = () => {
	const [habits, setHabits] = useState([]);
	const [addModalOpen, setAddModalOpen] = useState(false);
	const [habitList, setHabitList] = useState([]);


	const saveToLocalStorage = (key, value) => {
		localStorage.setItem(key, value ? JSON.stringify(value) : "")
	}

	const loadFromLocalStorage = (key) => {
		if (localStorage.getItem(key)) {
			const data = JSON.parse(localStorage.getItem(key));
			return data;
		}
	}



	return (
		<HabitContext.Provider value={habits}>
			<div className="relative min-h-screen bg-gray-950 p-10">
				<div className="max-w-[60rem] mx-auto">
					{/* header */}
					<HeaderSection addModalOpen={addModalOpen} setAddModalOpen={setAddModalOpen} />

					{/* Stats Bar */}
					<StatsSection />

					{/* habits */}
					<HabitsSection habitList={habitList} setHabitList={setHabitList} saveToLocalStorage={saveToLocalStorage} loadFromLocalStorage={loadFromLocalStorage} />
				</div>

				{/* add new habit modal */}
				<AddHabitModal addModalOpen={addModalOpen} setAddModalOpen={setAddModalOpen} saveToLocalStorage={saveToLocalStorage} loadFromLocalStorage={loadFromLocalStorage} habitList={habitList} setHabitList={setHabitList} /> 
				
			</div>
		</HabitContext.Provider>
	);
}

export default App