import { useEffect } from 'react';
import { ProjectsProvider } from '../providers/ProjectsProvider.jsx';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const vh = window.innerHeight * 0.01;

		window.addEventListener('resize', () => {
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});

		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}, []);

	return (
		<ProjectsProvider>
			<Component {...pageProps} />
		</ProjectsProvider>
	);
}

export default MyApp;
