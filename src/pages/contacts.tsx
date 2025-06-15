import { ContactForm } from '../components/shared/contact-form'

export function ContactsPage() {
	return (
		<>
			{/* Hero Section */}
			<section className='relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 py-20 lg:py-32 overflow-hidden'>
				{/* Dynamic floating particles */}
				<div className='absolute inset-0 pointer-events-none'>
					<div className='absolute top-20 left-1/4 w-2 h-48 bg-gradient-to-b from-cyan-500 to-transparent transform rotate-12 opacity-40 animate-pulse'></div>
					<div className='absolute top-1/3 right-1/4 w-32 h-2 bg-gradient-to-r from-purple-500 to-transparent transform -rotate-45 opacity-30'></div>
					<div className='absolute bottom-1/4 left-1/3 w-1 h-64 bg-gradient-to-t from-emerald-500 to-transparent transform rotate-45 opacity-50'></div>
					<div className='absolute top-1/2 left-1/2 w-40 h-40 border-2 border-violet-400 transform rotate-45 opacity-10 animate-spin-slow'></div>
				</div>

				<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						{/* Geometric background accent */}
						<div className='relative inline-block mb-12'>
							<div className='absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-violet-500/20 to-pink-500/20 transform rotate-45 opacity-60'></div>
							
							{/* Main title with split effect */}
							<div className='relative overflow-hidden'>
								<h1 className='text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight'>
									<span className='block transform hover:translate-x-3 transition-transform duration-500'>
										REACH NEW
									</span>
									<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 transform hover:-translate-x-3 transition-transform duration-500 -mt-3'>
										HEIGHTS
									</span>
								</h1>
								
								{/* Dynamic cutting line */}
								<div className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent transform -translate-y-1/2 opacity-40'></div>
							</div>

							{/* Floating decorative elements */}
							<div className='absolute -top-6 -left-6 w-6 h-6 bg-yellow-400 transform rotate-45 animate-pulse'></div>
							<div className='absolute -bottom-8 -right-8 w-8 h-8 bg-emerald-500 rounded-full animate-bounce'></div>
						</div>

						{/* Subtitle with highlight */}
						<div className='space-y-4 max-w-4xl mx-auto'>
							<p className='text-xl lg:text-2xl text-gray-300 font-medium leading-relaxed'>
								Connect with the 
								<span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 rounded-lg font-bold mx-2 transform inline-block hover:scale-105 transition-transform duration-300'>
									FITNESS ALTITUDE
								</span>
								community
							</p>
							<p className='text-lg text-gray-400'>
								Ready to elevate your fitness journey? Get in touch and let's conquer new peaks together.
							</p>
						</div>

						{/* Decorative elements */}
						<div className='mt-12 flex justify-center items-center space-x-6'>
							<div className='w-16 h-1 bg-gradient-to-r from-violet-500 to-purple-600'></div>
							<div className='w-4 h-4 bg-violet-500 transform rotate-45'></div>
							<div className='w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600'></div>
						</div>
					</div>
				</div>
			</section>

			{/* Main Contact Section */}
			<section className='relative bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 py-20 lg:py-32 overflow-hidden'>
				{/* Dynamic floating particles */}
				<div className='absolute inset-0 pointer-events-none'>
					<div className='absolute top-16 left-1/4 w-2 h-40 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse'></div>
					<div className='absolute top-1/3 right-1/4 w-28 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-40'></div>
					<div className='absolute bottom-1/4 left-1/6 w-1 h-52 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-35'></div>
					<div className='absolute top-1/2 right-1/3 w-32 h-32 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow'></div>
				</div>

				<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					
					{/* Revolutionary split layout */}
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
						
						{/* Left side - Dynamic image with geometric design */}
						<div className='order-2 lg:order-1'>
							<div className='relative group'>
								
								{/* Background geometric shapes */}
								<div className='absolute -inset-8 opacity-20'>
									<div className='absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-700 transform rotate-45 group-hover:rotate-90 transition-transform duration-500'></div>
									<div className='absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-full group-hover:scale-150 transition-transform duration-500'></div>
								</div>

								{/* Main image container with clip-path */}
								<div className='relative overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500'
									 style={{clipPath: 'polygon(0 0, 90% 0, 100% 20%, 90% 100%, 0 100%)'}}>
									
									{/* Diamond-shaped image overlay */}
									<div className='relative h-96 lg:h-[500px] overflow-hidden'>
										<img
											className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000'
											src='https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
											alt='FITNESS ALTITUDE - Reaching New Heights'
										/>
										<div className='absolute inset-0 bg-gradient-to-br from-violet-600/20 to-pink-600/20'></div>
										
										{/* Animated overlay pattern */}
										<div className='absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500'>
											<div className='absolute top-8 left-8 w-8 h-8 border-2 border-white transform rotate-45 group-hover:rotate-90 transition-transform duration-500'></div>
											<div className='absolute bottom-8 right-8 w-6 h-6 bg-white rounded-full group-hover:scale-150 transition-transform duration-500'></div>
											<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-white group-hover:w-24 transition-all duration-500'></div>
										</div>
									</div>
								</div>

								{/* Floating accent elements */}
								<div className='absolute -top-4 -right-4 w-10 h-10 bg-yellow-400 transform rotate-45 animate-bounce'></div>
								<div className='absolute -bottom-6 -left-6 w-8 h-8 bg-emerald-500 rounded-full animate-pulse'></div>

								{/* Stats overlay */}
								<div className='absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 shadow-lg transform group-hover:scale-105 transition-transform duration-300'
									 style={{clipPath: 'polygon(0 0, 85% 0, 100% 40%, 85% 100%, 0 100%)'}}>
									<div className='flex items-center space-x-4'>
										<div className='w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg'
											 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
											FA
										</div>
										<div>
											<div className='text-sm font-bold text-gray-900'>2K+ Athletes</div>
											<div className='text-xs text-gray-600'>Reaching New Heights</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Right side - Contact form with geometric design */}
						<div className='order-1 lg:order-2'>
							<div className='relative'>
								
								{/* Geometric background accent */}
								<div className='absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-violet-500/10 to-pink-500/10 transform rotate-45 opacity-60'></div>
								
								{/* Section title */}
								<div className='mb-12'>
									<div className='relative inline-block'>
										<h2 className='text-4xl lg:text-5xl font-black text-gray-900 leading-tight'>
											<span className='block transform hover:translate-x-2 transition-transform duration-500'>
												START YOUR
											</span>
											<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 transform hover:-translate-x-2 transition-transform duration-500 -mt-2'>
												ASCENT
											</span>
										</h2>
										
										{/* Dynamic cutting line */}
										<div className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent transform -translate-y-1/2 opacity-40'></div>
									</div>

									<div className='mt-6 space-y-4'>
										<p className='text-lg text-gray-700 font-medium leading-relaxed'>
											Ready to elevate your fitness journey? Connect with our team and discover how 
											<span className='text-violet-600 font-bold'> FITNESS ALTITUDE</span> 
											can help you reach unprecedented heights.
										</p>
										<p className='text-gray-600'>
											Whether you're seeking expert guidance, partnership opportunities, or simply want to share your fitness story, we're here to support your climb to the summit.
										</p>
									</div>

									{/* Contact highlights */}
									<div className='mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4'>
										<div className='text-center p-4 bg-gradient-to-br from-violet-50 to-purple-100 transform hover:scale-105 transition-transform duration-300'
											 style={{clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'}}>
											<div className='text-violet-600 font-bold text-lg'>24/7</div>
											<div className='text-sm text-gray-600'>Support</div>
										</div>
										<div className='text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-100 transform hover:scale-105 transition-transform duration-300'
											 style={{clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'}}>
											<div className='text-emerald-600 font-bold text-lg'>Expert</div>
											<div className='text-sm text-gray-600'>Guidance</div>
										</div>
										<div className='text-center p-4 bg-gradient-to-br from-pink-50 to-rose-100 transform hover:scale-105 transition-transform duration-300'
											 style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 15% 100%)'}}>
											<div className='text-pink-600 font-bold text-lg'>Personal</div>
											<div className='text-sm text-gray-600'>Approach</div>
										</div>
									</div>
								</div>

								{/* Contact form container with geometric design */}
								<div className='relative bg-white p-8 lg:p-10 shadow-2xl transform hover:scale-105 transition-all duration-500'
									 style={{clipPath: 'polygon(0 0, 95% 0, 100% 10%, 90% 100%, 0 100%)'}}>
									
									{/* Inner glow effect */}
									<div className='absolute inset-0 bg-gradient-to-br from-violet-600/5 to-pink-600/5'
										 style={{clipPath: 'polygon(0 0, 95% 0, 100% 10%, 90% 100%, 0 100%)'}}></div>
									
									<div className='relative'>
										<ContactForm />
									</div>

									{/* Decorative elements */}
									<div className='absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 transform rotate-45 animate-pulse'></div>
									<div className='absolute -bottom-3 -left-3 w-6 h-6 bg-emerald-500 rounded-full animate-bounce'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Bottom CTA Section */}
			<section className='relative bg-gradient-to-r from-violet-600 to-purple-700 py-16 overflow-hidden'>
				{/* Dynamic floating particles */}
				<div className='absolute inset-0 pointer-events-none'>
					<div className='absolute top-8 left-1/4 w-2 h-32 bg-gradient-to-b from-white to-transparent transform rotate-12 opacity-20 animate-pulse'></div>
					<div className='absolute bottom-8 right-1/4 w-24 h-2 bg-gradient-to-r from-white to-transparent transform -rotate-45 opacity-15'></div>
				</div>

				<div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h3 className='text-3xl lg:text-4xl font-black text-white mb-6'>
						JOIN THE 
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500'>
							ALTITUDE COMMUNITY
						</span>
					</h3>
					<p className='text-lg text-white/90 mb-8 max-w-2xl mx-auto'>
						Subscribe to our newsletter and get exclusive fitness content, expert tips, and motivational stories delivered straight to your inbox.
					</p>
					
					<div className='flex justify-center space-x-8'>
						<div className='w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent'></div>
						<div className='w-2 h-2 bg-white transform rotate-45'></div>
						<div className='w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent'></div>
					</div>
				</div>
			</section>
		</>
	)
}

// Add styles to head if not already present
if (typeof document !== 'undefined' && !document.getElementById('contacts-page-styles')) {
	const style = document.createElement('style')
	style.id = 'contacts-page-styles'
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

		/* Responsive adjustments for mobile */
		@media (max-width: 768px) {
			/* Disable clip-path on mobile for better compatibility */
			.lg\\:clip-path-none {
				clip-path: none !important;
			}
		}

		/* Ensure proper spacing and alignment */
		.contact-form-container {
			min-height: 400px;
		}

		/* Custom hover effects */
		.contact-stat-card:hover {
			transform: translateY(-4px) scale(1.05);
		}

		/* Gradient text animation */
		@keyframes gradient-shift {
			0% { background-position: 0% 50%; }
			50% { background-position: 100% 50%; }
			100% { background-position: 0% 50%; }
		}

		.animated-gradient {
			background: linear-gradient(-45deg, #8B5CF6, #EC4899, #10B981, #F59E0B);
			background-size: 400% 400%;
			animation: gradient-shift 3s ease infinite;
		}
	`
	document.head.appendChild(style)
}