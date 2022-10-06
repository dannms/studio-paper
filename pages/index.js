import Head from 'next/head';
import {
	Footer,
	Hero,
	Manifesto,
	Navbar,
	Projects,
	Services,
} from '../components';

export default function Home() {
	return (
		<>
			<Head>
				<title>Studio Paper</title>
			</Head>
			<Navbar />
			<Hero />
			<Services />
			<Projects />
			<Manifesto />
			<Footer />
		</>
	);
}
