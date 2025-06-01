import { useEffect, useRef, useState } from "react";
import { Upload, Download } from "lucide-react";
import { daysOfWeek } from "../data/data";
import { themes } from "../data/data";
import { Check } from "lucide-react";


// helper functions
const getDate = () => {
	const date = new Date();
	return date.toISOString().split("T")[0];
}

// habit validation helper
const isValidHabit = (habit) => {
	const requiredKeys = [
		"id", "name", "goal", "times", "colorOne", "colorTwo", "icon", "streak", "week"
	];

	// Basic key check
	for (let key of requiredKeys) {
		if (!(key in habit)) return false;
	}

	// Check types
	if (typeof habit.id !== "number") return false;
	if (typeof habit.name !== "string") return false;
	if (typeof habit.goal !== "number") return false;
	if (typeof habit.times !== "number") return false;
	if (typeof habit.colorOne !== "string") return false;
	if (typeof habit.colorTwo !== "string") return false;
	if (habit.icon !== null && typeof habit.icon !== "string") return false;
	if (typeof habit.streak !== "number") return false;

	// Validate 'week'
	if (!Array.isArray(habit.week) || habit.week.length !== 7) return false;
	for (let day of habit.week) {
		if (
			typeof day.day !== "string" ||
			typeof day.isActive !== "boolean" ||
			typeof day.hasCompleted !== "boolean"
		) {
			return false;
		}
	}

	return true;
};

// misc settings validation helper
const isValidMiscSettings = (data) => {
if (typeof data !== "object" || data === null || Array.isArray(data)) {
	return false;
}

const allowedThemes = ["dark", "light"];
const allowedDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

if ("theme" in data && !allowedThemes.includes(data.theme)) {
	return false;
}

if ("firstDayOfWeek" in data && !allowedDays.includes(data.firstDayOfWeek)) {
	return false;
}

return true;
};


// export functions
const exportHabitData = () => {
	const habitsData = localStorage.getItem("habits");

	if (habitsData) {
		const habitBlob = new Blob([habitsData], { type: "application/json" });

		const habitDownload = document.createElement("a");
		habitDownload.href = URL.createObjectURL(habitBlob);
		habitDownload.download = `${getDate()}_habits.json`;

		habitDownload.click();
	};
};

const exportMiscData = () => {
	const miscData = localStorage.getItem("miscInfo");

	if (miscData) {
		const miscBlob = new Blob([miscData], { type: "application/json" });

		const miscDownload = document.createElement("a");
		miscDownload.href = URL.createObjectURL(miscBlob);
		miscDownload.download = `${getDate()}_misc.json`;

		miscDownload.click();
	};
};


// import functions
const handleHabitsImportDate = (e) => {
	const file = e.target.files[0];

	if (!file) {
		return;
	}

	const reader = new FileReader();
		reader.onload = (event) => {
		try {
			const data = JSON.parse(event.target.result);

			if (!Array.isArray(data) || !data.every(isValidHabit)) { // Validate the structure
				throw new Error("Invalid habit data format");
			}

			localStorage.setItem("habits", JSON.stringify(data));
			alert("Habits data imported!");

		} catch (error) {
			console.error("Invalid JSON file", error);
			alert("Failed to import data.");
		}
	};
	reader.readAsText(file);
}

const handleMiscImportDate = (e) => {
	const file = e.target.files[0];

	if (!file) {
		return;
	}

	const reader = new FileReader();
	reader.onload = (e) => {
		try {
			const data = JSON.parse(e.target.result);

			if (!isValidMiscSettings(data)) {
				throw new Error("Invalid misc settings format");
			}

			localStorage.setItem("miscInfo", JSON.stringify(data));
			alert("Misc data imported!");

		} catch (error) {
			console.error("Invalid JSON file", error);
			alert("Failed to import data.");
		}
	};
	reader.readAsText(file);
}


// Main function
const SettingsModal = ({ settingsModalOpen, setSettingsModalOpen }) => {
	const modalBGRef = useRef(null);
	const habitsInputRef = useRef(null);
	const miscInputRef = useRef(null);
	const [loadedMiscInfo, setLoadedMiscInfo] = useState(null);
	const [selectedTheme, setSelectedTheme] = useState("dark");

	
	const [isExportButtonHover, setIsExportButtonHover] = useState(false);
	const [isImportButtonHover, setIsImportButtonHover] = useState(false);


	const handleChangeFirstDay = (day) => {
		const tempLoadedMiscInfo = { ...loadedMiscInfo, firstDayOfWeek: day };
		console.log(tempLoadedMiscInfo);
		setLoadedMiscInfo(tempLoadedMiscInfo);
	}

	const handleClosing = () => {
		setSettingsModalOpen(false);

		localStorage.setItem("miscInfo", JSON.stringify(loadedMiscInfo)); // Saving the settings after closing the modal
		window.location.reload(); // To update the state, not ideal of course, should be fixed in the future
	}

	useEffect(() => {
	const data =  JSON.parse(localStorage.getItem("miscInfo"));

	setLoadedMiscInfo(data);
	}, [])


	return (
		<div
			ref={modalBGRef}
			className={`absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#1d293d85] rounded-2xl flex justify-center items-center transition-all ease-out duration-200
				${settingsModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
			onClick={(e) => {
				e.target === modalBGRef.current ? handleClosing() : null;
			}}>

			{/* the main modal body */}
			<div
				className={`w-4xl max-h-160 bg-slate-800 rounded-xl px-8 py-6 transition-all ease-out duration-200 scroll-smooth ${
					settingsModalOpen ? "scale-100" : "scale-40"
				} flex flex-col justify-start items-center gap-10 overflow-auto`}
			>

				{/* import and export buttons */}
				<div className="flex flex-col gap-6">
					<button
						className="relative h-10 w-45 text-[16px] bg-gradient-to-br from-rose-700 to-pink-500 rounded-xl text-white font-poppins cursor-pointer select-none transition-all hover:translate-y-[1.6px] flex justify-center items-center gap-4"
						title="Export your data including your habits and your settings to a JSON file"
						onMouseEnter={() => setIsExportButtonHover(true)}
						onMouseLeave={() => setIsExportButtonHover(false)}
					>
						{
							isExportButtonHover ? 
								(
									<div className="flex justify-center items-center">
										<div
											className="absolute top-0 left-0 w-1/2 h-full rounded-bl-xl rounded-tl-xl bg-slate-500 font-poppins text-white flex items-center justify-center font-[300]"
											onClick={exportHabitData}
										>
											Habits
										</div>
										<div
											className="absolute top-0 right-0 w-1/2 h-full rounded-br-xl rounded-tr-xl bg-sky-500 font-poppins text-white flex items-center justify-center font-[300]"
											onClick={exportMiscData}
										>
											Misc
										</div>
									</div>
								) :
								<><Upload /> Export Data</>
						}
					</button>
					<button
						className="h-10 w-45 text-[16px] bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl text-white font-poppins cursor-pointer select-none transition-all hover:translate-y-[1.6px] flex justify-center items-center gap-4"
						onClick={null}
						title="Import your habits and your settings from a JSON file"
						onMouseEnter={() => setIsImportButtonHover(true)}
						onMouseLeave={() => setIsImportButtonHover(false)}
					>
						{
							isImportButtonHover ? 
								(
									<div className="flex justify-center items-center">
										<input
											ref={habitsInputRef}
											type="file"
											accept=".json"
											className="hidden"
											onChange={handleHabitsImportDate}
										/>
										<div
											className="absolute top-0 left-0 w-1/2 h-full rounded-bl-xl rounded-tl-xl bg-slate-500 active:bg-slate-700 transition-all font-poppins text-white flex items-center justify-center font-[300]"
											onClick={() => {habitsInputRef.current.click()}}
										>
											Habits
										</div>

										<input
											ref={miscInputRef}
											type="file"
											accept=".json"
											className="hidden"
											onChange={handleMiscImportDate}
										/>
										<div
											className="absolute top-0 right-0 w-1/2 h-full rounded-br-xl rounded-tr-xl bg-sky-500 active:bg-sky-700 transition-all font-poppins text-white flex items-center justify-center font-[300]"
											onClick={() => {miscInputRef.current.click()}}
										>
											Misc
										</div>
									</div>
								) :
								<><Download /> Import Data</>
						}
					</button>
				</div>

				{/* First day of the week setting */}
				<div>
					<p className="font-poppins text-white mb-3 select-none">First Day Of The Week:</p>
					<div className="flex gap-1">
						{
							daysOfWeek["sun"].map(day => (
								<div
									key={day}
									className="rounded-[8px] w-8 h-8 text-xs font-[300] text-white font-poppins flex justify-center items-center select-none cursor-pointer"
									style={loadedMiscInfo?.firstDayOfWeek === day ? {backgroundImage: "linear-gradient(to right, #8a26fc, #fa147f)"} : {backgroundImage: "linear-gradient(to right, #374151, #1e293b)"}}
									onClick={() => handleChangeFirstDay(day)}
								>
									{day}
								</div>
							))
						}
					</div>
				</div>

				{/* theme change */}
				<div>
					<p className="font-poppins text-white mb-3 select-none">Theme:</p>
					<div className="flex gap-3">
						{
							themes.map(theme => (
								<div
									key={theme.id}
									className={`w-8 h-8 rounded-[50%] border-2 border-rose-500 cursor-pointer flex justify-center items-center transition-all ${theme.showcaseColor} ${selectedTheme === theme.name ? "scale-120" : "scale-100"}`}
									title={theme.title}
									onClick={() => setSelectedTheme(theme.name)}
								>
									<Check size={20} className={`text-rose-500 transition-all duration-300 ${selectedTheme === theme.name ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} />
								</div>
							))
						}
					</div>
				</div>
			</div>
		</div>

	)
}

export default SettingsModal