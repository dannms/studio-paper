import Image from 'next/image';
import { motion } from 'framer-motion';
import Typed from 'react-typed';
import scrolldown from '../public/images/scroll-down.svg';
import { useRouter } from 'next/router';

const heroItems = {
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.2,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
		},
	},
};

const item = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: 10 },
};

const Hero = () => {
	const router = useRouter();

	return (
		<section className="min-h-screen w-full flex items-end justify-between py-20">
			<motion.div
				initial="hidden"
				animate="visible"
				variants={heroItems}
				className=" flex flex-col max-w-xl gap-6"
			>
				<motion.div variants={item} className="flex gap-2 font-mono">
					<span>Design</span>
					<span>+</span>
					<Typed
						className="text-gold"
						strings={['Conexão', 'Comunicação', 'Inspiração']}
						typeSpeed={120}
						backSpeed={100}
						loop
					/>
				</motion.div>
				<motion.h1 variants={item} className="text-7xl font-black">
					Studio Paper
				</motion.h1>
				<motion.p variants={item} className="text-xl">
					Somos um estúdio de design e desenvolvimento focado em dar
					vida a suas ideias.
				</motion.p>
			</motion.div>
			<div className="relative w-16 h-16">
				<Image
					src={scrolldown}
					alt="Scroll Down"
					className="animate-spin-slow"
				/>
			</div>
		</section>
	);
};

export default Hero;