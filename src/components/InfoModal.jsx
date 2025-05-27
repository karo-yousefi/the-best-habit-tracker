import { useRef } from "react";


const InfoModal = ({ infoModalOpen, setInfoModalOpen }) => {
		const modalBGRef = useRef(null);


	return (
		<div
			ref={modalBGRef}
			className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#1d293d85] rounded-2xl flex justify-center items-center transition-all ease-out duration-200
				${infoModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
			onClick={(e) => {
				e.target === modalBGRef.current ? setInfoModalOpen(false) : null;
			}}>
			<div
				className={`w-4xl bg-slate-800 rounded-xl px-8 py-6 transition-all ease-out duration-200 ${
					infoModalOpen ? "scale-100" : "scale-40"
				} flex flex-col justify-start items-center gap-8`}>

				<div className="flex flex-col justify-start w-full">
					<p className="text-white font-poppins">nothing here for now</p>
				</div>
			</div>
		</div>

	)
}

export default InfoModal