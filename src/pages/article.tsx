import {
	ArticleComments,
	ArticleContent,
	ArticleFeatured,
	ArticleHeader,
	ArticleLatest,
	ArticleNavigation,
	ArticlePopular,
} from '@/components/article'
import { Container } from '@/components/shared/container'
import { useGetArticleBySlug, useGetArticles } from '@/hooks/useArticles'
import { useParams } from 'react-router'

export function ArticlePage() {
	const { slug } = useParams()

	const { data: article, isLoading: isArticleLoading } = useGetArticleBySlug(
		slug || ''
	)
	const { data: articles, isLoading: isArticlesLoading } = useGetArticles()

	if (isArticleLoading || isArticlesLoading) {
		return (
			<div className='relative min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 overflow-hidden'>
				{/* Dynamic loading particles */}
				<div className='absolute inset-0 pointer-events-none'>
					<div className='absolute top-20 left-1/4 w-2 h-32 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-40 animate-pulse'></div>
					<div className='absolute top-1/3 right-1/4 w-24 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-30'></div>
					<div className='absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-50'></div>
				</div>
				
				<Container>
					<div className='relative z-10 py-12 flex items-center justify-center min-h-screen'>
						<div className='text-center space-y-6'>
							{/* Geometric loading container */}
							<div className='relative w-32 h-32 mx-auto'>
								<div className='absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-700 transform rotate-45 animate-spin'
									 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
								</div>
								<div className='absolute inset-4 bg-white transform rotate-45 flex items-center justify-center'>
									<div className='text-2xl font-black text-violet-600'>FA</div>
								</div>
							</div>
							<div className='space-y-2'>
								<h2 className='text-2xl font-bold text-gray-900'>Conquering Content Heights</h2>
								<p className='text-gray-600'>Loading exclusive materials...</p>
							</div>
						</div>
					</div>
				</Container>
			</div>
		)
	}

	if (!article) {
		return (
			<div className='relative min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden'>
				{/* Error particles */}
				<div className='absolute inset-0 pointer-events-none'>
					<div className='absolute top-1/4 left-1/4 w-32 h-32 border-2 border-red-400 transform rotate-45 opacity-20 animate-spin-slow'></div>
					<div className='absolute bottom-1/3 right-1/4 w-2 h-40 bg-gradient-to-t from-red-500 to-transparent opacity-30'></div>
				</div>
				
				<Container>
					<div className='relative z-10 py-20 flex items-center justify-center min-h-screen'>
						<div className='text-center space-y-8'>
							<div className='w-24 h-24 mx-auto bg-red-500 transform rotate-45 flex items-center justify-center'>
								<div className='text-white text-2xl font-bold transform -rotate-45'>404</div>
							</div>
							<div className='space-y-4'>
								<h2 className='text-4xl font-black text-white'>Height Not Found</h2>
								<p className='text-gray-300 text-lg'>This article has disappeared into the clouds</p>
								<a href='/blog' className='inline-block mt-6 px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold hover:scale-105 transform transition-all duration-300'>
									Return to Explorations
								</a>
							</div>
						</div>
					</div>
				</Container>
			</div>
		)
	}

	return (
		<div className='relative bg-gradient-to-br from-white via-gray-50 to-indigo-50 min-h-screen overflow-hidden'>
			{/* Dynamic floating particles - hidden on mobile */}
			<div className='absolute inset-0 pointer-events-none hidden lg:block'>
				<div className='absolute top-16 left-1/6 w-2 h-40 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse'></div>
				<div className='absolute top-1/4 right-1/5 w-28 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-40'></div>
				<div className='absolute bottom-1/3 left-1/4 w-1 h-52 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-35'></div>
				<div className='absolute top-1/2 right-1/6 w-24 h-24 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow'></div>
				<div className='absolute bottom-1/4 right-1/3 w-16 h-16 bg-violet-100 transform rotate-45 opacity-30'></div>
			</div>

			<Container>
				<div className='relative z-10 py-6 sm:py-12 lg:py-20'>
					{/* Hero Section with Geometric Design */}
					<div className='relative mb-8 sm:mb-16'>
						{/* Background geometric accent - hidden on mobile */}
						<div className='absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-violet-600/10 via-purple-600/5 to-pink-600/10 transform -skew-y-1 origin-top-left hidden lg:block'></div>
						
						{/* Article Header with enhanced styling */}
						<div className='relative bg-white/80 backdrop-blur-sm shadow-xl border-l-4 sm:border-l-8 border-violet-500 p-4 sm:p-8 lg:p-12 mb-8 sm:mb-12 transform hover:scale-[1.02] transition-all duration-500 mobile-safe-clip'>
							<ArticleHeader article={article} />
							
							{/* Floating accent elements - hidden on mobile */}
							<div className='absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-45 items-center justify-center shadow-lg hidden sm:flex'>
								<div className='w-3 h-3 bg-white rounded-full'></div>
							</div>
							<div className='absolute -bottom-3 -left-3 w-8 h-8 bg-emerald-500 rounded-full shadow-lg animate-pulse hidden sm:block'></div>
						</div>
					</div>

					{/* Main Content Grid with Revolutionary Layout */}
					<div className='grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-8 lg:gap-12'>
						{/* Left Column - Article Content - ПЕРВЫЙ НА МОБИЛЬНЫХ */}
						<div className='xl:col-span-8 order-1'>
							<div className='space-y-8 sm:space-y-12'>
								{/* Article Navigation with Geometric Design */}
								<div className='relative bg-gradient-to-br from-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8 transform hover:scale-[1.01] transition-all duration-300 mobile-safe-clip'>
									{/* Navigation accent line */}
									<div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500'></div>
									
									<ArticleNavigation currentArticle={article} articles={articles} />
									
									{/* Floating decorative element - hidden on mobile */}
									<div className='absolute -top-2 -right-2 w-6 h-6 bg-violet-500 transform rotate-45 hidden sm:block'></div>
								</div>

								{/* Article Content with Enhanced Container */}
								<div className='relative'>
									{/* Content background with geometric design - simplified on mobile */}
									<div className='absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-white via-gray-50 to-indigo-50 transform rotate-0 sm:rotate-1 opacity-60 shadow-2xl mobile-safe-clip'></div>
									
									<div className='relative bg-white/90 backdrop-blur-sm p-4 sm:p-8 lg:p-12 shadow-xl border-t-2 sm:border-t-4 border-violet-500'>
										<ArticleContent article={article} />
										
										{/* Content decorative elements - hidden on mobile */}
										<div className='absolute top-4 right-4 w-4 h-16 bg-gradient-to-b from-violet-500 to-transparent opacity-30 hidden sm:block'></div>
										<div className='absolute bottom-4 left-4 w-16 h-4 bg-gradient-to-r from-emerald-500 to-transparent opacity-30 hidden sm:block'></div>
									</div>
								</div>
							</div>
						</div>

						{/* Right Column - Sidebar with Futuristic Design - ВТОРОЙ НА МОБИЛЬНЫХ */}
						<div className='xl:col-span-4 order-2'>
							<div className='xl:sticky xl:top-8 space-y-6 sm:space-y-8'>
								{/* Comments Section */}
								<div className='relative group'>
									<div className='absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-violet-600/20 to-purple-600/20 transform rotate-0 sm:rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-60 mobile-safe-clip'></div>
									<div className='relative bg-white p-4 sm:p-6 lg:p-8 shadow-xl border-l-2 sm:border-l-4 border-violet-500 transform group-hover:scale-[1.02] transition-all duration-300 mobile-safe-clip'>
										<ArticleComments article={article} />
										
										{/* Section accent */}
										<div className='absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-violet-500 to-purple-700 transform rotate-45 flex items-center justify-center shadow-lg'>
											<div className='text-white text-xs font-bold transform -rotate-45'>💬</div>
										</div>
									</div>
								</div>

								{/* Latest Articles */}
								<div className='relative group'>
									<div className='absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 transform rotate-0 sm:-rotate-1 group-hover:-rotate-2 transition-transform duration-300 opacity-60 mobile-safe-clip'></div>
									<div className='relative bg-white p-4 sm:p-6 lg:p-8 shadow-xl border-l-2 sm:border-l-4 border-emerald-500 transform group-hover:scale-[1.02] transition-all duration-300 mobile-safe-clip'>
										<ArticleLatest articles={articles} />
										
										{/* Section accent */}
										<div className='absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-emerald-500 to-teal-700 transform rotate-45 flex items-center justify-center shadow-lg'>
											<div className='text-white text-xs font-bold transform -rotate-45'>🆕</div>
										</div>
									</div>
								</div>

								{/* Popular Articles */}
								<div className='relative group'>
									<div className='absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-amber-600/20 to-orange-600/20 transform rotate-0 sm:rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-60 mobile-safe-clip'></div>
									<div className='relative bg-white p-4 sm:p-6 lg:p-8 shadow-xl border-l-2 sm:border-l-4 border-amber-500 transform group-hover:scale-[1.02] transition-all duration-300 mobile-safe-clip'>
										<ArticlePopular articles={articles} />
										
										{/* Section accent */}
										<div className='absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-amber-500 to-orange-700 transform rotate-45 flex items-center justify-center shadow-lg'>
											<div className='text-white text-xs font-bold transform -rotate-45'>🔥</div>
										</div>
									</div>
								</div>

								{/* Featured Articles */}
								<div className='relative group'>
									<div className='absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-pink-600/20 to-rose-600/20 transform rotate-0 sm:-rotate-1 group-hover:-rotate-2 transition-transform duration-300 opacity-60 mobile-safe-clip'></div>
									<div className='relative bg-white p-4 sm:p-6 lg:p-8 shadow-xl border-l-2 sm:border-l-4 border-pink-500 transform group-hover:scale-[1.02] transition-all duration-300 mobile-safe-clip'>
										<ArticleFeatured articles={articles} />
										
										{/* Section accent */}
										<div className='absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-pink-500 to-rose-700 transform rotate-45 flex items-center justify-center shadow-lg'>
											<div className='text-white text-xs font-bold transform -rotate-45'>⭐</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom Call-to-Action Section */}
					<div className='mt-12 sm:mt-20 relative'>
						{/* Background geometric design - hidden on mobile */}
						<div className='absolute inset-0 bg-gradient-to-r from-violet-600/10 via-purple-600/5 to-pink-600/10 transform skew-y-1 origin-bottom-right hidden lg:block'></div>
						
						<div className='relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 p-6 sm:p-8 lg:p-12 text-center transform hover:scale-[1.02] transition-all duration-500 mobile-safe-clip'>
							{/* Inner glow effect */}
							<div className='absolute inset-0 bg-gradient-to-br from-violet-600/10 to-pink-600/10 mobile-safe-clip'></div>
							
							<div className='relative space-y-4 sm:space-y-6'>
								<h3 className='text-2xl sm:text-3xl lg:text-4xl font-black text-white'>
									Conquer New 
									<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400'>
										HEIGHTS WITH US
									</span>
								</h3>
								<p className='text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4'>
									Join the FITNESS ALTITUDE community and get exclusive content delivered straight to you
								</p>
								<div className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 px-4'>
									<a href='/blog' 
										className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold hover:scale-105 transform transition-all duration-300 shadow-xl text-center'>
										EXPLORE ARTICLES
									</a>
									<a href='/contacts' 
										className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold hover:scale-105 transform transition-all duration-300 shadow-xl text-center'>
										SUBSCRIBE NOW
									</a>
								</div>
							</div>
							
							{/* Floating accent elements - hidden on mobile */}
							<div className='absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 transform rotate-45 animate-pulse hidden sm:block'></div>
							<div className='absolute -bottom-4 -right-4 w-6 h-6 bg-emerald-500 rounded-full animate-bounce hidden sm:block'></div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

// Add styles to head if they don't exist yet
if (typeof document !== 'undefined' && !document.getElementById('article-page-styles')) {
	const style = document.createElement('style')
	style.id = 'article-page-styles'
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

		/* Enhanced hover effects */
		.group:hover .group-hover\\:rotate-2 {
			transform: rotate(2deg);
		}

		.group:hover .group-hover\\:-rotate-2 {
			transform: rotate(-2deg);
		}

		.group:hover .group-hover\\:scale-\\[1\\.02\\] {
			transform: scale(1.02);
		}

		/* Mobile-safe clip paths */
		.mobile-safe-clip {
			clip-path: none;
		}

		/* Clip-path utilities for geometric shapes - только на больших экранах */
		@media (min-width: 768px) {
			.clip-path-slant-left {
				clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
			}

			.clip-path-slant-right {
				clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
			}

			.clip-path-corner-cut {
				clip-path: polygon(0 0, 100% 0, 100% 85%, 15% 100%, 0 15%);
			}

			/* Применяем clip-path только на планшетах и десктопах */
			.mobile-safe-clip:nth-child(1) {
				clip-path: polygon(0 0, 97% 0, 100% 15%, 97% 100%, 0 100%);
			}
		}

		/* Убираем все сложные clip-path на мобильных устройствах */
		@media (max-width: 767px) {
			[style*="clip-path"] {
				clip-path: none !important;
			}
			
			.mobile-safe-clip {
				clip-path: none !important;
			}

			/* Упрощаем трансформации на мобильных */
			.transform {
				transform: none;
			}

			.transform.rotate-45 {
				transform: rotate(45deg);
			}

			/* Убираем анимации на мобильных для лучшей производительности */
			.animate-pulse,
			.animate-spin,
			.animate-spin-slow,
			.animate-bounce {
				animation: none;
			}
		}

		/* Smooth scroll behavior */
		html {
			scroll-behavior: smooth;
		}

		/* Enhanced focus states for accessibility */
		.focus-visible:focus {
			outline: 2px solid #8b5cf6;
			outline-offset: 2px;
		}

		/* Performance optimizations */
		.backdrop-blur-sm {
			backdrop-filter: blur(4px);
			-webkit-backdrop-filter: blur(4px);
		}

		/* Sticky sidebar optimization */
		.sticky {
			position: -webkit-sticky;
			position: sticky;
		}

		/* Button hover optimizations */
		a[class*="hover:scale-"] {
			will-change: transform;
		}

		/* Мобильная оптимизация для текста */
		@media (max-width: 640px) {
			.text-4xl {
				font-size: 2rem;
				line-height: 2.5rem;
			}

			.text-3xl {
				font-size: 1.75rem;
				line-height: 2.25rem;
			}

			/* Улучшаем читаемость на мобильных */
			p {
				line-height: 1.6;
			}

			/* Увеличиваем отступы для лучшего UX */
			.space-y-8 > * + * {
				margin-top: 1.5rem;
			}

			.space-y-12 > * + * {
				margin-top: 2rem;
			}
		}

		/* Дополнительная оптимизация для очень маленьких экранов */
		@media (max-width: 480px) {
			.Container {
				padding-left: 1rem;
				padding-right: 1rem;
			}

			/* Убираем сложные тени на мобильных */
			.shadow-xl {
				box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
			}
		}
	`
	document.head.appendChild(style)
}
