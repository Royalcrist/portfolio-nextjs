import { useEffect } from 'react';
import { Provider } from '../providers/Provider.jsx';
import '../styles/globals.scss';

import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo-client';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const vh = window.innerHeight * 0.01;

		window.addEventListener('resize', () => {
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});

		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}, []);

	return (
		<ApolloProvider client={client}>
			<Provider>
				<Component {...pageProps} />
			</Provider>
		</ApolloProvider>
	);
}

export default MyApp;
