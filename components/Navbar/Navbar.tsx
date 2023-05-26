import {
	BuildingLibraryIcon,
	UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { NavItem } from './NavItem';
import CollapseNavbar from '@/app/HiddenNavigation';
import DarkModeBtn from '../DarkModeBtn';

export default function Navbar({
	menu,
}: {
	menu: Array<{ label: string; link: string }>;
}) {
	return (
		<>
			<nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					{/* Logo and website name */}
					<a
						href="http://localhost:3000"
						className="flex items-end space-x-2"
					>
						<BuildingLibraryIcon className="w-10 h-10 dark:text-white" />
						<span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
							OpenLibrary
						</span>
					</a>

					{/* nav items */}
					<div className="hidden w-full md:flex md:w-auto items-center justify-center space-x-8">
						<div>
							<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
								<DarkModeBtn />
								{menu.map((l) => (
									<NavItem
										key={l.label}
										label={l.label}
										link={l.link}
									/>
								))}
							</ul>
						</div>
						<div className="flex space-x-2 justify-center items-center">
							<Link href="/profile" passHref>
								<div className="h-11 w-11 rounded-full border-2 border-transparent hover:border-primary-600 ">
									<UserCircleIcon className="w-10 h-10 bg-white rounded-full dark:bg-transparent dark:text-white" />
								</div>
							</Link>
						</div>
					</div>
					<CollapseNavbar links={menu} />
				</div>
			</nav>
		</>
	);
}