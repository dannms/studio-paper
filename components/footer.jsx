import { ArrowUpRightIcon, MapPinIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { socialLinks } from '../libs/constants';

const linkMotion = {
	rest: {
		borderColor: '#DDE5ED',
	},
	hover: {
		borderColor: '#EFBE7D',
	},
};

const Footer = () => {
	return (
		<footer id="contato" className="flex flex-col gap-12">
			<div className="grid grid-cols-1 gap-12">
				<div className="flex items-center gap-3">
					<ArrowUpRightIcon className="w-5 h-5 text-gold" />
					<h2 className="font-mono">Nos dê um oi</h2>
				</div>
				<div className="flex flex-col gap-6">
					<h3 className="text-2xl lg:text-6xl font-bold">
						Vamos conversar
					</h3>
					<div className="flex">
						<Link href="mailto:contato@studiopaper.com.br">
							<a>
								<motion.div
									initial="rest"
									whileHover="hover"
									animate="rest"
									variants={linkMotion}
									className="lg:text-xl font-mono border-b-2 border-solid py-4"
								>
									contato@studiopaper.com.br
								</motion.div>
							</a>
						</Link>
					</div>
				</div>
			</div>
			<div className="pt-20 pb-10 flex flex-col md:flex-row gap-6 lg:items-center justify-between">
				<div>
					<ul className="flex items-center gap-6 text-xl">
						{socialLinks.map((item, index) => (
							<Link href={item.to} key={index}>
								<a>
									<i className={item.icon} />
								</a>
							</Link>
						))}
					</ul>
				</div>
				<div>
					<small>Studio Paper &copy; 2022</small>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
