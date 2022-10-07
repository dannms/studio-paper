import Image from 'next/image';
import brand from '../public/studiopaper.svg';
import { motion } from 'framer-motion';
import Values from './values';
import { manifestoInfo } from '../libs/constants';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

const intro = [
	`Conectar, comunicar e inspirar. Projetamos estratégias,
marcas, sites, interfaces e embalagens especializados em
criar valor significativo e experiências positivas para nossos clientes e seus usuários.`,
];

const Manifesto = () => {
	return (
		<section id="sobre" className="py-20">
			<div className="grid grid-cols-1 gap-12">
				<div className="flex items-center gap-3">
					<ArrowUpRightIcon className="w-5 h-5 text-gold" />
					<h2 className="font-mono">Um pouco sobre nós</h2>
				</div>
				<div className="relative flex flex-col gap-12">
					<div className="text-2xl lg:text-6xl lg:leading-tight max-w-lg lg:max-w-4xl">
						{intro}
					</div>
					<div className="relative flex items-center justify-end lg:absolute bottom-0 right-0">
						<Image src={brand} alt="Studio Paper" />
					</div>
				</div>
				<div className="flex flex-col items-center">
					{manifestoInfo.map((item, index) => (
						<div
							key={index}
							className="w-full flex flex-col items-center"
						>
							<motion.div
								initial={{ width: '0%' }}
								whileInView={{
									width: '100%',
									transition: {
										type: 'spring',
										duration: 1.5,
										stiffness: 30,
									},
								}}
								viewport={{ once: true }}
								className="h-px bg-gold"
							/>
							<Values id={item.id} category={item.name} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Manifesto;
