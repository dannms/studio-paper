const Container = ({ children }) => {
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
			<div className="mx-auto max-w-5xl px-8 lg:px-0">{children}</div>
		</>
	);
};

export default Container;
