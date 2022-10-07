import Head from 'next/head';
import PDetails from '../../components/project-detais';
import PNavigation from '../../components/project-navigation';

export default function Project() {
	return (
		<>
			<Head>
				<title>Projeto</title>
			</Head>
			<PNavigation />
		</>
	);
}
