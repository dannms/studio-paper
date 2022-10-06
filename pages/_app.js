import Container from '../components/container';
import '../styles/globals.css';
import 'boxicons/css/boxicons.css';

function MyApp({ Component, pageProps }) {
	return (
		<Container>
			<Component {...pageProps} />
		</Container>
	);
}

export default MyApp;
