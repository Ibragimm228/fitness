import { useGetArticles } from '@/hooks/useArticles'

export function CategoriesSection() {
	const { data: articles, isLoading } = useGetArticles()
	const categories = [...new Set(articles?.map(article => article.type))]

	return (
		<section className='relative bg-white py-20 overflow-hidden'>
			{/* Abstract floating elements */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-10 left-1/4 w-64 h-1 bg-gradient-to-r from-cyan-500 to-transparent transform rotate-12 opacity-30'></div>
				<div className='absolute top-1/2 right-10 w-32 h-32 border-2 border-purple-300 transform rotate-45 opacity-20'></div>
				<div className='absolute bottom-20 left-10 w-2 h-40 bg-gradient-to-t from-emerald-500 to-transparent transform -rotate-12 opacity-40'></div>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-6'>
				
				{/* Fragmented title design */}
				<div className='text-center mb-20'>
					<div className='relative inline-block'>
						{/* Main title with split effect */}
						<div className='relative overflow-hidden'>
							<h2 className='text-6xl lg:text-8xl font-black text-gray-900 leading-none'>
								<span className='block transform hover:translate-x-4 transition-transform duration-500'>EXPLORE</span>
								<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 transform hover:-translate-x-4 transition-transform duration-500 -mt-4'>
									CATEGORIES
								</span>
							</h2>
							
							{/* Cutting line effect */}
							<div className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent transform -translate-y-1/2 opacity-60'></div>
						</div>

						{/* Floating decorative elements */}
						<div className='absolute -top-8 -left-8 w-6 h-6 bg-yellow-400 transform rotate-45 animate-pulse'></div>
						<div className='absolute -bottom-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full animate-bounce'></div>
					</div>

					<p className='mt-8 max-w-3xl mx-auto text-xl text-gray-600 font-medium leading-relaxed'>
						Dive into the world of fitness through the lens of specialized categories. 
						<span className='text-violet-600 font-bold'>Find your path to perfection.</span>
					</p>
				</div>

				{/* Revolutionary category layout */}
				<div className='relative'>
					{isLoading ? (
						/* Loading skeleton with geometric shapes */
						<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
							{Array.from({ length: 8 }).map((_, index) => (
								<div key={index} className='group'>
									<div className={`relative h-32 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse transform hover:scale-105 transition-all duration-300 ${
										index % 3 === 0 
											? 'clip-path-slant-left'
											: index % 3 === 1
											? 'clip-path-slant-right'
											: 'clip-path-corner-cut'
									}`}>
									</div>
								</div>
							))}
						</div>
					) : (
						/* Geometric category grid */
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
							{categories.map((category, index) => (
								<a
									key={category}
									href={`/blog?type=${encodeURIComponent(category || '')}`}
									className='group relative block'
								>
									{/* Dynamic geometric shapes for each category */}
									<div 
										className={`
											relative h-40 bg-gradient-to-br 
											${index % 6 === 0 ? 'from-violet-500 to-purple-700' : ''}
											${index % 6 === 1 ? 'from-cyan-500 to-blue-700' : ''}
											${index % 6 === 2 ? 'from-emerald-500 to-teal-700' : ''}
											${index % 6 === 3 ? 'from-amber-500 to-orange-700' : ''}
											${index % 6 === 4 ? 'from-rose-500 to-pink-700' : ''}
											${index % 6 === 5 ? 'from-indigo-500 to-purple-700' : ''}
											shadow-xl hover:shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 
											transition-all duration-500 overflow-hidden
											${index % 4 === 0 
												? 'clip-path-slant-left'
												: index % 4 === 1
												? 'clip-path-slant-right'
												: index % 4 === 2
												? 'clip-path-corner-cut'
												: 'clip-path-diamond'
											}
										`}
									>
										{/* Animated background pattern */}
										<div className='absolute inset-0 opacity-20'>
											<div className='absolute top-4 left-4 w-8 h-8 border-2 border-white transform rotate-45 group-hover:rotate-90 transition-transform duration-500'></div>
											<div className='absolute bottom-4 right-4 w-6 h-6 bg-white rounded-full group-hover:scale-150 transition-transform duration-500'></div>
											<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-white group-hover:w-24 transition-all duration-500'></div>
										</div>

										{/* Category content */}
										<div className='absolute inset-0 flex flex-col justify-center items-center text-center p-6'>
											<div className='text-white font-black text-xl lg:text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300'>
												{category?.toUpperCase()}
											</div>
											<div className='w-12 h-0.5 bg-white/60 group-hover:w-20 transition-all duration-300'></div>
										</div>

										{/* Hover overlay */}
										<div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
									</div>

									{/* Floating accent */}
									<div className={`
										absolute -top-2 -right-2 w-8 h-8 rounded-full 
										${index % 3 === 0 ? 'bg-yellow-400' : ''}
										${index % 3 === 1 ? 'bg-white' : ''}
										${index % 3 === 2 ? 'bg-emerald-400' : ''}
										shadow-lg transform group-hover:scale-125 group-hover:rotate-180 
										transition-all duration-500 flex items-center justify-center
									`}>
										<div className='w-2 h-2 bg-gray-800 rounded-full group-hover:bg-gray-900'></div>
									</div>
								</a>
							))}
						</div>
					)}

					{/* Central floating element */}
					<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
						<div className='w-24 h-24 border-4 border-violet-300 rounded-full opacity-10 animate-spin-slow'></div>
						<div className='absolute inset-0 w-16 h-16 border-2 border-pink-300 rounded-full opacity-20 animate-ping'></div>
					</div>
				</div>

				{/* Bottom decorative line */}
				<div className='mt-20 flex justify-center'>
					<div className='w-64 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent'></div>
				</div>
			</div>
		</section>
	)
}

// Добавляем стили в head если их еще нет
if (typeof document !== 'undefined' && !document.getElementById('categories-section-styles')) {
	const style = document.createElement('style')
	style.id = 'categories-section-styles'
	style.textContent = `
		/* Clip-path utilities for geometric shapes */
		.clip-path-slant-left {
			clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
		}

		.clip-path-slant-right {
			clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
		}

		.clip-path-corner-cut {
			clip-path: polygon(0 0, 100% 0, 100% 85%, 15% 100%, 0 15%);
		}

		.clip-path-diamond {
			clip-path: polygon(0 10%, 90% 0, 100% 90%, 10% 100%);
		}

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
