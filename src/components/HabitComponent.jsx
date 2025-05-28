import { useEffect, useState, useContext } from "react";
import { ArrowUpNarrowWide, Check, Flame, Trash2 } from "lucide-react";
import { daysOfWeek, flameColors } from "../data/data";
import { availableIcons } from "../data/data";
// import { HabitContext } from "../context/HabitContext.jsx";
import { MiscContext } from "../context/MiscContext.jsx";



const HabitComponent = ({ habit, handleDeleteHabit}) => {
	// const { habitList, setHabitList } = useContext(HabitContext);
	const { miscInfo , setMiscInfo } = useContext(MiscContext);


	
	const [habitsCompletedToday, setHabitsCompletedToday] = useState([]);
	

	const getSreakColorForAHabit = (id) => {
		return flameColors[0];  // 0 - 9
	};

	const getPercentage = (id) => {
		return "40%"
	};



	return (
		<div className="group relative bg-slate-900 border-[2px] py-6 px-6 border-slate-800 rounded-xl hover:border-slate-700 transition-all flex flex-col justify-start gap-8">
			<div className="flex justify-between items-center">
				<div className="flex justify-center items-center gap-3">
					<div className="text-white w-11 h-11 rounded-md flex justify-center items-center" style={{backgroundImage: `linear-gradient(to right, ${habit.colorOne}, ${habit.colorTwo})`}}>
						{
							habit.icon ?
								availableIcons[habit.icon].icon :
								null
						}
					</div>
					<div>
						<p className="font-poppins font-[500] text-xl text-white select-none">{habit.name}</p>
					</div>
				</div>

				<div>
					<div className="text-white p-[5px] rounded-md cursor-pointer hover:opacity-75 transition-all" style={{backgroundImage: `linear-gradient(to right, ${habit.colorOne}, ${habit.colorTwo})`}}><Check /></div>
				</div>
			</div>
			
			<div className="flex flex-col justify-center items-center gap-3">
				<div className="flex justify-between items-center w-full">
					<p className="text-gray-300 font-poppins text-sm font-[300]">Progress</p>
					<p className="text-gray-300 font-poppins text-sm font-[300]">7/30</p>
				</div>
				<div className="relative w-full h-2">
					<div className="absolute w-full bg-slate-700 rounded-xl h-full"></div>
					<div className="absolute h-full rounded-xl transition-all" style={{width: getPercentage(0), backgroundImage: `linear-gradient(to right, ${habit.colorOne}, ${habit.colorTwo})`}}></div>
				</div>
			</div>

			<div className="flex flex-col-reverse gap-3 justify-between items-center w-full md:flex-row">
				<div className="flex flex-col justify-start items-start gap-2">
					<p className="text-gray-300 font-poppins text-sm font-[300]">This Week</p>
					<div className="flex gap-1">
						{
							daysOfWeek[miscInfo.firstDayOfWeek].map(day => (
								<div
									key={day}
									className="rounded-[8px] w-8 h-8 text-xs font-[300] text-white font-poppins flex justify-center items-center select-none"
									style={habit.acitveDays.includes(day) ? {backgroundImage: `linear-gradient(to right, ${habit.colorOne}, ${habit.colorTwo})`} : null}
								>
									{day}
								</div>
							))
						}
					</div>
				</div>

				<div className={"group bg-gray-700 flex gap-2 rounded-xl px-2 py-1.5 color items-center cursor-pointer"}>
					<Flame className="group-hover:scale-120 transition-all" style={{color: getSreakColorForAHabit(0)}}/>
					<p className="text-gray-200 font-poppins font-[400] text-sm group-hover:text-white group-hover:font-[500] transition-all">9</p>
				</div>
			</div>

			{/* delete button, only visible while hovering a habit box */}
			<div
				className="absolute opacity-0 top-8 left-1/2 text-rose-500 hover:text-rose-700 transition-all cursor-pointer group-hover:opacity-100 duration-200"
				onClick={() => {handleDeleteHabit(habit.id)}}
			>
				<Trash2 size={28}/>
			</div>
		</div>
	)
}

export default HabitComponent