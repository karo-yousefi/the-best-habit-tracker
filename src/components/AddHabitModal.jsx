import { useEffect, useRef, useState, useContext } from "react";
import { availableIcons } from "../data/data";
import { HabitContext } from "../context/HabitContext.jsx";
import { MiscContext } from "../context/MiscContext.jsx";
import { daysOfWeek } from "../data/data.jsx";


const AddHabitModal = ({ addModalOpen, setAddModalOpen, saveToLocalStorage, loadFromLocalStorage }) => {
	const { habitList, setHabitList } = useContext(HabitContext);
	const { miscInfo , setMiscInfo } = useContext(MiscContext);


	const modalBGRef = useRef(null);

	const [habitName, setHabitName] = useState("");
	const [habitGoal, setHabitGoal] = useState(0);
	const [newHabitActiveDays, setNewHabitActiveDays] = useState([...daysOfWeek[miscInfo.firstDayOfWeek]]);
	const [howManyTimes, setHowManyTimes] = useState(0);
	const [colorOne, setColorOne] = useState("#8a26fc");
	const [colorTwo, setColorTwo] = useState("#fa147f");
	const [selectedIcon, setSelectedIcon] = useState(null);
	const [newHabitId, setNewHabitId] = useState(0);


	const [weekState, setWeekState] = useState(daysOfWeek[miscInfo.firstDayOfWeek].map(day => ({
		day,
		isActive: true,
		hasCompleted: false,
	})));

	const resetInputs = () => {
		setHabitName("");
		setHabitGoal(0)
		setColorOne("#8a26fc");
		setColorTwo("#fa147f");
		setSelectedIcon(null);
	}

	const handleCloseModal = () => {
		setAddModalOpen(false);
		resetInputs();
	}

	const handleAddHabit = () => {
		setAddModalOpen(false);

		// undefined checking!!
		const newHabitData = {
			id: newHabitId,
			name: habitName,
			// activeDays: newHabitActiveDays, // x what days in the week the the habit has to be done
			// completedInDays: [], // x what days the habit is completed in
			goal: habitGoal,
			times: howManyTimes, // the amount of time the habit has been done
			colorOne: colorOne, 
			colorTwo: colorTwo,
			icon: selectedIcon,
			streak: 0,

			week: weekState,
		}

		let newHabitList = [];
		if (habitList) {
			newHabitList = [...habitList];
		}
		newHabitList.push(newHabitData);

		setHabitList(newHabitList);
		saveToLocalStorage("habits", newHabitList);
		
		resetInputs();

		setNewHabitId(newHabitId + 1);
	}

	const handleDayClick = (day) => {
		setWeekState(prev => 
				prev.map(d => 
					d.day === day ?
						{ ...d, isActive: !d.isActive } :
						d
				)
			)
	}


	const checkIsActive = (day) => {
		const dayObj = weekState.find(d => d.day === day);
		return dayObj.isActive;
	};

	const checkHasCompleted = (day) => {
		const dayObj = weekState.find(d => d.day === day);
		return dayObj.hasCompleted;
	}

	useEffect(() => {
		if (habitList && habitList.length > 0) {
			setNewHabitId(habitList.at(-1).id + 1);
		}
	}, [])



	return (
		// shadow below the modal
		<div
			ref={modalBGRef}
			className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#1d293d85] rounded-2xl flex justify-center items-center transition-all ease-out duration-200
				${addModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
			onClick={(e) => {
				e.target === modalBGRef.current ? handleCloseModal() : null;
			}}
		>

			{/* main modal container */}
			<div
				className={`w-4xl bg-slate-800 rounded-xl px-8 py-6 transition-all ease-out duration-200 ${
					addModalOpen ? "scale-100" : "scale-40"
				} flex flex-col justify-start items-center gap-8`}
			>
				{/* modal header */}
				<div className="flex flex-col items-start w-full gap-3">
					<p className="font-poppins text-md md:text-xl font-[500] text-white select-none">
						Add New Habit
					</p>
					<p className="font-poppins text-sm font-[400] text-gray-400 select-none">
						Create a new habit to track your progress
					</p>
				</div>

				{/* inputs */}

				{/* name input */}
				<div className="flex flex-col items-start gap-3 w-full">
					<label className="font-poppins text-md md:text-lg font-[500] text-white select-none">
						Name
					</label>
					<input
						type="text"
						placeholder="e.g., Workout, Code, Going Out"
						className="text-white font-poppins placeholder:text-gray-400 px-1.5 py-2 w-full outline-none border-[1px] border-gray-500 rounded-md bg-gray-800 active:border-whites focus:border-white transition-all"
						onChange={(e) => setHabitName(e.target.value)}
						value={habitName}
					/>
				</div>

				{/* how often and goal input */}
				<div className="flex flex-col gap-3 w-full">
					<label className="font-poppins text-md md:text-lg font-[500] text-white select-none">
						How often?
					</label>
					<div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
						<div className="flex gap-2">
							{
								daysOfWeek[miscInfo.firstDayOfWeek].map(day => {
									return (
										<div
										key={day}
										className="rounded-[8px] w-9 h-9 text-xs font-[300] text-white font-poppins flex justify-center items-center select-none cursor-pointer capitalize transition-all"
										style={checkIsActive(day) ? {backgroundImage: `linear-gradient(to right, ${colorOne}, ${colorTwo})`} : null} // Needs animation
										onClick={() => handleDayClick(day)}
									>
										{day}
									</div>
									)
								}	
								)
							}
						</div>
						<div className="w-40 flex flex-col gap-2">
							<label className="font-poppins text-md md:text-lg font-[500] text-white select-none">
								Goal:
							</label>
							<input
							type="text"
							placeholder="30 Days"
							className="text-white font-poppins placeholder:text-gray-400 px-1.5 py-2 w-full outline-none border-[1px] border-gray-500 rounded-md bg-gray-800 active:border-whites focus:border-white transition-all"
							onChange={(e) => {
								setHabitGoal(Math.floor(e.target.value))
							}}
							value={habitGoal}
						/>
						</div>
					</div>
					
				</div>

				{/* color selection inputs */}
				<div className="flex justify-start items-center gap-5 w-full">
					<div className="flex items-center gap-5">
						<label className="font-poppins text-md md:text-lg font-[500] text-white select-none">
							From
						</label>
						<div className="w-9 h-9 rounded-[50%] overflow-hidden relative">
							<input type="color" value={colorOne} onChange={(e) => setColorOne(e.target.value)} className="w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
						</div>
					</div>

					<div className="flex items-center gap-5">
						<label className="font-poppins text-md md:text-lg font-[500] text-white select-none">
							To
						</label>
						<div className="w-9 h-9 rounded-[50%] overflow-hidden relative">
							<input type="color" value={colorTwo} onChange={(e) => setColorTwo(e.target.value)} className="w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
						</div>
					</div>

					<div className="w-16 h-8 rounded-md" style={{backgroundImage: `linear-gradient(to right, ${colorOne}, ${colorTwo})`}}></div>
				</div>

				{/* icons selection */}
				<div className="flex w-full gap-6">
					<label className="font-poppins text-md md:text-lg font-[500] text-white select-none">
						Chose An Icon
					</label>
					<div className="grid grid-cols-3 md:grid-cols-7 lg:grid-cols-10 gap-2">
						{
							availableIcons.map(icon => (
								<div
								key={icon.id}
								title={icon.label}
								className={`flex justify-center items-center p-[10px] md:p-4 rounded-md text-white cursor-pointer border-[2px] border-gray-500 transition-all  hover:bg-violet-500 hover:border-violet-400 ${selectedIcon === icon.id ? "scale-105 bg-violet-700 border-violet-500" : "translate-y-0 scale-100 bg-slate-600"}`}
								onClick={() => setSelectedIcon(icon.id)}
								>
									{icon.icon}
								</div>
							))
						}
					</div>
				</div>
				<div className="w-full">
					<p className={`font-poppins text-white select-none font-[300] transition-all duration-300 ${selectedIcon !== null && selectedIcon >=0  ? "opacity-100" : "opacity-0"}`}>
						selected: <span className="text-violet-500 select-none font-[500]">
							{
								selectedIcon !== null && selectedIcon >= 0 ?
									availableIcons[selectedIcon].label :
									null
							}
						</span>
					</p>
				</div>


				{/* add button */}
				<div className="w-full flex justify-end">
					<button
						className="h-10 w-36 bg-gradient-to-br from-violet-600 to-sky-600 rounded-xl text-white font-poppins cursor-pointer select-none transition-all hover:translate-y-[3px] hover:opacity-85"
						onClick={handleAddHabit}
						> Add Habit
					</button>
				</div>
				
			</div>
		</div>
	);
};

export default AddHabitModal;
