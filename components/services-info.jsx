import { motion } from 'framer-motion';
import Image from 'next/image';

const motionCard = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: 10 },
};

const motionItem = {
	rest: {
		opacity: 0.5,
	},
	hover: {
		opacity: 1,
	},
};

const SInfo = ({ name, icon, description, items }) => {
	return (
		<motion.div
			variants={motionCard}
			className="w-full flex flex-col gap-4"
		>
			<div className="relative aspect-square w-8 h-8">
				<Image src={icon} alt={name} layout="fill" />
			</div>
			<div className="font-mono font-bold">{name}</div>
			<div className="py-4 flex grow">{description}</div>
			<div>
				<ul className="flex flex-wrap gap-3">
					{items.map((item, index) => (
						<li key={index}>
							<motion.small
								initial="rest"
								whileHover="hover"
								animate="rest"
								variants={motionItem}
								className="cursor-default"
							>
								{item}
							</motion.small>
						</li>
					))}
				</ul>
			</div>
		</motion.div>
	);
};

export default SInfo;
