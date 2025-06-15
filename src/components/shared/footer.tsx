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
						: 'bg-gradient-to-br from-white to-gray-100'
				}`}
					 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
					<div className={`text-xl font-black ${isLight ? 'text-white' : 'text-violet-600'}`}>
						FA
					</div>
				</div>
				{/* Small accent dot */}
				<div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
			</div>
			
			{/* Brand text */}
			<div className="flex flex-col">
				<div className={`text-xl font-black leading-none ${
					isLight ? 'text-white' : 'text-gray-900'
				}`}>
					FITNESS
				</div>
				<div className={`text-sm font-bold leading-none mt-1 ${
					isLight 
						? 'text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400' 
						: 'text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600'
				}`}>
					ALTITUDE
				</div>
			</div>
		</div>
	)
}

export function Footer() {
	const navigation = {
		main: [
			{ name: 'Home', href: '/' },
			{ name: 'About', href: '/about' },
			{ name: 'Blog', href: '/blog' },
			{ name: 'Contacts', href: '/contacts' },
			{ name: 'Privacy Policy', href: '/privacy-policy' },
		],
		social: [
			{ name: 'Instagram', href: '#', icon: 'instagram' as const },
			{ name: 'YouTube', href: '#', icon: 'youtube' as const },
			{ name: 'Twitter', href: '#', icon: 'twitter' as const },
		]
	}

	const SocialIcon = ({ type }: { type: 'instagram' | 'youtube' | 'twitter' }) => {
		const iconPaths = {
			instagram: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z",
			youtube: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
			twitter: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
		}
		
		return (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
				<path d={iconPaths[type]} />
			</svg>
		)
	}

	return (
		<footer className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
			{/* Dynamic floating particles */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-10 left-1/4 w-2 h-32 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse"></div>
				<div className="absolute top-1/3 right-1/4 w-24 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-20"></div>
				<div className="absolute bottom-1/4 left-1/3 w-1 h-40 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-40"></div>
				<div className="absolute top-1/2 right-1/6 w-20 h-20 border-2 border-cyan-400 transform rotate-45 opacity-10 animate-spin-slow"></div>
			</div>

			<Container>
				<div className="relative z-10">
					{/* Main footer content */}
					<div className="py-16 lg:py-20">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
							
							{/* Left section - Brand and description */}
							<div className="lg:col-span-1 space-y-8">
								<div className="relative">
									{/* Geometric background accent */}
									<div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-violet-500/20 to-pink-500/20 transform rotate-45 opacity-60"></div>
									
									<FitnessAltitudeLogo variant="light" />
								</div>
								
								<div className="space-y-4">
									<p className="text-lg text-gray-300 font-medium leading-relaxed">
										Elevating fitness content to 
										<span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-2 py-1 rounded-lg font-bold mx-1 transform inline-block">
											new heights
										</span>
									</p>
									<p className="text-gray-400">
										Join our community of fitness enthusiasts reaching for excellence through science-backed approaches and inspiring success stories.
									</p>
								</div>

								{/* Social links with geometric design */}
								<div className="flex items-center space-x-4">
									{navigation.social.map((social, index) => (
										<a
											key={social.name}
											href={social.href}
											className={`group relative w-12 h-12 flex items-center justify-center shadow-lg transform hover:scale-110 hover:rotate-12 transition-all duration-300 ${
												index % 3 === 0 
													? 'bg-gradient-to-br from-violet-500 to-purple-700'
													: index % 3 === 1
													? 'bg-gradient-to-br from-emerald-500 to-teal-700'
													: 'bg-gradient-to-br from-pink-500 to-rose-700'
											}`}
											style={{clipPath: index % 2 === 0 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : 'polygon(0 0, 100% 0, 100% 75%, 25% 100%, 0 25%)'}}
										>
											<SocialIcon type={social.icon} />
											<span className="sr-only">{social.name}</span>
										</a>
									))}
								</div>
							</div>

							{/* Center section - Navigation */}
							<div className="lg:col-span-1 flex justify-center lg:justify-center">
								<div className="relative">
									{/* Background geometric shape */}
									<div className="absolute -inset-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 transform rotate-3 opacity-60"
										 style={{clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'}}></div>
									
									<div className="relative space-y-6 p-6">
										<h3 className="text-xl font-bold text-white">
											<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
												EXPLORE
											</span>
										</h3>
										
										<nav className="space-y-3">
											{navigation.main.map((item, index) => (
												<a
													key={item.name}
													href={item.href}
													className="group block text-gray-400 hover:text-white transition-all duration-300"
												>
													<div className="flex items-center">
														<div className={`w-2 h-2 mr-3 transform transition-all duration-300 group-hover:scale-150 ${
															index % 4 === 0 ? 'bg-violet-500 rotate-45' :
															index % 4 === 1 ? 'bg-emerald-500 rounded-full' :
															index % 4 === 2 ? 'bg-pink-500 rotate-45' :
															'bg-yellow-500 rounded-full'
														}`}></div>
														<span className="font-medium group-hover:translate-x-2 transition-transform duration-300">
															{item.name}
														</span>
													</div>
												</a>
											))}
										</nav>
									</div>
								</div>
							</div>

							{/* Right section - Newsletter signup */}
							<div className="lg:col-span-1">
								<div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 shadow-xl transform hover:scale-105 transition-all duration-300"
									 style={{clipPath: 'polygon(0 0, 90% 0, 100% 20%, 90% 100%, 0 100%)'}}>
									
									{/* Inner glow effect */}
									<div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-pink-600/10"
										 style={{clipPath: 'polygon(0 0, 90% 0, 100% 20%, 90% 100%, 0 100%)'}}></div>
									
									<div className="relative space-y-6">
										<div>
											<h3 className="text-xl font-bold text-white mb-2">
												Join the 
												<span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 font-black">
													ALTITUDE
												</span>
											</h3>
											<p className="text-gray-400 text-sm">
												Get exclusive content and reach new fitness peaks
											</p>
										</div>

										<div className="space-y-4">
											<input
												type="email"
												placeholder="Enter your email"
												className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors duration-300"
												style={{clipPath: 'polygon(0 0, 95% 0, 100% 25%, 95% 100%, 0 100%)'}}
											/>
											
											<button
												className="group w-full bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-bold py-3 px-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
												style={{clipPath: 'polygon(0 0, 85% 0, 100% 40%, 85% 100%, 0 100%)'}}>
												<span>SUBSCRIBE</span>
												<div className="ml-2 w-5 h-5 bg-white/20 flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
													<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
													</svg>
												</div>
											</button>
										</div>

										{/* Stats mini display */}
										<div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-700">
											<div className="text-center">
												<div className="text-violet-400 font-bold text-sm">2K+</div>
												<div className="text-gray-500 text-xs">Subscribers</div>
											</div>
											<div className="text-center">
												<div className="text-emerald-400 font-bold text-sm">100+</div>
												<div className="text-gray-500 text-xs">Articles</div>
											</div>
											<div className="text-center">
												<div className="text-pink-400 font-bold text-sm">24/7</div>
												<div className="text-gray-500 text-xs">Support</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom section with copyright */}
					<div className="border-t border-gray-700/50 py-8">
						<div className="flex flex-col md:flex-row items-center justify-between gap-4">
							<div className="flex items-center space-x-6">
								<div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-pink-500"></div>
								<div className="w-3 h-3 bg-violet-500 transform rotate-45"></div>
								<div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
							</div>
							
							<p className="text-center text-sm text-gray-400">
								&copy; {new Date().getFullYear()} Fitness Altitude. All rights reserved. Reaching new heights in fitness.
							</p>
							
							<div className="flex items-center space-x-6">
								<div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
								<div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
								<div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
							</div>
						</div>
					</div>
				</div>
			</Container>

			{/* Add custom styles */}
			<style >{`
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
		</footer>
	)
}