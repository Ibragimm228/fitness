import { Container } from '../components/shared/container'

export function AboutPage() {
	return (
		<div className='min-h-screen bg-white'>
			{/* Dynamic floating particles */}
			<div className='fixed inset-0 pointer-events-none overflow-hidden'>
				<div className='absolute top-20 left-1/4 w-2 h-40 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-32 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-40'></div>
				<div className='absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-35'></div>
				<div className='absolute top-1/2 right-1/6 w-24 h-24 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow'></div>
			</div>

			<Container className='relative z-10 py-12 lg:py-20'>
				{/* Hero Introduction Section */}
				<section className='mb-20 lg:mb-32'>
					<div className='text-center mb-16'>
						{/* Revolutionary title design */}
						<div className='relative inline-block'>
							<div className='absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-violet-500/10 to-pink-500/10 transform rotate-45 opacity-80'></div>
							
							<h1 className='text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-none'>
								<span className='block transform hover:translate-x-3 transition-transform duration-500'>ABOUT</span>
								<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 transform hover:-translate-x-3 transition-transform duration-500 -mt-3'>
									FITNESS ALTITUDE
								</span>
							</h1>
							
							{/* Dynamic cutting line */}
							<div className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent transform -translate-y-1/2 opacity-50'></div>
							
							{/* Floating decorative elements */}
							<div className='absolute -top-6 -left-6 w-6 h-6 bg-yellow-400 transform rotate-45 animate-pulse'></div>
							<div className='absolute -bottom-8 -right-8 w-8 h-8 bg-emerald-500 rounded-full animate-bounce'></div>
						</div>
					</div>

					{/* Responsive layout - Mobile stack, Desktop diagonal */}
					<div className='lg:relative lg:h-[500px] lg:overflow-hidden mb-16'>
						{/* Mobile stacked layout */}
						<div className='lg:hidden space-y-8'>
							{/* Mobile image */}
							<div className='relative h-64 overflow-hidden rounded-2xl shadow-2xl'>
								<img
									className='w-full h-full object-cover hover:scale-110 transition-transform duration-1000'
									src='https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop'
									alt='Fitness Altitude - Elevating Fitness Knowledge'
								/>
								<div className='absolute inset-0 bg-gradient-to-br from-violet-600/30 to-pink-600/30'></div>
								
								{/* Mobile floating elements */}
								<div className='absolute top-4 right-4 w-6 h-6 bg-yellow-400 transform rotate-45 animate-bounce'></div>
								<div className='absolute bottom-4 left-4 w-4 h-4 bg-emerald-500 rounded-full animate-pulse'></div>
							</div>

							{/* Mobile text content */}
							<div className='bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl border-l-4 border-violet-500 shadow-lg'>
								<div className='space-y-6'>
									<div className='flex items-center space-x-4'>
										<div className='w-4 h-4 bg-violet-500 transform rotate-45'></div>
										<span className='text-sm font-bold text-violet-600 uppercase tracking-wider'>Our Story</span>
									</div>
									<p className='text-lg text-gray-700 font-medium leading-relaxed'>
										Welcome to Fitness Altitude, your ultimate destination for 
										<span className='text-violet-600 font-bold'> science-backed fitness content</span> 
										that elevates your training to new heights.
									</p>
									<p className='text-gray-600 leading-relaxed'>
										Founded with the mission to bridge the gap between scientific research and practical fitness application, 
										we create content that transforms your understanding of health and performance.
									</p>
								</div>
							</div>
						</div>

						{/* Desktop diagonal layout */}
						<div className='hidden lg:block relative h-full overflow-hidden'>
							{/* Left triangle - Text content */}
							<div className='absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 transform -skew-x-12 origin-top-left border-r-4 border-violet-500'
								 style={{clipPath: 'polygon(0 0, 70% 0, 45% 100%, 0 100%)'}}>
								<div className='transform skew-x-12 p-6 lg:p-16 h-full flex flex-col justify-center'>
									<div className='space-y-6'>
										<div className='flex items-center space-x-4'>
											<div className='w-4 h-4 bg-violet-500 transform rotate-45'></div>
											<span className='text-sm font-bold text-violet-600 uppercase tracking-wider'>Our Story</span>
										</div>
										<p className='text-lg lg:text-xl text-gray-700 font-medium leading-relaxed max-w-md'>
											Welcome to Fitness Altitude, your ultimate destination for 
											<span className='text-violet-600 font-bold'> science-backed fitness content</span> 
											that elevates your training to new heights.
										</p>
										<p className='text-gray-600 leading-relaxed max-w-md'>
											Founded with the mission to bridge the gap between scientific research and practical fitness application, 
											we create content that transforms your understanding of health and performance.
										</p>
									</div>
								</div>
							</div>

							{/* Right triangle - Image with diamond cut */}
							<div className='absolute inset-0 transform skew-x-12 origin-top-right'
								 style={{clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 30% 100%)'}}>
								<div className='transform -skew-x-12 h-full relative overflow-hidden'>
									{/* Diamond-shaped image container */}
									<div className='absolute inset-8 transform rotate-45 overflow-hidden shadow-2xl'
										 style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}>
										<img
											className='w-full h-full object-cover transform -rotate-45 scale-150 hover:scale-175 transition-transform duration-1000'
											src='https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop'
											alt='Fitness Altitude - Elevating Fitness Knowledge'
										/>
										<div className='absolute inset-0 bg-gradient-to-br from-violet-600/20 to-pink-600/20'></div>
									</div>
									
									{/* Floating accent elements */}
									<div className='absolute top-4 right-4 w-8 h-8 bg-yellow-400 transform rotate-45 animate-bounce'></div>
									<div className='absolute bottom-8 left-8 w-6 h-6 bg-emerald-500 rounded-full animate-pulse'></div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Mission Section with Geometric Design */}
				<section className='mb-20 lg:mb-32'>
					<div className='flex flex-col lg:flex-row items-center gap-16'>
						{/* Left - Hexagonal mission statement */}
						<div className='lg:w-1/2 order-2 lg:order-1'>
							<div className='relative'>
								{/* Main hexagon */}
								<div className='w-72 h-72 mx-auto relative'>
									<div className='absolute inset-0 bg-gradient-to-br from-violet-100 to-pink-100 transform rotate-30'
										 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
									</div>
									
									{/* Center content */}
									<div className='absolute inset-0 flex flex-col items-center justify-center p-8'>
										<div className='text-4xl font-black text-violet-600 mb-4'>⚡</div>
										<div className='text-center'>
											<div className='text-lg font-bold text-gray-900 mb-2'>OUR MISSION</div>
											<div className='text-sm text-gray-600 font-medium'>Elevating Fitness Through Science</div>
										</div>
									</div>

									{/* Satellite hexagons with mission points */}
									<div className='absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold shadow-lg text-center text-xs p-2'
										 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
										EVIDENCE BASED
									</div>
									
									<div className='absolute top-1/2 -right-10 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white font-bold shadow-lg text-center text-xs p-2'
										 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
										PRACTICAL
									</div>
									
									<div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center text-white font-bold shadow-lg text-center text-xs p-2'
										 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
										INSPIRING
									</div>
									
									<div className='absolute top-1/2 -left-10 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg text-center text-xs p-2'
										 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
										ACCESSIBLE
									</div>
								</div>
							</div>
						</div>

						{/* Right - Content with zigzag border */}
						<div className='lg:w-1/2 order-1 lg:order-2'>
							<div className='relative bg-gradient-to-br from-gray-50 to-indigo-50 p-8 lg:p-12 shadow-xl border-l-8 border-violet-500'
								 style={{clipPath: 'polygon(0 0, 95% 0, 100% 10%, 90% 20%, 100% 30%, 95% 40%, 100% 50%, 90% 60%, 100% 70%, 95% 80%, 100% 90%, 95% 100%, 0 100%)'}}>
								
								<div className='space-y-8'>
									<div>
										<h2 className='text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4'>
											Revolutionizing 
											<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 font-black'>
												Fitness Education
											</span>
										</h2>
										<div className='w-20 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mb-6'></div>
									</div>

									<div className='space-y-4'>
										<p className='text-lg text-gray-700 font-medium leading-relaxed'>
											At Fitness Altitude, we believe that 
											<span className='bg-yellow-200 px-2 py-1 rounded-lg font-bold text-gray-900 mx-1'>
												knowledge is power
											</span>
											when it comes to achieving your fitness goals.
										</p>
										<p className='text-gray-600'>
											We translate complex scientific research into actionable insights, 
											helping you make informed decisions about your training, nutrition, and overall wellness journey.
										</p>
										<p className='text-gray-600'>
											Every article is crafted to empower you with the tools and understanding 
											needed to reach new heights in your fitness journey.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Team Section with Geometric Cards */}
				<section className='mb-20 lg:mb-32'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6'>
							Meet Our 
							<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600'>
								Expert Team
							</span>
						</h2>
						<div className='w-24 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto mb-6'></div>
						<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
							Our diverse team of fitness professionals, researchers, and writers brings 
							years of expertise to deliver content that transforms lives.
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
						{/* Team Member 1 */}
						<div className='group relative'>
							<div className='relative bg-gradient-to-br from-violet-50 to-purple-100 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 min-h-[400px] overflow-hidden'
								 style={{clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'}}>
								
								{/* Inner glow effect */}
								<div className='absolute inset-0 bg-gradient-to-br from-white/50 to-transparent group-hover:from-white/70 transition-all duration-500'></div>
								
								<div className='relative z-10 p-8 flex flex-col items-center text-center h-full'>
									<div className='w-24 h-24 rounded-full overflow-hidden shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300'>
										<img
											src='https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=150&h=150&auto=format&fit=crop&crop=face'
											alt='Dr. Sarah Mitchell'
											className='w-full h-full object-cover'
										/>
									</div>
									<h3 className='text-xl font-bold text-gray-900 mb-2'>Dr. Sarah Mitchell</h3>
									<p className='text-violet-600 font-semibold mb-4'>Exercise Physiologist</p>
									<p className='text-gray-600 text-sm leading-relaxed flex-1'>
										With a PhD in Exercise Science and over 15 years of research experience, 
										Sarah translates cutting-edge scientific findings into practical fitness strategies.
									</p>
								</div>

								{/* Animated background pattern */}
								<div className='absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500'>
									<div className='absolute top-4 left-4 w-6 h-6 border-2 border-violet-500 transform rotate-45 group-hover:rotate-90 transition-transform duration-500'></div>
									<div className='absolute bottom-4 right-4 w-4 h-4 bg-pink-500 rounded-full group-hover:scale-150 transition-transform duration-500'></div>
								</div>
							</div>

							{/* Floating accent */}
							<div className='absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg transform group-hover:scale-125 group-hover:rotate-180 transition-all duration-500 flex items-center justify-center'>
								<div className='w-3 h-3 bg-white rounded-full group-hover:bg-gray-900 transition-colors duration-300'></div>
							</div>

							{/* Team member number */}
							<div className='absolute -top-2 -left-2 w-8 h-8 bg-gray-900 text-white font-bold text-sm flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300'>
								01
							</div>
						</div>

						{/* Team Member 2 */}
						<div className='group relative'>
							<div className='relative bg-gradient-to-br from-emerald-50 to-cyan-100 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 min-h-[400px] overflow-hidden'
								 style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 15% 100%, 0 15%)'}}>
								
								<div className='absolute inset-0 bg-gradient-to-br from-white/50 to-transparent group-hover:from-white/70 transition-all duration-500'></div>
								
								<div className='relative z-10 p-8 flex flex-col items-center text-center h-full'>
									<div className='w-24 h-24 rounded-full overflow-hidden shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300'>
										<img
											src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop&crop=face'
											alt='Marcus Rodriguez'
											className='w-full h-full object-cover'
										/>
									</div>
									<h3 className='text-xl font-bold text-gray-900 mb-2'>Marcus Rodriguez</h3>
									<p className='text-emerald-600 font-semibold mb-4'>Certified Nutritionist</p>
									<p className='text-gray-600 text-sm leading-relaxed flex-1'>
										A sports nutrition specialist with certifications from leading fitness organizations. 
										Marcus focuses on evidence-based nutrition strategies for optimal performance.
									</p>
								</div>

								<div className='absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500'>
									<div className='absolute top-4 left-4 w-6 h-6 border-2 border-emerald-500 transform rotate-45 group-hover:rotate-90 transition-transform duration-500'></div>
									<div className='absolute bottom-4 right-4 w-4 h-4 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform duration-500'></div>
								</div>
							</div>

							<div className='absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg transform group-hover:scale-125 group-hover:rotate-180 transition-all duration-500 flex items-center justify-center'>
								<div className='w-3 h-3 bg-white rounded-full group-hover:bg-gray-900 transition-colors duration-300'></div>
							</div>

							<div className='absolute -top-2 -left-2 w-8 h-8 bg-gray-900 text-white font-bold text-sm flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300'>
								02
							</div>
						</div>

						{/* Team Member 3 */}
						<div className='group relative'>
							<div className='relative bg-gradient-to-br from-pink-50 to-rose-100 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 min-h-[400px] overflow-hidden'
								 style={{clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'}}>
								
								<div className='absolute inset-0 bg-gradient-to-br from-white/50 to-transparent group-hover:from-white/70 transition-all duration-500'></div>
								
								<div className='relative z-10 p-8 flex flex-col items-center text-center h-full'>
									<div className='w-24 h-24 rounded-full overflow-hidden shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300'>
										<img
											src='https://storage.googleapis.com/newie-production.appspot.com/avatars%2FNszaOFOSFDZlxGJMXUDJvEO5MxD3%2Fcurrent.jpg?u=1731716790107'
											alt='Elena Thompson'
											className='w-full h-full object-cover'
										/>
									</div>
									<h3 className='text-xl font-bold text-gray-900 mb-2'>Elena Thompson</h3>
									<p className='text-pink-600 font-semibold mb-4'>Wellness Coach</p>
									<p className='text-gray-600 text-sm leading-relaxed flex-1'>
										A holistic wellness expert specializing in mind-body connection and sustainable lifestyle changes. 
										Elena brings balance to the science with practical wellness wisdom.
									</p>
								</div>

								<div className='absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500'>
									<div className='absolute top-4 left-4 w-6 h-6 border-2 border-pink-500 transform rotate-45 group-hover:rotate-90 transition-transform duration-500'></div>
									<div className='absolute bottom-4 right-4 w-4 h-4 bg-rose-500 rounded-full group-hover:scale-150 transition-transform duration-500'></div>
								</div>
							</div>

							<div className='absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 shadow-lg transform group-hover:scale-125 group-hover:rotate-180 transition-all duration-500 flex items-center justify-center'>
								<div className='w-3 h-3 bg-white rounded-full group-hover:bg-gray-900 transition-colors duration-300'></div>
							</div>

							<div className='absolute -top-2 -left-2 w-8 h-8 bg-gray-900 text-white font-bold text-sm flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300'>
								03
							</div>
						</div>
					</div>
				</section>

				{/* Bottom decorative elements */}
				<div className='flex justify-center space-x-8'>
					<div className='w-32 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent'></div>
					<div className='w-2 h-2 bg-violet-500 transform rotate-45'></div>
					<div className='w-32 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
				</div>
			</Container>
		</div>
	)
}

// Add styles to head if not already present
if (typeof document !== 'undefined' && !document.getElementById('about-page-styles')) {
	const style = document.createElement('style')
	style.id = 'about-page-styles'
	style.textContent = `
		/* Custom animation for slow spin */
		@keyframes spin-slow {
			from { 
				transform: rotate(0deg); 
			}
			to { 
				transform: rotate(360deg); 
			}
		}

		.animate-spin-slow {
			animation: spin-slow 20s linear infinite;
		}

		/* Ensure proper z-index stacking */
		.relative {
			position: relative;
		}
		
		/* Improve mobile readability */
		@media (max-width: 1024px) {
			.lg\\:hidden {
				display: block !important;
			}
			.hidden.lg\\:block {
				display: none !important;
			}
		}
	`
	document.head.appendChild(style)
}