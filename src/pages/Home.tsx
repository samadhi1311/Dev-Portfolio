import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';
import NavigationBar from '../components/NavigationBar';
import logo from '../assets/sithruby-light.svg';
import { motion, AnimatePresence } from 'framer-motion';

function Home() {
	return (
		<BackgroundGradientAnimation interactive={false} size={'100%'} className='h-screen mt-8 -z-50'>
			<header data-barba='wrapper'>
				<NavigationBar />
			</header>
			<AnimatePresence mode='popLayout'>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}>
					<main key={'home'}>
						<div className='absolute inset-0 z-50 flex items-center justify-center px-4 pointer-events-none'>
							<img src={logo} className='w-1/3' alt='Sithu i love you so much...' />
						</div>
					</main>
				</motion.div>
			</AnimatePresence>
		</BackgroundGradientAnimation>
	);
}
export default Home;
