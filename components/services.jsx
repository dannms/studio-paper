import SInfo from './services-info';
import { servicesInfo } from '../libs/constants';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

const servicesItems = {
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

const Services = () => {
	return (
		<section id="servicos" className="py-20">
			<div className="grid grid-cols-1 gap-32">
				<div className="flex items-center gap-3">
					<ArrowUpRightIcon className="w-5 h-5 text-gold" />
					<h2 className="font-mono">Serviços</h2>
				</div>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={servicesItems}
					className="grid grid-cols-1 lg:grid-cols-3 gap-12"
				>
					{servicesInfo.map((item, index) => (
						<SInfo
							key={index}
							icon={item.icon}
							name={item.name}
							description={item.info}
							items={item.service}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
