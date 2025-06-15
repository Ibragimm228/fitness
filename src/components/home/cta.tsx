export function CallToActionSection() {
	return (
		<section className='relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden'>
			{/* Dynamic floating particles */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-20 left-1/4 w-2 h-48 bg-gradient-to-b from-cyan-500 to-transparent transform rotate-12 opacity-40 animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-32 h-2 bg-gradient-to-r from-purple-500 to-transparent transform -rotate-45 opacity-30'></div>
				<div className='absolute bottom-1/4 left-1/3 w-1 h-64 bg-gradient-to-t from-emerald-500 to-transparent transform rotate-45 opacity-50'></div>
				<div className='absolute top-1/2 left-1/2 w-40 h-40 border-2 border-violet-400 transform rotate-45 opacity-10 animate-spin-slow'></div>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32'>
				
				{/* Revolutionary split layout */}
				<div className='flex flex-col lg:flex-row items-center gap-16'>
					
					{/* Left side - Dynamic text content */}
					<div className='lg:w-3/5 order-2 lg:order-1'>
						<div className='relative'>
							
							{/* Geometric background accent */}
							<div className='absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-violet-500/20 to-pink-500/20 transform rotate-45 opacity-60'></div>
							
							<div className='space-y-8'>
								{/* Main heading with split effect */}
								<div className='relative'>
									<h2 className='text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight'>
										<span className='block transform hover:translate-x-2 transition-transform duration-500'>
											READY TO
										</span>
										<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 transform hover:-translate-x-2 transition-transform duration-500 -mt-2'>
											CONQUER?
										</span>
									</h2>
									
									{/* Dynamic cutting line */}
									<div className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent transform -translate-y-1/2 opacity-40'></div>
								</div>

								{/* Subtitle with highlight effect */}
								<div className='space-y-4'>
									<p className='text-xl lg:text-2xl text-gray-300 font-medium leading-relaxed'>
										Rise to 
										<span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 rounded-lg font-bold mx-2 transform inline-block hover:scale-105 transition-transform duration-300'>
											new heights
										</span>
										with us
									</p>
									<p className='text-lg text-gray-400'>
										Get exclusive content, scientific approaches and inspiring materials directly to your inbox.
									</p>
								</div>

								{/* Decorative elements */}
								<div className='flex items-center space-x-6'>
									<div className='w-12 h-1 bg-gradient-to-r from-violet-500 to-pink-500'></div>
									<div className='w-6 h-6 bg-emerald-500 transform rotate-45'></div>
									<div className='w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500'></div>
								</div>
							</div>
						</div>
					</div>

					{/* Right side - Action button with geometric design */}
					<div className='lg:w-2/5 order-1 lg:order-2 w-full flex justify-center lg:justify-end'>
						<div className='relative group'>
							
							{/* Background geometric shapes */}
							<div className='absolute -inset-8 opacity-20'>
								<div className='absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-700 transform rotate-45 group-hover:rotate-90 transition-transform duration-500'></div>
								<div className='absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-full group-hover:scale-150 transition-transform duration-500'></div>
							</div>

							{/* Main CTA container with clip-path */}
							<div className='relative bg-gradient-to-r from-gray-800 to-gray-900 p-8 lg:p-12 shadow-2xl transform group-hover:scale-105 transition-all duration-500'
								 style={{clipPath: 'polygon(0 0, 90% 0, 100% 20%, 90% 100%, 0 100%)'}}>
								
								{/* Inner glow effect */}
								<div className='absolute inset-0 bg-gradient-to-br from-violet-600/10 to-pink-600/10 group-hover:from-violet-600/20 group-hover:to-pink-600/20 transition-all duration-500'
									 style={{clipPath: 'polygon(0 0, 90% 0, 100% 20%, 90% 100%, 0 100%)'}}></div>
								
								<div className='relative space-y-6'>
									{/* Icon/Logo area */}
									<div className='flex justify-center'>
										<div className='w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500'
											 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
											<div className='text-2xl font-black text-white'>FA</div>
										</div>
									</div>

									{/* CTA text */}
									<div className='text-center space-y-4'>
										<h3 className='text-2xl lg:text-3xl font-bold text-white'>
											Join 
											<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 font-black'>
												FITNESS ALTITUDE
											</span>
										</h3>
										<p className='text-gray-400 text-sm lg:text-base'>
											Exclusive materials every week
										</p>
									</div>

									{/* Action button */}
									<div className='flex justify-center'>
										<a
											href='/contacts'
											className='group/btn relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 overflow-hidden'
											style={{clipPath: 'polygon(0 0, 85% 0, 100% 40%, 85% 100%, 0 100%)'}}>
											
											{/* Button background animation */}
											<div className='absolute inset-0 bg-gradient-to-r from-pink-600 to-violet-600 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500'
												 style={{clipPath: 'polygon(0 0, 85% 0, 100% 40%, 85% 100%, 0 100%)'}}></div>
											
											<span className='relative z-10 flex items-center'>
												SUBSCRIBE
												<div className='ml-3 w-6 h-6 bg-white/20 flex items-center justify-center transform group-hover/btn:translate-x-2 group-hover/btn:rotate-12 transition-all duration-300'>
													<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
														<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
													</svg>
												</div>
											</span>
										</a>
									</div>

									{/* Stats or benefits */}
									<div className='grid grid-cols-3 gap-4 pt-6 border-t border-gray-700'>
										<div className='text-center'>
											<div className='text-violet-400 font-bold text-lg'>2K+</div>
											<div className='text-gray-500 text-xs'>Readers</div>
										</div>
										<div className='text-center'>
											<div className='text-emerald-400 font-bold text-lg'>100+</div>
											<div className='text-gray-500 text-xs'>Articles</div>
										</div>
										<div className='text-center'>
											<div className='text-pink-400 font-bold text-lg'>24/7</div>
											<div className='text-gray-500 text-xs'>Support</div>
										</div>
									</div>
								</div>
							</div>

							{/* Floating accent elements */}
							<div className='absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 transform rotate-45 animate-bounce'></div>
							<div className='absolute -bottom-6 -left-6 w-6 h-6 bg-emerald-500 rounded-full animate-pulse'></div>
						</div>
					</div>
				</div>

				{/* Bottom decorative elements */}
				<div className='mt-20 flex justify-center space-x-8'>
					<div className='w-32 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent'></div>
					<div className='w-2 h-2 bg-violet-500 transform rotate-45'></div>
					<div className='w-32 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
				</div>
			</div>
		</section>
	)
}

// Добавляем стили в head если их еще нет
if (typeof document !== 'undefined' && !document.getElementById('cta-section-styles')) {
	const style = document.createElement('style')
	style.id = 'cta-section-styles'
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
	`
	document.head.appendChild(style)
}
