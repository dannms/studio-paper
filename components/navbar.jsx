import { navLinks } from '../libs/constants';
import { motion } from 'framer-motion';
import brand from '../public/studiopaper.svg';
import Image from 'next/image';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useRouter } from 'next/router';

const linkMotion = {
	rest: {
		opacity: 0.35,
	},
	hover: {
		opacity: 1,
	},
};

const Navbar = () => {
	const router = useRouter();

	return (
		<>
			<header className="py-10 absolute top-0 left-0 right-0" id="top">
				<div className="mx-auto max-w-5xl px-8 lg:px-0">
					<div className="flex items-center justify-between">
						<div className="cursor-pointer">
							<button onClick={() => router.push('/')}>
								<Image src={brand} alt="Studio Paper" />
							</button>
						</div>
						<div className="hidden lg:flex">
							<ul className="flex items-center gap-14">
								{navLinks.map((item, index) => (
									<Link
										key={index}
										to={item.to}
										smooth={true}
										duration={500}
										delay={250}
									>
										<motion.div
											initial="rest"
											whileHover="hover"
											animate="rest"
										>
											<motion.li
												variants={linkMotion}
												className="cursor-pointer"
											>
												{item.name}
											</motion.li>
										</motion.div>
									</Link>
								))}
							</ul>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
