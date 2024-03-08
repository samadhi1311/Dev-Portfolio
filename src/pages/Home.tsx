import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';
import NavigationBar from '../components/NavigationBar';
import logo from '../assets/sithruby-light.svg';

function Home() {
	return (
		<>
			<BackgroundGradientAnimation interactive={true} size={'100%'} className='h-screen -z-50 pt-8'>
				<header data-barba='wrapper'>
					<NavigationBar />
				</header>
				<main data-barba='container'>
					<div className='absolute inset-0 z-50 flex items-center justify-center px-4 text-3xl font-bold text-center text-white pointer-events-none md:text-4xl lg:text-7xl'>
						<img src={logo} className='w-1/3' alt='Sithu i love you so much...' />
					</div>
				</main>
			</BackgroundGradientAnimation>
		</>
	);
}
export default Home;
