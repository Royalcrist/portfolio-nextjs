import { useEffect } from 'react';
import { Provider } from '../providers/Provider.jsx';
import '../styles/globals.scss';

import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo-client';

function MyApp({ Component, pageProps }) {
	const setVh = () => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	};

	useEffect(() => {
		setVh();

		window.addEventListener('resize', setVh);
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
