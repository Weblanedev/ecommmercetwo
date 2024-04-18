import { Logo } from '@/lib/components/shared/logo'
import { TCategories } from '@/lib/definitions'
import Link from 'next/link'


export const Footer = ({ categories }: { categories: TCategories }) => {

	return (<>
		<footer className="mt-auto bg-white py-16 dark:border-t dark:border-gray-300 dark:bg-gray-900">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div>
						<Link className="block text-teal-600" href="/">
							<Logo />
						</Link>

						<p
							className="mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 sm:max-w-xs sm:text-left"
						>
							Your go-to app for unbeatable shopping deals. Explore a world of savings today!
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
						<div className="text-center sm:text-left">
							<p className="text-lg font-medium text-gray-900 dark:text-white">About Us</p>

							<ul className="mt-8 space-y-4 text-sm">
								<li>
									<Link
										className="capitalize text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
										href="/company-history"
									>
										Company History
									</Link>
								</li>

								<li>
									<Link
										className="capitalize text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
										href="/contact-us"
									>
										Contact Us
									</Link>
								</li>
							</ul>
						</div>

						<div className="text-center sm:text-left">
							<p className="text-lg font-medium text-gray-900 dark:text-white">Helpful Links</p>

							<ul className="mt-8 space-y-4 text-sm">
								<li>
									<Link
										className="capitalize text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
										href="/faq"
									>
										FAQs
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-300">
					<div className="text-center sm:flex sm:justify-between sm:text-left">
						<p className="text-sm text-gray-500 dark:text-gray-400">
							<span className="block sm:inline">All rights reserved.</span>
						</p>

						<p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:order-first sm:mt-0">
							&copy; <span>{new Date().getFullYear()}</span> Fake Store
						</p>
					</div>
				</div>
			</div>
		</footer>
	</>
	)
}

