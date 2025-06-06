import StatsSection from  "./components/StatsSection";
import HabitsSection from "./components/HabitsSection";
import HeaderSection from "./components/HeaderSection";
import { useState } from "react";
import AddHabitModal from "./components/AddHabitModal";
import { Analytics } from "@vercel/analytics/react";



const App = () => {
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
			<AddHabitModal addModalOpen={addModalOpen} setAddModalOpen={setAddModalOpen} saveToLocalStorage={saveToLocalStorage} loadFromLocalStorage={loadFromLocalStorage} /> 
				
			{/* vercel analytics */}
			<Analytics />
		</div>
	);
}

export default App