import StatsSection from  "./components/StatsSection";
import HabitsSection from "./components/HabitsSection";
import HeaderSection from "./components/HeaderSection";
import HabitContext from "./context/habitContext";
import { useState, useRef } from "react";
import { CircleX } from "lucide-react";


const App = () => {
	const [habits, setHabits] = useState([]);
	const [addModalOpen, setAddModalOpen] = useState(false);
	const modalBGRef = useRef(null);



	return (
		<HabitContext.Provider value={habits}>
			<div className="relative min-h-screen bg-gray-950 p-10">
				<div className="max-w-[60rem] mx-auto">
					{/* header */}
					<HeaderSection
						addModalOpen={addModalOpen}
						setAddModalOpen={setAddModalOpen}
					/>

					{/* Stats Bar */}
					<StatsSection />

					{/* habits */}
					<HabitsSection />
				</div>

				{/* add new habit modal */}
				<div
					ref={modalBGRef}
					className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#1d293d85] rounded-2xl flex justify-center items-center transition-all ease-out duration-200
						${addModalOpen ? 
							"opacity-100" :
							"opacity-0 pointer-events-none"
						}`}
					onClick={(e) => {e.target === modalBGRef.current ? setAddModalOpen(false) : null }}
				>
					<div className={`w-100 h-100 bg-slate-800 rounded-xl text-white p-4 transition-all ease-out duration-200 ${addModalOpen ? "scale-100" : "scale-40"}`}>
						<CircleX
							className="text-rose-500 cursor-pointer hover:opacity-80 transition-all"
							size={28}
							onClick={() => setAddModalOpen(false)} />
					</div>
				</div>
			</div>
		</HabitContext.Provider>
	);
}

export default App