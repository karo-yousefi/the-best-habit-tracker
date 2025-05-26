
const HeaderSection = ({ addModalOpen, setAddModalOpen }) => {
	return (
		<div className="flex justify-between items-center gap-3">
			<div className="flex flex-col justify-center items-start gap-2">
				<h1 className="text-white font-poppins text-2xl font-[500] select-none">
					Habbit Tracker
				</h1>
				<p className="text-gray-400 font-poppins text-md font-[300] select-none">
					Build better habits, one day at a time
				</p>
			</div>
			<div>
				<button
					className="h-10 w-36 bg-gradient-to-br from-violet-600 to-sky-600 rounded-xl text-white font-poppins cursor-pointer select-none transition-all hover:translate-y-[3px] hover:opacity-85"
					onClick={() => setAddModalOpen(!addModalOpen)}
				>
					<span className="pr-3">+</span>Add Habbit
				</button>
			</div>
		</div>
	);
};

export default HeaderSection;
