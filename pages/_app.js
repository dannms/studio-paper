import Container from '../components/container';
import '../styles/globals.css';
import 'boxicons/css/boxicons.css';
import NextNProgress from 'nextjs-progressbar';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function App({ Component, pageProps }) {
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const mouseMove = (event) => {
			setMousePosition({
				x: event.clientX,
				y: event.clientY,
			});
		};
		window.addEventListener('mousemove', mouseMove);
		return () => {
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);

	const mouseposition = {
		default: {
			x: mousePosition.x - 6,
			y: mousePosition.y - 6,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 40,
				ease: 'linear',
			},
		},
	};

	return (
		<>
			<NextNProgress
				color="#efbe7d"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
			/>

			<motion.div
				className="hidden lg:block fixed top-0 left-0 right-0 bottom-0 bg-gold w-3 h-3 rounded-full pointer-events-none"
				variants={mouseposition}
				animate="default"
			/>
			<Container>
				<Component {...pageProps} />
			</Container>
		</>
	);
}

export default App;
