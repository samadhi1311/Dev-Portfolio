import { Link } from 'react-router-dom';
import './NavigationBar.css';
export default function NavigationBar() {
	return (
		<header className='z-50 flex justify-center gap-8 my-4'>
			<Link className='nav-link' to='/Dev-Portfolio/'>
				_home
			</Link>
			<Link className='nav-link' to='/Dev-Portfolio/projects'>
				_projects
			</Link>
		</header>
	);
}
