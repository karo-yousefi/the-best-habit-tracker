import StatsBox from "./StatsBox";
import { statsInfo } from "../data/data";


const StatsSection = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-9">
			{
				statsInfo.map(stat => (
					<StatsBox key={stat.id} fromColor={stat.fromColor} toColor={stat.toColor} icon={stat.icon} title={stat.title} value={"1"} />
				))
			}
		</div>
	)
}

export default StatsSection