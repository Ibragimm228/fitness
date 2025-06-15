import { Container } from '@/components/shared/container'
import { useState } from 'react'

export function Hero() {
	const [loaded, setLoaded] = useState(false)

	return (
		<section className='relative min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden'>
			{/* Dynamic floating particles */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-20 left-1/4 w-2 h-48 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-40 animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-32 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-30'></div>
				<div className='absolute bottom-1/4 left-1/3 w-1 h-64 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-50'></div>
				<div className='absolute top-1/2 right-1/6 w-40 h-40 border-2 border-cyan-400 transform rotate-45 opacity-20 animate-spin-slow'></div>
			</div>

			{/* Background image with advanced overlay */}
			<div className='absolute inset-0'>
				<div
					className={`absolute inset-0 bg-gray-900 transition-opacity duration-500 ${
						loaded ? 'opacity-0' : 'opacity-100'
					}`}
					style={{ zIndex: 1 }}
				/>
				<img
					src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/12/Male_Running_Mountains_1296x728-header-1296x729.jpg?w=1155&h=2268'
					alt='Fitness Altitude - Conquer new heights in fitness'
					decoding='async'
					loading='eager'
					fetchPriority='high'
					className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-[10s]'
					srcSet='https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/12/Male_Running_Mountains_1296x728-header-1296x729.jpg?w=1155&h=2268 1000w, https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/12/Male_Running_Mountains_1296x728-header-1296x729.jpg?w=1155&h=2268 2000w'
					sizes='100vw'
					onLoad={() => setLoaded(true)}
					style={{ zIndex: 2, position: 'relative' }}
				/>
				{/* Multi-layered gradient overlay */}
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900/80 via-indigo-900/70 to-purple-900/80' style={{ zIndex: 3 }}></div>
				<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' style={{ zIndex: 4 }}></div>
			</div>

			{/* Hero content */}
			<Container className='relative z-10 min-h-screen flex items-center py-20 lg:py-32'>
				<div className='w-full'>
					{/* Revolutionary split layout */}
					<div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
						
						{/* Left side - Main content */}
						<div className='lg:w-3/5 order-2 lg:order-1'>
							<div className='relative'>
								
								{/* Geometric background accents */}
								<div className='absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-br from-violet-500/20 to-pink-500/20 transform rotate-45 opacity-80'></div>
								<div className='absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full opacity-60'></div>
								
								<div className='space-y-8'>
									{/* Brand indicator */}
									<div className='flex items-center space-x-4'>
										<div className='w-4 h-4 bg-violet-500 transform rotate-45'></div>
										<span className='text-sm font-bold text-violet-400 uppercase tracking-wider'>FITNESS REVOLUTION</span>
									</div>

									{/* Main headline with split effect */}
									<div className='relative overflow-hidden'>
										<h1 className='text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight'>
											<span className='block transform hover:translate-x-2 transition-transform duration-500'>
												CONQUER
											</span>
											<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 transform hover:-translate-x-2 transition-transform duration-500 -mt-2'>
												HEIGHTS
											</span>
											<span className='block text-2xl sm:text-3xl lg:text-4xl text-emerald-400 font-bold mt-2 transform hover:translate-x-1 transition-transform duration-500'>
												FITNESS ALTITUDE
											</span>
										</h1>
										
										{/* Dynamic cutting line */}
										<div className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent transform -translate-y-1/2 opacity-40'></div>
									</div>

									{/* Subtitle with highlight effects */}
									<div className='space-y-4 max-w-2xl'>
										<p className='text-xl lg:text-2xl text-gray-300 font-medium leading-relaxed'>
											Taking fitness to the 
											<span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 rounded-lg font-bold mx-2 transform inline-block hover:scale-105 transition-transform duration-300'>
												next level
											</span>
										</p>
										<p className='text-lg text-gray-400'>
											Scientific approaches, proven methods and inspiring success stories. 
											Join a community that strives for excellence.
										</p>
									</div>

									{/* Action buttons with geometric design */}
									<div className='flex flex-col sm:flex-row gap-6 pt-4'>
										<a
											href='/blog'
											className='group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden'
											style={{clipPath: 'polygon(0 0, 90% 0, 100% 30%, 90% 100%, 0 100%)'}}>
											
											{/* Button background animation */}
											<div className='absolute inset-0 bg-gradient-to-r from-pink-600 to-violet-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500'
												 style={{clipPath: 'polygon(0 0, 90% 0, 100% 30%, 90% 100%, 0 100%)'}}></div>
											
											<span className='relative z-10 flex items-center'>
												EXPLORE ARTICLES
												<div className='ml-3 w-6 h-6 bg-white/20 flex items-center justify-center transform group-hover:translate-x-2 group-hover:rotate-12 transition-all duration-300'>
													<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
														<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
													</svg>
												</div>
											</span>
										</a>

										<a
											href='/about'
											className='group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 hover:border-emerald-400 text-white hover:text-emerald-400 font-bold text-lg backdrop-blur-sm hover:backdrop-blur-md shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300'
											style={{clipPath: 'polygon(0 0, 85% 0, 100% 40%, 85% 100%, 0 100%)'}}>
											
											<span className='flex items-center'>
												ABOUT PROJECT
												<div className='ml-3 w-6 h-6 border border-current flex items-center justify-center transform group-hover:translate-x-2 group-hover:rotate-12 transition-all duration-300'>
													<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
														<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
													</svg>
												</div>
											</span>
										</a>
									</div>

									{/* Decorative elements */}
									<div className='flex items-center space-x-6 pt-6'>
										<div className='w-12 h-1 bg-gradient-to-r from-violet-500 to-pink-500'></div>
										<div className='w-6 h-6 bg-emerald-500 transform rotate-45'></div>
										<div className='w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500'></div>
									</div>
								</div>
							</div>
						</div>

						{/* Right side - Visual element */}
						<div className='lg:w-2/5 order-1 lg:order-2 w-full flex justify-center'>
							<div className='relative group max-w-md w-full'>
								
								{/* Background geometric shapes */}
								<div className='absolute -inset-8 opacity-30'>
									<div className='absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-700 transform rotate-45 group-hover:rotate-90 transition-transform duration-1000'></div>
									<div className='absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-full group-hover:scale-150 transition-transform duration-1000'></div>
									<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-pink-400 transform rotate-45 group-hover:rotate-180 transition-transform duration-1000'></div>
								</div>

								{/* Main visual container with hexagonal design */}
								<div className='relative w-72 h-72 mx-auto'>
									<div className='absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-lg shadow-2xl transform group-hover:scale-110 transition-all duration-700'
										 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
									</div>
									
									{/* Center logo/brand */}
									<div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
										<div className='w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg mb-4 transform group-hover:rotate-12 transition-transform duration-500'
											 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
											<div className='text-2xl font-black text-white'>FA</div>
										</div>
										<div className='text-white font-black text-xl mb-2'>FITNESS</div>
										<div className='text-violet-400 font-bold text-lg'>ALTITUDE</div>
										<div className='w-12 h-0.5 bg-gradient-to-r from-violet-400 to-pink-400 mt-2'></div>
									</div>

									{/* Satellite elements */}
									<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-125 transition-transform duration-500'
										 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
										∞
									</div>
									
									<div className='absolute top-1/2 -right-4 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-125 transition-transform duration-500'
										 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
										PRO
									</div>
									
									<div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-125 transition-transform duration-500'
										 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
										24/7
									</div>
									
									<div className='absolute top-1/2 -left-4 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-125 transition-transform duration-500'
										 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
										TOP
									</div>
								</div>

								{/* Floating accent elements */}
								<div className='absolute -top-6 -right-6 w-8 h-8 bg-yellow-400 transform rotate-45 animate-bounce'></div>
								<div className='absolute -bottom-8 -left-8 w-6 h-6 bg-emerald-500 rounded-full animate-pulse'></div>
							</div>
						</div>
					</div>

					{/* Bottom stats or features */}
					<div className='mt-20 pt-12 border-t border-white/10'>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
							<div className='group'>
								<div className='text-3xl lg:text-4xl font-black text-violet-400 group-hover:scale-110 transition-transform duration-300'>2K+</div>
								<div className='text-gray-400 text-sm lg:text-base font-medium'>Active Readers</div>
							</div>
							<div className='group'>
								<div className='text-3xl lg:text-4xl font-black text-emerald-400 group-hover:scale-110 transition-transform duration-300'>100+</div>
								<div className='text-gray-400 text-sm lg:text-base font-medium'>Expert Articles</div>
							</div>
							<div className='group'>
								<div className='text-3xl lg:text-4xl font-black text-pink-400 group-hover:scale-110 transition-transform duration-300'>24/7</div>
								<div className='text-gray-400 text-sm lg:text-base font-medium'>Content Access</div>
							</div>
							<div className='group'>
								<div className='text-3xl lg:text-4xl font-black text-cyan-400 group-hover:scale-110 transition-transform duration-300'>PRO</div>
								<div className='text-gray-400 text-sm lg:text-base font-medium'>Quality Level</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			
		</section>
	)
}

// Добавляем стили в head если их еще нет
if (typeof document !== 'undefined' && !document.getElementById('hero-section-styles')) {
	const style = document.createElement('style')
	style.id = 'hero-section-styles'
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

		/* Ensure proper clipping on mobile */
		@media (max-width: 640px) {
			[style*="clip-path"] {
				clip-path: none !important;
			}
		}

		/* Performance optimizations */
		@media (prefers-reduced-motion: reduce) {
			.animate-spin-slow,
			.animate-bounce,
			.animate-pulse {
				animation: none;
			}
			
			.transition-transform,
			.transition-all {
				transition: none;
			}
		}
	`
	document.head.appendChild(style)
}
