import StatsSection from  "./components/StatsSection";
import HabitsSection from "./components/HabitsSection";
import HeaderSection from "./components/HeaderSection";
import HabitContext from "./context/habitContext";
import { useState } from "react";


const App = () => {
	const [habits, setHabits] = useState([]);

	return (
		<HabitContext.Provider value={habits}>
			<div className="min-h-screen bg-gray-950 p-10">
				<div className="max-w-[60rem] mx-auto">

					{/* header */}
					<HeaderSection />
					
					{/* Stats Bar */}
					<StatsSection />	

					{/* habits */}
					<HabitsSection />

				</div>
			</div>
		</HabitContext.Provider>
	)
}

export default App