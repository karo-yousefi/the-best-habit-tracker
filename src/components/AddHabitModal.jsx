import { useRef, useState } from "react";
import CustomDropdown from "./CustomDropdown";

const AddHabitModal = ({ addModalOpen, setAddModalOpen }) => {
	const modalBGRef = useRef(null);
	const [colorOne, setColorOne] = useState("#ffffff");
	const [colorTwo, setColorTwo] = useState("#ffffff");


	return (
		// shadow below the modal
		<div
			ref={modalBGRef}
			className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#1d293d85] rounded-2xl flex justify-center items-center transition-all ease-out duration-200
				${addModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
			onClick={(e) => {
				e.target === modalBGRef.current ? setAddModalOpen(false) : null;
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
					<p className="font-poppins text-md md:text-xl font-[500] text-white">
						Add New Habit
					</p>
					<p className="font-poppins text-sm font-[400] text-gray-400">
						Create a new habit to track your progress
					</p>
				</div>

				{/* inputs */}

				{/* name input */}
				<div className="flex flex-col items-start gap-3 w-full">
					<label className="font-poppins text-md md:text-lg font-[500] text-white">
						Name
					</label>
					<input
						type="text"
						placeholder="e.g., Workout, Code, Going Out"
						className="text-white font-poppins placeholder:text-gray-400 px-1.5 py-2 w-full outline-none border-[1px] border-gray-500 rounded-md bg-gray-800 active:border-whites focus:border-white transition-all"
					/>
				</div>

				{/* how often input */}
				<div className="flex flex-col gap-3 w-full">
					<label className="font-poppins text-md md:text-lg font-[500] text-white">
						How often?
					</label>
					<CustomDropdown />
				</div>

				{/* color selection inputs */}
				<div className="flex items-start gap-10 w-full">
					<div className="flex items-center gap-5">
						<label className="font-poppins text-md md:text-lg font-[500] text-white">
							Color One
						</label>
						<div className="w-9 h-9 rounded-[50%] overflow-hidden relative">
							<input type="color" value={colorOne} onChange={(e) => setColorOne(e.target.value)} className="w-20 h-20 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer" />
						</div>
					</div>

					<div className="flex items-center gap-5">
						<label className="font-poppins text-md md:text-lg font-[500] text-white">
							Color Two
						</label>
						<div className="w-9 h-9 rounded-[50%] overflow-hidden relative">
							<input type="color" value={colorTwo} onChange={(e) => setColorTwo(e.target.value)} className="w-20 h-20 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer" />
						</div>
					</div>
				</div>

				{/* icons selection */}


				{/* add button */}
				
			</div>
		</div>
	);
};

export default AddHabitModal;
