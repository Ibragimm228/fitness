import { useGetArticles } from '@/hooks/useArticles'
import { Link } from 'react-router'
import { Container } from './container'

// Modern Fitness Altitude Logo Component
function FitnessAltitudeLogo({ variant = 'dark' }) {
	const isLight = variant === 'light'
	
	return (
		<div className="flex items-center group">
			{/* Geometric logo icon */}
			<div className="relative mr-3">
				<div className={`w-12 h-12 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500 ${
					isLight 
						? 'bg-gradient-to-br from-violet-500 to-purple-700' 
						: 'bg-gradient-to-br from-violet-500 to-purple-700'
				}`}
					 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
					<div className="text-xl font-black text-white">
						FA
					</div>
				</div>
				{/* Small accent dot */}
				<div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
			</div>
			
			{/* Brand text */}
			<div className="flex flex-col">
				<div className="text-xl font-black leading-none text-gray-900">
					FITNESS
				</div>
				<div className="text-sm font-bold leading-none mt-1 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600">
					ALTITUDE
				</div>
			</div>
		</div>
	)
}

const LINKS = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'About',
		href: '/about',
	},
	{
		label: 'Blog',
		href: '/blog',
	},
	{
		label: 'Contacts',
		href: '/contacts',
	},
]

export function Header() {
	const { data: articles, isLoading } = useGetArticles()
	const types = [...new Set(articles?.map(article => article.type))]

	return (
		<header className="relative bg-gradient-to-br from-white via-indigo-50 to-purple-50 overflow-hidden">
			{/* Dynamic floating particles */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-4 left-1/4 w-2 h-16 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse"></div>
				<div className="absolute top-8 right-1/4 w-20 h-1 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-20"></div>
				<div className="absolute bottom-4 left-1/3 w-1 h-20 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-40"></div>
				<div className="absolute top-1/2 right-1/6 w-12 h-12 border-2 border-cyan-400 transform rotate-45 opacity-10 animate-spin-slow"></div>
			</div>

			<Container>
				<div className="relative z-10 py-6 lg:py-8">
					<div className="flex flex-col items-center space-y-8">
						
						{/* Logo with geometric background */}
						<div className="relative">
							{/* Background geometric accent */}
							<div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-violet-500/10 to-pink-500/10 transform rotate-45 opacity-60"></div>
							<FitnessAltitudeLogo />
						</div>

						{/* Main navigation with geometric design */}
						<nav className="relative">
							{/* Background shape for navigation */}
							<div className="absolute -inset-4 bg-gradient-to-r from-gray-100/50 to-indigo-100/50 transform -skew-x-12 opacity-60"></div>
							
							<ul className="relative flex flex-wrap gap-8 justify-center font-bold tracking-wider">
								{LINKS.map((item, index) => (
									<li key={item.label} className="group relative">
										<Link 
											to={item.href}
											className="relative block px-4 py-2 text-gray-800 hover:text-violet-600 transition-all duration-300"
										>
											{/* Geometric hover effect */}
											<div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300 ${
												index % 4 === 0 ? 'bg-gradient-to-r from-violet-500/10 to-purple-500/10' :
												index % 4 === 1 ? 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10' :
												index % 4 === 2 ? 'bg-gradient-to-r from-pink-500/10 to-rose-500/10' :
												'bg-gradient-to-r from-amber-500/10 to-orange-500/10'
											}`}
												 style={{clipPath: 'polygon(0 0, 90% 0, 100% 40%, 90% 100%, 0 100%)'}}></div>
											
											{/* Text with accent line */}
											<span className="relative z-10 font-semibold text-sm lg:text-base">
												{item.label}
											</span>
											
											{/* Animated underline */}
											<div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
												index % 4 === 0 ? 'bg-violet-500' :
												index % 4 === 1 ? 'bg-emerald-500' :
												index % 4 === 2 ? 'bg-pink-500' :
												'bg-amber-500'
											}`}></div>
										</Link>
									</li>
								))}
							</ul>
						</nav>

						{/* Categories navigation with dynamic shapes */}
						<nav className="w-full">
							{isLoading ? (
								/* Loading skeleton with geometric shapes */
								<div className="flex flex-wrap gap-4 justify-center">
									{Array.from({ length: 5 }).map((_, index) => (
										<div 
											key={index}
											className={`h-8 w-20 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse transform hover:scale-105 transition-all duration-300 ${
												index % 3 === 0 
													? 'clip-path-slant-left'
													: index % 3 === 1
													? 'clip-path-slant-right'
													: 'clip-path-corner-cut'
											}`}
										></div>
									))}
								</div>
							) : (
								/* Categories with geometric design */
								<div className="relative">
									{/* Central decorative element */}
									<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-violet-200 rounded-full opacity-20 animate-spin-slow pointer-events-none"></div>
									
									<ul className="flex flex-wrap gap-4 justify-center">
										{types.map((item, index) => (
											<li key={item} className="group relative">
												<Link 
													to={`/blog?type=${encodeURIComponent(item || '')}`}
													className="block"
												>
													{/* Dynamic geometric shape for each category */}
													<div className={`
														relative px-4 py-2 text-white font-bold text-xs lg:text-sm shadow-lg 
														hover:shadow-xl transform group-hover:scale-110 group-hover:rotate-3 
														transition-all duration-500 overflow-hidden
														${index % 6 === 0 ? 'bg-gradient-to-r from-violet-500 to-purple-700' : ''}
														${index % 6 === 1 ? 'bg-gradient-to-r from-cyan-500 to-blue-700' : ''}
														${index % 6 === 2 ? 'bg-gradient-to-r from-emerald-500 to-teal-700' : ''}
														${index % 6 === 3 ? 'bg-gradient-to-r from-amber-500 to-orange-700' : ''}
														${index % 6 === 4 ? 'bg-gradient-to-r from-rose-500 to-pink-700' : ''}
														${index % 6 === 5 ? 'bg-gradient-to-r from-indigo-500 to-purple-700' : ''}
														${index % 4 === 0 
															? 'clip-path-slant-left'
															: index % 4 === 1
															? 'clip-path-slant-right'
															: index % 4 === 2
															? 'clip-path-corner-cut'
															: 'clip-path-diamond'
														}
													`}>
														{/* Animated background pattern */}
														<div className="absolute inset-0 opacity-20">
															<div className="absolute top-1 left-1 w-2 h-2 border border-white transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
															<div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-white rounded-full group-hover:scale-150 transition-transform duration-500"></div>
														</div>

														{/* Category text */}
														<span className="relative z-10 uppercase tracking-wider">
															{item}
														</span>

														{/* Hover overlay */}
														<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
													</div>

													{/* Floating accent */}
													<div className={`
														absolute -top-1 -right-1 w-3 h-3 rounded-full 
														${index % 3 === 0 ? 'bg-yellow-400' : ''}
														${index % 3 === 1 ? 'bg-white' : ''}
														${index % 3 === 2 ? 'bg-emerald-400' : ''}
														shadow-lg transform group-hover:scale-125 group-hover:rotate-180 
														transition-all duration-500
													`}>
													</div>
												</Link>
											</li>
										))}
									</ul>
								</div>
							)}
						</nav>

						{/* Bottom decorative line */}
						<div className="flex justify-center space-x-4">
							<div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
							<div className="w-1 h-1 bg-violet-500 transform rotate-45"></div>
							<div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
						</div>
					</div>
				</div>
			</Container>

			{/* Add custom styles */}
			<style>{`
				/* Clip-path utilities for geometric shapes */
				.clip-path-slant-left {
					clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
				}

				.clip-path-slant-right {
					clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
				}

				.clip-path-corner-cut {
					clip-path: polygon(0 0, 100% 0, 100% 75%, 25% 100%, 0 25%);
				}

				.clip-path-diamond {
					clip-path: polygon(0 20%, 80% 0, 100% 80%, 20% 100%);
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
					[style*="clip-path"] {
						clip-path: none !important;
					}
				}
			`}</style>
		</header>
	)
}