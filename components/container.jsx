import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Container = ({ children }) => {
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
			<svg
				className="pointer-events-none fixed top-0 isolate z-50 opacity-70 mix-blend-soft-light"
				width="100%"
				height="100%"
			>
				<filter id="noisefilter">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.80"
						numOctaves="4"
						stitchTiles="stitch"
					/>
				</filter>
				<rect
					width="100%"
					height="100%"
					filter="url(#noisefilter)"
				></rect>
			</svg>
			<motion.div
				className="fixed top-0 left-0 right-0 bottom-0 bg-gold w-3 h-3 rounded-full pointer-events-none"
				variants={mouseposition}
				animate="default"
			/>
			<div className="mx-auto max-w-5xl">{children}</div>
		</>
	);
};

export default Container;
