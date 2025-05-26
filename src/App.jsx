import StatusBox from "./components/StatsBox";
import { statsInfo } from "../data/data";
import HabitsSection from "./components/HabitsSection";


const App = () => {


	return (
		<div className="min-h-screen bg-gray-950 p-10">
			<div className="max-w-[60rem] mx-auto">
				{/* header */}
				<div className="flex justify-between items-center gap-3">
					<div className="flex flex-col justify-center items-start gap-2">
						<h1 className="text-white font-poppins text-2xl font-[500] select-none">Habbit Tracker</h1>
						<p className="text-gray-400 font-poppins text-md font-[300] select-none">Build better habits, one day at a time</p>
					</div>
					<div>
						<button className="h-10 w-36 bg-gradient-to-br from-violet-600 to-sky-600 rounded-xl text-white font-poppins cursor-pointer select-none transition-all hover:translate-y-[3px] hover:opacity-85"><span className="pr-3">+</span>Add Habbit</button>	
					</div>
				</div>
				
				{/* Stats Bar */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-9">
					{
						statsInfo.map(stat => (
							<StatusBox key={stat.id} fromColor={stat.fromColor} toColor={stat.toColor} icon={stat.icon} title={stat.title} value={"1"} />
						))
					}
				</div>

					{/* habits */}
					<HabitsSection />

			</div>
		</div>
	)
}

export default App