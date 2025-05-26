import { useState } from "react";
import { Check, Flame } from "lucide-react";
import { daysOfWeek } from "../../data/data";

const HabitComponent = ({ id, title, streak, icon, fromColor, toColor }) => {

	const [habitsCompletedToday, setHabitsCompletedToday] = useState([]);
	const [firstDayOfWeek, setFirstDayOfWeek] = useState("sat"); // Sat Sun Mon

	const getSreakColorForAHabit = (id) => {
		return "#3B82F6";
	};

	const handleHabitComplete = (id) => {
		return null;
	};

	const getPercentage = (id) => {
		return 30;
	}

	const changeFirstDayOfWeek = () => {
		return null;
	}


	return (
		<div className="bg-slate-900 border-[2px] py-6 px-6 border-slate-800 rounded-xl hover:border-slate-700 transition-all flex flex-col justify-start gap-8">
			<div className="flex justify-between items-center">
				<div className="flex justify-center items-center gap-3">
					<div className={`bg-gradient-to-bl ${fromColor} ${toColor} text-white p-[5px] rounded-md`}>
						{icon}
					</div>
					<div>
						<p className="font-poppins font-[500] text-xl text-white select-none">{title}</p>
					</div>
				</div>

				<div>
					<div className={`bg-gradient-to-bl ${fromColor} ${toColor} text-white p-[5px] rounded-md cursor-pointer hover:opacity-75 transition-all`}><Check /></div>
				</div>
			</div>
			
			<div className="flex flex-col justify-center items-center gap-3">
				<div className="flex justify-between items-center w-full">
					<p className="text-gray-300 font-poppins text-sm font-[300]">Progress</p>
					<p className="text-gray-300 font-poppins text-sm font-[300]">7/30</p>
				</div>
				<div className="relative w-full h-2">
					<div className="absolute w-full bg-slate-700 rounded-xl h-full"></div>
					<div className={`absolute w-[${getPercentage(id)}%] h-full bg-gradient-to-l ${toColor} ${fromColor} rounded-xl transition-all`}></div>
				</div>
			</div>

			<div className="flex flex-col-reverse gap-3 justify-between items-center w-full md:flex-row">
				<div className="flex flex-col justify-start items-start gap-2">
					<p className="text-gray-300 font-poppins text-sm font-[300]">This Week</p>
					<div className="flex gap-1">
						{
							daysOfWeek[firstDayOfWeek].map(day => (
								<div key={day} className={`bg-gradient-to-bl ${fromColor} ${toColor} rounded-[8px] w-8 h-8 text-xs font-[300] text-white font-poppins flex justify-center items-center select-none`}>{day}</div>
							))
						}
					</div>
				</div>

				<div className={`group bg-gray-700 flex gap-2 rounded-xl px-2 py-1.5 color items-center text-[${getSreakColorForAHabit()}] cursor-pointer`}>
					<Flame className="group-hover:scale-120 transition-all"/>
					<p className="text-gray-200 font-poppins font-[400] text-sm group-hover:text-white group-hover:font-[500] transition-all">9</p>
				</div>
			</div>
			
			
		</div>
	)
}

export default HabitComponent