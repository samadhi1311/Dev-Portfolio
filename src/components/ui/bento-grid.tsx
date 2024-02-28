import { cn } from '../../utils/cn';
import React from 'react';

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
	return <div className={cn('grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ', className)}>{children}</div>;
};

export const BentoGridItem = ({
	className,
	title,
	description,
	header,
	icon,
	url,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	header?: React.ReactNode;
	icon?: React.ReactNode;
	url?: string;
}) => {
	return (
		<div
			className={cn(
				'row-span-1 rounded-xl group/bento hover:shadow-xl transition ease-linear duration-300 shadow-input dark:shadow-none p-4 dark:bg-black/80 dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4',
				className
			)}
			onClick={() => url && window.open(url, '_blank')}>
			{header}
			<div className='transition duration-300 ease-linear group-hover/bento:translate-x-2'>
				{icon}
				<div className='mt-1 mb-1 font-sans font-bold text-neutral-600 dark:text-neutral-200'>{title}</div>
				<div className='font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300'>{description}</div>
			</div>
		</div>
	);
};
