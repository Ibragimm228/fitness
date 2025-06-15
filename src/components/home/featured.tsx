import { useGetArticles } from '@/hooks/useArticles'
import ArticleCardSmall from '../shared/article-card/article-card-small'
import ArticleCardSmallSkeleton from '../shared/article-card/article-card-small-skeleton'

export function FeaturedArticlesSection() {
	const { data: articles, isLoading } = useGetArticles()

	return (
		<section className='relative bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 py-20 lg:py-32 overflow-hidden'>
			{/* Dynamic floating particles */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-16 left-1/4 w-2 h-40 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-28 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-40'></div>
				<div className='absolute bottom-1/4 left-1/6 w-1 h-52 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-35'></div>
				<div className='absolute top-1/2 right-1/3 w-32 h-32 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow'></div>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				
				{/* Revolutionary title design */}
				<div className='text-center mb-20'>
					<div className='relative inline-block'>
						{/* Geometric background accent */}
						<div className='absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-violet-500/10 to-pink-500/10 transform rotate-45 opacity-80'></div>
						<div className='absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full opacity-60'></div>
						
						{/* Main title with split effect */}
						<div className='relative overflow-hidden'>
							<h2 className='text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-none'>
								<span className='block transform hover:translate-x-3 transition-transform duration-500'>FEATURED</span>
								<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 transform hover:-translate-x-3 transition-transform duration-500 -mt-3'>
									CONTENT
								</span>
							</h2>
							
							{/* Dynamic cutting line */}
							<div className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent transform -translate-y-1/2 opacity-50'></div>
						</div>

						{/* Floating decorative elements */}
						<div className='absolute -top-6 -left-6 w-6 h-6 bg-yellow-400 transform rotate-45 animate-pulse'></div>
						<div className='absolute -bottom-8 -right-8 w-8 h-8 bg-emerald-500 rounded-full animate-bounce'></div>
					</div>

					{/* Subtitle with highlight */}
					<div className='mt-10 space-y-4'>
						<p className='text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto'>
							Carefully selected articles for conquering 
							<span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 rounded-lg font-bold mx-2 transform inline-block hover:scale-105 transition-transform duration-300'>
								new heights
							</span>
							in fitness
						</p>
						<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
							Start your journey to perfection with expert content from FITNESS ALTITUDE
						</p>
					</div>

					{/* Decorative line separator */}
					<div className='mt-8 flex justify-center items-center space-x-6'>
						<div className='w-16 h-1 bg-gradient-to-r from-violet-500 to-purple-600'></div>
						<div className='w-4 h-4 bg-violet-500 transform rotate-45'></div>
						<div className='w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600'></div>
					</div>
				</div>

				{/* Articles grid with geometric design */}
				<div className='relative'>
					{/* Central floating element */}
					<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0'>
						<div className='w-32 h-32 border-4 border-violet-200 transform rotate-45 opacity-20 animate-spin-slow'></div>
						<div className='absolute inset-0 w-20 h-20 border-2 border-pink-200 rounded-full opacity-30 animate-ping'></div>
					</div>

					<div className='relative z-10 grid gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
						{isLoading ? (
							Array.from({ length: 3 }).map((_, index) => (
								<div key={index} className='group relative'>
									{/* Geometric container for skeleton */}
									<div className={`
										relative bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse shadow-xl transform hover:scale-105 transition-all duration-500
										${index % 3 === 0 
											? 'clip-path-slant-left'
											: index % 3 === 1
											? 'clip-path-corner-cut'
											: 'clip-path-slant-right'
										}
									`}>
										<ArticleCardSmallSkeleton />
									</div>
									
									{/* Floating accent for skeleton */}
									<div className={`
										absolute -top-3 -right-3 w-8 h-8 rounded-full animate-pulse
										${index % 2 === 0 ? 'bg-gray-300' : 'bg-gray-400'}
										shadow-lg
									`}></div>
								</div>
							))
						) : (
							articles?.slice(0, 3).map((article, index) => (
								<div key={article.id} className='group relative'>
									{/* Geometric container with dynamic shapes */}
									<div className={`
										relative overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 min-h-[400px] flex flex-col
										${index % 3 === 0 
											? 'clip-path-slant-left bg-gradient-to-br from-violet-50 to-purple-100'
											: index % 3 === 1
											? 'clip-path-corner-cut bg-gradient-to-br from-emerald-50 to-cyan-100'
											: 'clip-path-slant-right bg-gradient-to-br from-pink-50 to-rose-100'
										}
									`}>
										{/* Inner glow effect */}
										<div className='absolute inset-0 bg-gradient-to-br from-white/50 to-transparent group-hover:from-white/70 transition-all duration-500'></div>
										
										{/* Article card wrapper with proper spacing */}
										<div className='relative z-10 p-3 flex-1 flex flex-col'>
											<ArticleCardSmall article={article} />
										</div>

										{/* Animated background pattern */}
										<div className='absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500'>
											<div className='absolute top-4 left-4 w-6 h-6 border-2 border-violet-500 transform rotate-45 group-hover:rotate-90 transition-transform duration-500'></div>
											<div className='absolute bottom-4 right-4 w-4 h-4 bg-pink-500 rounded-full group-hover:scale-150 transition-transform duration-500'></div>
											<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-emerald-500 group-hover:w-16 transition-all duration-500'></div>
										</div>
									</div>

									{/* Floating accent with dynamic colors */}
									<div className={`
										absolute -top-3 -right-3 w-10 h-10 rounded-full shadow-lg transform group-hover:scale-125 group-hover:rotate-180 transition-all duration-500 flex items-center justify-center
										${index % 4 === 0 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' : ''}
										${index % 4 === 1 ? 'bg-gradient-to-br from-emerald-400 to-teal-500' : ''}
										${index % 4 === 2 ? 'bg-gradient-to-br from-violet-400 to-purple-500' : ''}
										${index % 4 === 3 ? 'bg-gradient-to-br from-pink-400 to-rose-500' : ''}
									`}>
										<div className='w-3 h-3 bg-white rounded-full group-hover:bg-gray-900 transition-colors duration-300'></div>
									</div>

									{/* Article number indicator */}
									<div className='absolute -top-2 -left-2 w-8 h-8 bg-gray-900 text-white font-bold text-sm flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300'>
										{String(index + 1).padStart(2, '0')}
									</div>
								</div>
							))
						)}
					</div>
				</div>

				{/* Bottom call-to-action */}
				<div className='mt-20 text-center'>
					<div className='relative inline-block'>
						{/* Background accent */}
						<div className='absolute -inset-4 bg-gradient-to-r from-violet-100 to-pink-100 transform rotate-1 opacity-60'></div>
						
						<a
							href='/blog'
							className='relative group inline-flex items-center px-10 py-5 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-bold text-lg lg:text-xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300'
							style={{clipPath: 'polygon(0 0, 90% 0, 100% 30%, 90% 100%, 0 100%)'}}>
							
							<span className='flex items-center'>
								EXPLORE ALL ARTICLES
								<div className='ml-4 w-8 h-8 bg-white/20 flex items-center justify-center transform group-hover:translate-x-3 group-hover:rotate-12 transition-all duration-300'>
									<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
									</svg>
								</div>
							</span>
						</a>
						
						{/* Floating decorative elements */}
						<div className='absolute -top-4 -right-4 w-6 h-6 bg-yellow-400 transform rotate-45 animate-bounce'></div>
						<div className='absolute -bottom-4 -left-4 w-4 h-4 bg-emerald-500 rounded-full animate-pulse'></div>
					</div>
				</div>

				{/* Bottom decorative line */}
				<div className='mt-16 flex justify-center space-x-8'>
					<div className='w-24 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent'></div>
					<div className='w-2 h-2 bg-violet-500 transform rotate-45'></div>
					<div className='w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
				</div>
			</div>
		</section>
	)
}

// Добавляем стили в head если их еще нет
if (typeof document !== 'undefined' && !document.getElementById('featured-articles-styles')) {
	const style = document.createElement('style')
	style.id = 'featured-articles-styles'
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

		/* Responsive adjustments */
		@media (max-width: 768px) {
			.clip-path-slant-left,
			.clip-path-slant-right,
			.clip-path-corner-cut {
				clip-path: none;
			}
		}

		/* Ensure article cards have proper height and text wrapping */
		@media (min-width: 1024px) {
			.featured-article-card {
				min-height: 400px;
			}
		}

		@media (min-width: 768px) and (max-width: 1023px) {
			.featured-article-card {
				min-height: 380px;
			}
		}

		@media (max-width: 767px) {
			.featured-article-card {
				min-height: 350px;
			}
		}
	`
	document.head.appendChild(style)
}
