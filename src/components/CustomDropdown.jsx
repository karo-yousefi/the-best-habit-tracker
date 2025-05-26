import { useState } from "react";
import { howOftenOptions } from "../data/data";

const CustomDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState("");

	const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
    // setFrequency(value);
  };


	return (
			<div className="relative w-full">
				<div className="relative w-full">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 text-left focus:border-white active:border-white appearance-none cursor-pointer"
					>
						{selected || "Select an option"}
					</button>

					{isOpen && (
						<ul className="absolute w-full bg-gray-800 border border-gray-700 rounded-md mt-1 z-10 max-h-60 overflow-y-auto">
							{howOftenOptions.map((option, index) => (
								<li
									key={index}
									onClick={() => handleSelect(option)}
									className="px-3 py-2 text-white hover:bg-slate-700 cursor-pointer"
								>
									{option}
								</li>
							))}
						</ul>
					)}
				</div>

				{/* Custom dropdown arrow */}
				<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
					<svg
						className="w-4 h-4 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
			</div>
	);
};

export default CustomDropdown;



// custom input:
{/* 
					{frequency === "custom" && (
						<Input
							type="text"
							placeholder="e.g., Every Monday and Friday"
							value={""}
							onChange={""}
							className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 mt-2"
							required
						/>
					)} */}