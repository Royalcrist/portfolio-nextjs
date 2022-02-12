import React, { createContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import queries from '../queries/queries';
import { useRouter } from 'next/router';
import useBlockBuilderLinks from '../hooks/useBlockBuilderLinks';

export const ProviderContext = createContext();

export const Provider = props => {
	const [color, setColor] = useState('blue');
	const { locale } = useRouter();

	// Projects
	const {
		data: projectsData,
		loading: projectsLoading,
		error: projectsError,
	} = useQuery(queries('PROJECTS_HOME', locale));

	const { state: blockBuilderState, dispatch: blockBuilderDispatch } =
		useBlockBuilderLinks();

	return (
		<ProviderContext.Provider
			value={{
				// General
				color,
				setColor,

				// Projects
				projectsData,
				projectsLoading,
				projectsError,

				// BlockBuilder
				blockBuilderState,
				blockBuilderDispatch,
			}}
		>
			{props.children}
		</ProviderContext.Provider>
	);
};
