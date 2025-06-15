export function AboutSection() {
	return (
		<section className='relative w-full bg-white overflow-hidden'>
			{/* Dynamic floating particles */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-20 left-1/4 w-2 h-32 bg-gradient-to-b from-blue-500 to-transparent transform rotate-12 opacity-40 animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-24 h-2 bg-gradient-to-r from-purple-500 to-transparent transform -rotate-45 opacity-30'></div>
				<div className='absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-t from-emerald-500 to-transparent transform rotate-45 opacity-50'></div>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-6'>
				
				{/* Revolutionary diagonal split layout */}
				<div className='min-h-screen flex flex-col'>
					
					{/* Top diagonal section */}
					<div className='flex-1 flex items-center'>
						<div className='w-full relative'>
							
							{/* Diagonal split container */}
							<div className='relative h-96 lg:h-[500px] overflow-hidden'>
								
								{/* Left triangle - Text content */}
								<div className='absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 transform -skew-x-12 origin-top-left border-r-4 border-violet-500'
									 style={{clipPath: 'polygon(0 0, 70% 0, 45% 100%, 0 100%)'}}>
									<div className='transform skew-x-12 p-8 lg:p-16 h-full flex flex-col justify-center'>
										<div className='space-y-6'>
											<div className='flex items-center space-x-4'>
												<div className='w-4 h-4 bg-violet-500 transform rotate-45'></div>
												<span className='text-sm font-bold text-violet-600 uppercase tracking-wider'>About Project</span>
											</div>
											<h1 className='text-4xl lg:text-6xl font-black text-gray-900 leading-tight'>
												FITNESS
												<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600'>
													ALTITUDE
												</span>
											</h1>
											<p className='text-lg text-gray-700 font-medium leading-relaxed max-w-md'>
												Taking fitness content to the next level. Scientific approaches, 
												<span className='text-violet-600 font-bold'> proven methods</span> 
												and inspiring success stories.
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
											
											<div className='absolute inset-0 bg-gradient-to-br from-violet-600/20 to-pink-600/20'></div>
										</div>
										
										{/* Floating accent elements */}
										<div className='absolute top-4 right-4 w-8 h-8 bg-yellow-400 transform rotate-45 animate-bounce'></div>
										<div className='absolute bottom-8 left-8 w-6 h-6 bg-emerald-500 rounded-full animate-pulse'></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom section - Hexagonal grid */}
					<div className='py-20'>
						<div className='flex flex-col lg:flex-row gap-16 items-center'>
							
							{/* Left - Hexagonal stats */}
							<div className='lg:w-1/2 order-2 lg:order-1'>
								<div className='relative'>
									{/* Main hexagon */}
									<div className='w-64 h-64 mx-auto relative'>
										<div className='absolute inset-0 bg-gradient-to-br from-violet-100 to-pink-100 transform rotate-30'
											 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
										</div>
										
										{/* Center content */}
										<div className='absolute inset-0 flex flex-col items-center justify-center'>
											<div className='text-5xl font-black text-violet-600'>∞</div>
											<div className='text-sm text-gray-600 font-bold uppercase tracking-wide'>Heights</div>
										</div>

										{/* Satellite hexagons */}
										<div className='absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold shadow-lg'
											 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
											2K+
										</div>
										
										<div className='absolute top-1/2 -right-8 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white font-bold shadow-lg'
											 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
											100+
										</div>
										
										<div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center text-white font-bold shadow-lg'
											 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
											24/7
										</div>
										
										<div className='absolute top-1/2 -left-8 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg'
											 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
											PRO
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
												Revolution in the world of 
												<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 font-black'>
													sports content
												</span>
											</h2>
											<div className='w-20 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mb-6'></div>
										</div>

										<div className='space-y-4'>
											<p className='text-lg text-gray-700 font-medium leading-relaxed'>
												We create unique content that takes your workouts to 
												<span className='bg-yellow-200 px-2 py-1 rounded-lg font-bold text-gray-900 mx-1'>
													new heights
												</span>
											</p>
											<p className='text-gray-600'>
												Every article is a step towards the peak of your athletic achievements. 
												Join a community that strives for excellence.
											</p>
										</div>

										<div className='pt-6'>
											<a
												href='/about'
												className='group inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'
												style={{clipPath: 'polygon(0 0, 90% 0, 100% 30%, 90% 100%, 0 100%)'}}>
												<span>Conquering peaks</span>
												<div className='ml-4 w-6 h-6 bg-white/20 flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-300'>
													<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
														<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
													</svg>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
