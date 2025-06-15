import { Container } from '../components/shared/container'

export const PrivacyPolicyPage = () => {
	return (
		<div className='relative bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 min-h-screen overflow-hidden'>
			{/* Dynamic floating particles */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-20 left-1/4 w-2 h-48 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-32 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-40'></div>
				<div className='absolute bottom-1/4 left-1/3 w-1 h-64 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-35'></div>
				<div className='absolute top-1/2 right-1/6 w-24 h-24 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow'></div>
			</div>

			<Container className='relative z-10 py-16 lg:py-24'>
				
				{/* Revolutionary header design */}
				<div className='text-center mb-20'>
					<div className='relative inline-block'>
						{/* Geometric background accent */}
						<div className='absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-violet-500/10 to-pink-500/10 transform rotate-45 opacity-80'></div>
						<div className='absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full opacity-60'></div>
						
						{/* Main title with split effect */}
						<div className='relative overflow-hidden'>
							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight'>
								<span className='block transform hover:translate-x-3 transition-transform duration-500'>
									PRIVACY
								</span>
								<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 transform hover:-translate-x-3 transition-transform duration-500 -mt-2'>
									POLICY
								</span>
							</h1>
							
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
							Your privacy is our 
							<span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 rounded-lg font-bold mx-2 transform inline-block hover:scale-105 transition-transform duration-300'>
								highest priority
							</span>
							at FITNESS ALTITUDE
						</p>
						<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
							Transparent practices, secure data handling, and your complete control over your information
						</p>
					</div>

					{/* Decorative line separator */}
					<div className='mt-8 flex justify-center items-center space-x-6'>
						<div className='w-16 h-1 bg-gradient-to-r from-violet-500 to-purple-600'></div>
						<div className='w-4 h-4 bg-violet-500 transform rotate-45'></div>
						<div className='w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600'></div>
					</div>
				</div>

				{/* Content sections with geometric design */}
				<div className='max-w-4xl mx-auto space-y-12'>
					
					{/* Section 1 - Information Collection */}
					<div className='group relative'>
						<div className='relative bg-gradient-to-br from-white to-violet-50 p-8 lg:p-10 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 clip-path-slant-left'>
							{/* Inner glow effect */}
							<div className='absolute inset-0 bg-gradient-to-br from-violet-600/5 to-pink-600/5 group-hover:from-violet-600/10 group-hover:to-pink-600/10 transition-all duration-500 clip-path-slant-left'></div>
							
							<div className='relative z-10'>
								<div className='flex items-center space-x-4 mb-6'>
									<div className='w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500'
										 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
										<div className='text-white font-bold text-lg'>01</div>
									</div>
									<h2 className='text-2xl lg:text-3xl font-bold text-gray-900'>Information We Collect</h2>
								</div>
								
								<div className='space-y-4 text-gray-700 leading-relaxed'>
									<p>
										Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our FITNESS ALTITUDE website and use our services.
									</p>
									<p>
										We collect information about you in a variety of ways, including personal data you provide directly to us and data collected automatically through your use of our site. This includes fitness preferences, workout history, and engagement metrics to enhance your experience.
									</p>
								</div>
							</div>
							
							{/* Floating accent */}
							<div className='absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg transform group-hover:scale-125 group-hover:rotate-180 transition-all duration-500 flex items-center justify-center'>
								<div className='w-2 h-2 bg-white rounded-full'></div>
							</div>
						</div>
					</div>

					{/* Section 2 - Data Usage */}
					<div className='group relative'>
						<div className='relative bg-gradient-to-br from-white to-emerald-50 p-8 lg:p-10 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 clip-path-slant-right'>
							{/* Inner glow effect */}
							<div className='absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-cyan-600/5 group-hover:from-emerald-600/10 group-hover:to-cyan-600/10 transition-all duration-500 clip-path-slant-right'></div>
							
							<div className='relative z-10'>
								<div className='flex items-center space-x-4 mb-6'>
									<div className='w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500'
										 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
										<div className='text-white font-bold text-lg'>02</div>
									</div>
									<h2 className='text-2xl lg:text-3xl font-bold text-gray-900'>How We Use Your Data</h2>
								</div>
								
								<div className='space-y-4 text-gray-700 leading-relaxed'>
									<p>
										The information we collect may be used to personalize your fitness experience, improve our website content, provide customer service, and deliver relevant workout recommendations tailored to your goals.
									</p>
									<p>
										We <span className='font-bold text-emerald-600'>never sell or rent</span> your personal information to third parties. Your data is used exclusively to enhance your FITNESS ALTITUDE experience and provide you with valuable fitness content.
									</p>
								</div>
							</div>
							
							{/* Floating accent */}
							<div className='absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow-lg transform group-hover:scale-125 group-hover:rotate-180 transition-all duration-500 flex items-center justify-center'>
								<div className='w-2 h-2 bg-white rounded-full'></div>
							</div>
						</div>
					</div>

					{/* Section 3 - Security */}
					<div className='group relative'>
						<div className='relative bg-gradient-to-br from-white to-pink-50 p-8 lg:p-10 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 clip-path-corner-cut'>
							{/* Inner glow effect */}
							<div className='absolute inset-0 bg-gradient-to-br from-pink-600/5 to-rose-600/5 group-hover:from-pink-600/10 group-hover:to-rose-600/10 transition-all duration-500 clip-path-corner-cut'></div>
							
							<div className='relative z-10'>
								<div className='flex items-center space-x-4 mb-6'>
									<div className='w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-700 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500'
										 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
										<div className='text-white font-bold text-lg'>03</div>
									</div>
									<h2 className='text-2xl lg:text-3xl font-bold text-gray-900'>Security Measures</h2>
								</div>
								
								<div className='space-y-4 text-gray-700 leading-relaxed'>
									<p>
										We implement industry-standard security measures to maintain the safety of your personal information. Our systems use encryption, secure servers, and regular security updates to protect your data.
									</p>
									<p>
										However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
									</p>
								</div>
							</div>
							
							{/* Floating accent */}
							<div className='absolute -bottom-3 -right-3 w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full shadow-lg transform group-hover:scale-125 group-hover:rotate-180 transition-all duration-500 flex items-center justify-center'>
								<div className='w-2 h-2 bg-white rounded-full'></div>
							</div>
						</div>
					</div>

					{/* Section 4 - Updates & Consent */}
					<div className='group relative'>
						<div className='relative bg-gradient-to-br from-white to-indigo-50 p-8 lg:p-10 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 clip-path-slant-left'>
							{/* Inner glow effect */}
							<div className='absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500 clip-path-slant-left'></div>
							
							<div className='relative z-10'>
								<div className='flex items-center space-x-4 mb-6'>
									<div className='w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500'
										 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
										<div className='text-white font-bold text-lg'>04</div>
									</div>
									<h2 className='text-2xl lg:text-3xl font-bold text-gray-900'>Updates & Your Rights</h2>
								</div>
								
								<div className='space-y-4 text-gray-700 leading-relaxed'>
									<p>
										We may update this Privacy Policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes via email or website notification.
									</p>
									<p>
										By using FITNESS ALTITUDE, you hereby consent to our Privacy Policy and agree to its terms. You have the right to access, modify, or delete your personal information at any time by contacting our support team.
									</p>
								</div>
							</div>
							
							{/* Floating accent */}
							<div className='absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg transform group-hover:scale-125 group-hover:rotate-180 transition-all duration-500 flex items-center justify-center'>
								<div className='w-2 h-2 bg-white rounded-full'></div>
							</div>
						</div>
					</div>

					{/* Additional Important Information */}
					<div className='grid md:grid-cols-2 gap-8'>
						{/* Data Accuracy */}
						<div className='group relative'>
							<div className='relative bg-gradient-to-br from-white to-cyan-50 p-6 lg:p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-lg border-l-4 border-cyan-500'>
								<div className='flex items-center space-x-3 mb-4'>
									<div className='w-8 h-8 bg-cyan-500 flex items-center justify-center rounded-full'>
										<div className='w-3 h-3 bg-white rounded-full'></div>
									</div>
									<h3 className='text-xl font-bold text-gray-900'>Data Accuracy</h3>
								</div>
								<p className='text-gray-700 leading-relaxed'>
									We strive to keep your information accurate and up to date. If you notice any inaccuracies in your personal data, please contact us so we can make the necessary corrections promptly.
								</p>
							</div>
						</div>

						{/* Third-Party Services */}
						<div className='group relative'>
							<div className='relative bg-gradient-to-br from-white to-amber-50 p-6 lg:p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-lg border-l-4 border-amber-500'>
								<div className='flex items-center space-x-3 mb-4'>
									<div className='w-8 h-8 bg-amber-500 flex items-center justify-center rounded-full'>
										<div className='w-3 h-3 bg-white rounded-full'></div>
									</div>
									<h3 className='text-xl font-bold text-gray-900'>Third-Party Services</h3>
								</div>
								<p className='text-gray-700 leading-relaxed'>
									Our website may contain features or services provided by third parties. Any information you provide to these services is subject to their privacy policies, not ours.
								</p>
							</div>
						</div>
					</div>

					{/* Children's Privacy Notice */}
					<div className='relative bg-gradient-to-br from-gray-900 to-purple-900 p-8 lg:p-10 shadow-2xl transform hover:scale-105 transition-all duration-500 rounded-lg overflow-hidden'>
						{/* Background pattern */}
						<div className='absolute inset-0 opacity-10'>
							<div className='absolute top-4 left-4 w-8 h-8 border-2 border-white transform rotate-45'></div>
							<div className='absolute bottom-4 right-4 w-6 h-6 bg-white rounded-full'></div>
							<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-white'></div>
						</div>

						<div className='relative z-10'>
							<div className='flex items-center space-x-4 mb-6'>
								<div className='w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg'
									 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
									<div className='text-gray-900 font-bold text-lg'>⚠</div>
								</div>
								<h3 className='text-2xl lg:text-3xl font-bold text-white'>Children's Privacy Protection</h3>
							</div>
							
							<p className='text-gray-300 text-lg leading-relaxed'>
								We are committed to protecting the privacy of children. FITNESS ALTITUDE services are intended for individuals 13 years of age and older. We do not knowingly collect personal information from children under 13 years of age.
							</p>
						</div>
					</div>
				</div>

				{/* Contact section */}
				<div className='mt-20 text-center'>
					<div className='relative inline-block'>
						{/* Background accent */}
						<div className='absolute -inset-6 bg-gradient-to-r from-violet-100 to-pink-100 transform rotate-1 opacity-60'></div>
						
						<div className='relative space-y-6'>
							<h3 className='text-2xl lg:text-3xl font-bold text-gray-900'>
								Questions About Your Privacy?
							</h3>
							<p className='text-gray-600 text-lg max-w-2xl mx-auto'>
								We're here to help. Contact our support team if you have any questions about how we handle your data.
							</p>
							
							<a
								href='/contacts'
								className='group inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300'
								style={{clipPath: 'polygon(0 0, 90% 0, 100% 30%, 90% 100%, 0 100%)'}}>
								
								<span className='flex items-center'>
									CONTACT US
									<div className='ml-3 w-6 h-6 bg-white/20 flex items-center justify-center transform group-hover:translate-x-2 group-hover:rotate-12 transition-all duration-300'>
										<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
										</svg>
									</div>
								</span>
							</a>
						</div>
						
						{/* Floating decorative elements */}
						<div className='absolute -top-4 -right-4 w-6 h-6 bg-yellow-400 transform rotate-45 animate-bounce'></div>
						<div className='absolute -bottom-4 -left-4 w-4 h-4 bg-emerald-500 rounded-full animate-pulse'></div>
					</div>
				</div>

				{/* Bottom decorative line */}
				<div className='mt-16 flex justify-center space-x-8'>
					<div className='w-32 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent'></div>
					<div className='w-2 h-2 bg-violet-500 transform rotate-45'></div>
					<div className='w-32 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
				</div>
			</Container>

			<style>{`
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

				/* Mobile responsiveness */
				@media (max-width: 768px) {
					.clip-path-slant-left,
					.clip-path-slant-right,
					.clip-path-corner-cut {
						clip-path: none;
						border-radius: 0.5rem;
					}
				}
			`}</style>
		</div>
	)
}