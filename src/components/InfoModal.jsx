import { useRef } from "react";


const InfoModal = ({ infoModalOpen, setInfoModalOpen }) => {
		const modalBGRef = useRef(null);


	return (
		<div
			ref={modalBGRef}
			className={`absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#1d293d85] rounded-2xl flex justify-center items-center transition-all ease-out duration-200
				${infoModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
			onClick={(e) => {
				e.target === modalBGRef.current ? setInfoModalOpen(false) : null;
			}}>
			<div
				className={`w-4xl max-h-160 bg-slate-800 rounded-xl px-8 py-6 transition-all ease-out duration-200 scroll-smooth ${
					infoModalOpen ? "scale-100" : "scale-40"
				} flex flex-col justify-start items-center gap-10 overflow-auto`}>

				{/* table of content */}

				<section className="w-full flex flex-col items-start justify-center gap-1">
					<p className="text-white font-poppins text-xl pb-5">Table Of Content:</p>
					<a href="#notes" className="text-white font-poppins pl-6 transition-all hover:text-gray-400">Some Notes About Habits</a>
					<a href="#why" className="text-white font-poppins pl-6 transition-all hover:text-gray-400">Why I Made It?</a>
					<a href="#so-good" className="text-white font-poppins pl-6 transition-all hover:text-gray-400">Why It's So Good?</a>
					<a href="#usage" className="text-white font-poppins pl-6 transition-all hover:text-gray-400">How To Use It?</a>
					<a href="#privacy" className="text-white font-poppins pl-6 transition-all hover:text-gray-400">Privacy</a>
					<a href="#contact" className="text-white font-poppins pl-6 transition-all hover:text-gray-400">Contact And Feedback</a>
				</section>				


				{/* some notes about habits */}
				<section id="notes" className="w-full flex-col items-start justify-center gap-2">
					<p className="text-white font-poppins text-xl pb-5">Some Notes About Habits</p>
					<p className="text-white font-poppins pl-6 pb-4">
						Habits are powerful tools for shaping behavior over time. They're essentially automatic actions that the brain
						learns to run on autopilot, saving effort, attention, and energy. Once a habit is formed, it requires less
						willpower to sustain, which is why habits are at the core of long-term change.
					</p>
					<p className="text-white font-poppins pl-6 pb-4">
						According to a 2009 study from University College London, it takes an average of 66 days for a new habit to
						become automatic. However, this number isn't fixed — depending on the complexity of the habit and the
						individual, it can range anywhere from 18 to 254 days. (Source)
					</p>
					<p className="text-white font-poppins pl-6 pb-4">
						What's more important than perfection is consistency. Missing a day doesn't erase progress, but regular
						repetition, especially in a consistent context — strengthens the behavior. That's why tracking your habits
						visually can be so effective: it creates awareness and helps reinforce patterns over time.
					</p>
					<p className="text-white font-poppins pl-6 pb-4">
						Habits aren't just about discipline, they're about designing systems that make the right actions easier and more frequent.
					</p>

					<p className="text-white font-poppins pl-6 py-6">
						Sources:
						<a
							className="text-violet-500 hover:text-violet-700 transition-all block py-2"
							href="https://onlinelibrary.wiley.com/doi/10.1002/ejsp.674"
						>
							Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J. (2009). How are habits formed: Modelling habit formation in the real world
						</a>
						<a
							className="text-violet-500 hover:text-violet-700 transition-all block py-2"
							href="https://www.amazon.co.uk/Power-Habit-Why-What-Change/dp/1847946240"
						>
							Duhigg, C. (2012). The Power of Habit: Why We Do What We Do, and How to Change
						</a>
						<a
							className="text-violet-500 hover:text-violet-700 transition-all block py-2"
							href="https://jamesclear.com/atomic-habits"
						>
							Clear, J. (2018). Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones
						</a>


					</p>

				</section>


				{/* why I made it */}
				<section id="why" className="w-full flex-col items-start justify-center gap-2">
					<p className="text-white font-poppins text-xl pb-5 font-[600]">Why I Made It?</p>
					<p className="text-white font-poppins pl-6 pb-4">
						Every habit tracker I've used simply sucked. And belive me I've tried a lot of them. It's like they were designed by people who don't actually use them.
						Too many useless features nobody asked for, cluttering the app and making it impossible to focus.
						Half of them lock you behind paywalls or bombard you with annoying ads every two seconds.
						Some are only limited to one platform which is annoying.
					</p>
					<p className="text-white font-poppins pl-6 pb-4">
						So I built this. Simple, no extra features, free, no ads, web-based and open-source. Just what a habit tracker should be.
					</p>
				</section>

				{/* why its so good */}
				<section id="so-good" className="w-full flex-col items-start justify-center gap-2">
					<p className="text-white font-poppins text-xl pb-5 font-[600]">Why Its So Good?</p>
					<p className="text-white font-poppins pl-6 pb-4">
						This <a className="text-violet-500 hover:text-violet-700 transition-all" href="https://youtu.be/P6FORpg0KVo?si=akFxZggJpqhOKkcF">TED Talk</a> inspired me to build this.
						In this TED Talk Luis von Ahn discussed the power of streaks and how they can make learning addictive.
						I decided to place a strong emphasis on streaks, each habit has a streak counter that resets if you miss a day. 
						There's also a "longest streak" stat that's always visible, right in your face.
					</p>
				</section>

				{/* how to use it */}
				<section id="usage" className="w-full flex-col items-start justify-center gap-2">
					<p className="text-white font-poppins text-xl pb-5 font-[600]">How To Use It?</p>
					<p className="text-white font-poppins pl-6 pb-4">

					</p>
					<p className="text-white font-poppins pl-6 pb-4">

					</p>
				</section>

				{/* privacy note */}
				<section id="privacy" className="w-full flex-col items-start justify-center gap-2">
					<p className="text-white font-poppins text-xl pb-5 font-[600]">Privacy</p>
					<p className="text-white font-poppins pl-6 pb-4">
						All of your habits will be saved in your browser. None of your habit data will be sent to any server.
						This does mean, however, that syncing between devices is not currently possible. I may add that feature in the future, by allowing to create an account.
					</p>
					<p className="text-white font-poppins pl-6 pb-4">
						You can also export/import your data whenever you want.
					</p>
				</section>

				{/* contact and feedback */}
				<section id="contact" className="w-full flex-col items-start justify-center gap-2">
					<p className="text-white font-poppins text-xl pb-5 font-[600]">Contact and Feedback</p>
					<p className="text-white font-poppins pl-6 pb-4">
						The project is open source, You can access the source code <a className="text-violet-500 hover:text-violet-700 transition-all" href="https://github.com/karo-yousefi/the-best-habit-tracker">here</a>.
						Feel free to fork it or imporve this. 
					</p>
					<p className="text-white font-poppins pl-6 pb-4">
						Have feedback or suggestions? Feel free to reach out to me at: <span className="text-violet-500">karoyousefi.80@gmail.com</span>
					</p>
				</section>





			</div>
		</div>

	)
}

export default InfoModal