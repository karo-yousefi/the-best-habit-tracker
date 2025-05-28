const StatsBox = ({ colorOne, colorTwo, icon, title, value }) => {
	return (
		<div className="group relative bg-slate-900 rounded-xl py-6 px-4 flex flex-col justify-center items-start gap-2 border-[2px] border-slate-800">
			<div className="flex justify-center items-center gap-3">
				<div className="bg-gradient-to-bl ${fromColor} ${toColor} text-white p-[5px] rounded-md" style={{backgroundImage: `linear-gradient(to right, ${colorOne}, ${colorTwo})`}}>
					{icon}
				</div>
				<div>
					<p className="font-poppins font-[600] text-3xl text-white select-none">{value}</p>
					<p className="font-poppins font-[300] text-sm text-gray-300 select-none">{title}</p>
				</div>
			</div>
		</div>
	);
};

export default StatsBox;
