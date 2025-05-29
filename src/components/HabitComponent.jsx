import { useEffect, useState, useContext } from "react";
import { ArrowUpNarrowWide, Check, Flame, Trash2 } from "lucide-react";
import { daysOfWeek, flameColors } from "../data/data";
import { availableIcons } from "../data/data";
import { MiscContext } from "../context/MiscContext.jsx";



const HabitComponent = ({ habit, setHabitList, handleDeleteHabit}) => {
	const { miscInfo , setMiscInfo } = useContext(MiscContext);

	

	const getSreakColorForAHabit = () => {
		const streak = habit.streak;

		if (streak < 2) {
			return  flameColors[0];
		}
		else if (streak > 1 && streak <= 3){
			return  flameColors[1];
		}
		else if (streak > 3 && streak <= 6){
			return  flameColors[2];
		}
		else if (streak > 6 && streak <= 9){
			return  flameColors[3];
		}
		else if (streak > 9 && streak <= 14){
			return  flameColors[4];
		}
		else if (streak > 14 && streak <= 18){
			return  flameColors[5];
		}
		else if (streak > 18 && streak <= 23){
			return  flameColors[6];
		}
		else if (streak > 23 && streak <= 27){
			return  flameColors[7];
		}
		else if (streak > 27 && streak <= 32){
			return  flameColors[8];
		}
		else if (streak > 33) {
			return  flameColors[9];
		}
	}

	const getPercentage = () => {
		if (habit.goal > 0) {
			const percentage = Math.floor(habit.times * 100 / habit.goal);
			return `${percentage}%`;
		}
		else {
			return "0%";
		}
	};

	const getdayName = () => {
		const today = new Date();
		const dayName = today.toLocaleDateString("en-US", { weekday: "long" });

		return dayName.slice(0, 3).toLowerCase();
	}


	const handleCompleteHabitToday = (habit) => {
		const today = getdayName();

		if (habit.activeDays.includes(today)) {
			const newCompletedInDays = [...habit.completedInDays];

			if (!newCompletedInDays.includes(today)) { // Habit is not done, add it to the done list
				newCompletedInDays.push(today);

				setHabitList(prevList => // Updating the array of habits, changing completedInDays property
					prevList.map(h =>
					h.id === habit.id
						? { ...h, completedInDays: newCompletedInDays, times: h.times+1 }
						: h
					)
				);

			}
			else {
				newCompletedInDays.splice(newCompletedInDays.indexOf(today), 1);
				
				setHabitList(prevList => // Updating the array of habits, changing completedInDays property
					prevList.map(h =>
					h.id === habit.id
						? { ...h, completedInDays: newCompletedInDays, times: h.times-1 }
						: h
					)
				);
			}
			
		}
	}



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
					<div
						className={`text-white p-[5px] rounded-md  transition-all ${habit.activeDays.includes(getdayName()) ? "opacity-100 hover:opacity-75 cursor-pointer" : "grayscale-100"}`}
						style={{backgroundImage: `linear-gradient(to right, ${habit.colorOne}, ${habit.colorTwo})`}}
						onClick={habit.activeDays.includes(getdayName()) ?  () => handleCompleteHabitToday(habit) : null}
					>
						<Check />
					</div>
				</div>
			</div>
			
			<div className="flex flex-col justify-center items-center gap-3">
				<div className="flex justify-between items-center w-full">
					<p className="text-gray-300 font-poppins text-sm font-[300]">Progress</p>
					<p className="text-gray-300 font-poppins text-sm font-[300]">
						{`
							${habit.times} / ${habit.goal && habit.goal > 0 ? habit.goal : "∞"}
						`}
					</p>
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
									className={`rounded-[8px] w-8 h-8 text-xs font-[300] text-white font-poppins flex justify-center items-center select-none
										${habit.activeDays.includes(day) ? "opacity-100" : "opacity-0"} ${habit.completedInDays.includes(day) ? "grayscale-0" : "grayscale-100"}`}
									style={{backgroundImage: `linear-gradient(to right, ${habit.colorOne}, ${habit.colorTwo})`}}
								>
									{day}
								</div>
							))
						}
					</div>
				</div>

				<div className={"group bg-gray-700 flex gap-2 rounded-xl px-2 py-1.5 color items-center cursor-pointer"}>
					<Flame className="group-hover:scale-120 transition-all" style={{color: getSreakColorForAHabit(0)}}/>
					<p className="text-gray-200 font-poppins font-[400] text-sm group-hover:text-white group-hover:font-[500] transition-all">{habit.streak}</p>
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