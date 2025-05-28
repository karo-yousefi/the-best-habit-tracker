import StatsSection from  "./components/StatsSection";
import HabitsSection from "./components/HabitsSection";
import HeaderSection from "./components/HeaderSection";
import { useState, useContext } from "react";
import AddHabitModal from "./components/AddHabitModal";
import { HabitContext } from './context/HabitContext.jsx';


const App = () => {
	const { habitList, setHabitList } = useContext(HabitContext);
	const [addModalOpen, setAddModalOpen] = useState(false);
	
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
			<div className="relative min-h-screen bg-gray-950 p-10">
				<div className="max-w-[60rem] mx-auto">
					{/* header */}
					<HeaderSection addModalOpen={addModalOpen} setAddModalOpen={setAddModalOpen} />

					{/* Stats Bar */}
					<StatsSection />

					{/* habits */}
					<HabitsSection saveToLocalStorage={saveToLocalStorage} loadFromLocalStorage={loadFromLocalStorage} />
				</div>

				{/* add new habit modal */}
				<AddHabitModal addModalOpen={addModalOpen} setAddModalOpen={setAddModalOpen} saveToLocalStorage={saveToLocalStorage} /> 
				
			</div>
	);
}

export default App