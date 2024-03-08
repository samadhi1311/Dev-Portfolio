import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';
import NavigationBar from '../components/NavigationBar';
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';
import { IconWorld, IconFileBroken, IconSignature } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import Overnight from '../assets/overnight.png';
import Probe from '../assets/probe.png';
import Sithu from '../assets/sithu-light.svg';

const Skeleton1 = () => (
	<div className='flex flex-1 w-full h-full min-h-[8rem] aspect-video rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black/50'>
		<img src={Overnight} alt='' className='object-cover w-full h-full rounded-xl' />
	</div>
);

const Skeleton2 = () => (
	<div className='flex flex-1 w-full h-full min-h-[8rem] aspect-video rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black/50'>
		<img src='https://source.unsplash.com/random' alt='' className='object-cover w-full h-full rounded-xl' />
	</div>
);

const Skeleton3 = () => (
	<div className='flex flex-1 w-full h-full min-h-[8rem] aspect-video rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black/50'>
		<img src='https://source.unsplash.com/random' alt='' className='object-cover w-full h-full rounded-xl' />
	</div>
);

const Skeleton4 = () => (
	<div className='flex flex-1 w-full h-full aspect-video min-h-[8rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black/50'>
		<img src={Probe} alt='' className='object-cover w-full h-full rounded-xl' />
	</div>
);

const items = [
	{
		title: 'Overnight',
		description: 'Portfolio for graphical artists.',
		header: <Skeleton1 />,
		className: 'md:col-span-2',
		icon: <img src={Sithu} id='sithu' className='object-cover object-left h-8 invert dark:invert-0' />,
		url: 'https://Sithruby.github.io/overnight',
	},
	{
		title: 'Another Awesome Project',
		description: 'Such a catchy description.',
		header: <Skeleton2 />,
		className: 'md:col-span-1',
		icon: <IconFileBroken className='w-8 h-8 text-neutral-500' />,
		url: 'https://github.com/Sithruby',
	},
	{
		title: 'Yet Another Awesome Project',
		description: 'Never heard of a better description.',
		header: <Skeleton3 />,
		className: 'md:col-span-1',
		icon: <IconSignature className='w-8 h-8 text-neutral-500' />,
		url: 'https://github.com/Sithruby',
	},
	{
		title: 'Probe',
		description: 'Get most out of your browser history.',
		header: <Skeleton4 />,
		className: 'md:col-span-2',
		icon: <IconWorld className='w-8 h-8 text-blue-400' />,
		url: 'https://github.com/samadhi1311/Probe',
	},
];

function Projects() {
	return (
		<BackgroundGradientAnimation interactive={false} size={'100%'} className='w-screen h-screen mt-8 -z-50'>
			<header>
				<NavigationBar />
			</header>
			<AnimatePresence mode='popLayout'>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}>
					<main className='absolute inset-0 z-10' key={'projects'}>
						<div className='absolute inset-0 z-50 flex items-center justify-center px-4' style={{ zIndex: 999 }}>
							<BentoGrid className='max-w-4xl mx-auto md:auto-rows-[20rem] z-50'>
								{items.map((item, i) => (
									<BentoGridItem key={i} title={item.title} description={item.description} header={item.header} className={item.className} icon={item.icon} url={item.url} />
								))}
							</BentoGrid>
						</div>
					</main>
				</motion.div>
			</AnimatePresence>
		</BackgroundGradientAnimation>
	);
}
export default Projects;
