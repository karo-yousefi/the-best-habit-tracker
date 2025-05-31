import { Info, Database} from "lucide-react";
import { useState } from "react";
import InfoModal from "./InfoModal";
import SettingsModal from "./SettingsModal";

const HeaderSection = ({ addModalOpen, setAddModalOpen }) => {

	const [infoModalOpen, setInfoModalOpen] = useState(false);
	const [settingsModalOpen, setSettingsModalOpen] = useState(false);
	const [date, setDate] = useState(null);

	const handleDate = () => {
		const todaydate = new Date().toDateString().split(" ");
		setDate(`${todaydate[1]}  ${todaydate[2]}`)
	}	
	useState(() => {
		handleDate();
	}, [])

	return (
		<div>
			<div className="flex justify-between items-center gap-3">
			<div className="flex flex-col justify-center items-start gap-2">
				<div className="block md:flex items-center gap-3">
					<h1 className="text-white font-poppins text-2xl font-[500] select-none">The Best Habbit Tracker </h1>
					<Info className="text-gray-300 cursor-pointer scale-80 md:scale-100 mt-1 transition-all hover:text-violet-500" onClick={() => setInfoModalOpen(true)} />
				</div>
				
				<p className="text-gray-400 font-poppins text-md font-[300] select-none">
					Build better habits, one day at a time
				</p>
			</div>
			<div>
				<p className="font-poppins text-xl text-white font-[500] hidden md:block">
					{
						date
					}
				</p>
			</div>
			<div className="flex flex-col items-center gap-3 md:flex-row-reverse">
				<div>
					<p className="font-poppins text-xl text-white font-[500] block  md:hidden">
						{
							date
						}
					</p>
				</div>
				<button
					className="h-10 w-25 md:w-36 text-[13px] md:text-[16px] bg-gradient-to-br from-violet-600 to-sky-600 rounded-xl text-white font-poppins cursor-pointer select-none transition-all hover:translate-y-[3px] hover:opacity-85"
					onClick={() => setAddModalOpen(!addModalOpen)}
				>
					<span className="pr-3 hidden md:inline">+</span>Add Habbit
				</button>
				<button
					className="h-10 w-27 md:w-36 text-[13px] md:text-[16px] bg-gradient-to-br from-violet-600 to-sky-600 rounded-xl text-white font-poppins cursor-pointer select-none transition-all hover:translate-y-[3px] hover:opacity-85"
					onClick={() => setSettingsModalOpen(!settingsModalOpen)}
				>
					Import / Export
				</button>
				
			</div>
		</div>

		<InfoModal infoModalOpen={infoModalOpen} setInfoModalOpen={setInfoModalOpen} />
		<SettingsModal settingsModalOpen={settingsModalOpen} setSettingsModalOpen={setSettingsModalOpen} />
	</div>
		
	);
};

export default HeaderSection;
