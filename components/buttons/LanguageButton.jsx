import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ProjectsContext } from '../../providers/Provider.jsx';
import LangArrow from '../icons/LangArrow';
import useStatus from '../../hooks/useStatus';
import { displayLocaleName } from '../../helpers/helpers';

import style from '../../styles/components/buttons/LanguageButton.module.scss';

export default function LanguageButton({ classname = '' }) {
	const { status, handleStatus } = useStatus();
	const {
		locale: currentLocale,
		locales,
		route,
		asPath,
		push: routerPush,
	} = useRouter();

	let notSeletedLangs = locales.map((locale, index) =>
		locale != currentLocale ? (
			<Link key={`${locale}/${index}`} href={route} locale={locale}>
				<p className={`${style['item']}`}>
					{displayLocaleName(currentLocale, locale)}
				</p>
			</Link>
		) : // <div
		null,
	);

	// return <Link href={}>Change language</Link>

	return (
		<div
			className={`${style['lang']} ${style[status]} ${classname}`}
			onClick={handleStatus}
		>
			<div className={`${style['lang__container']}`}>
				<div className={`${style['items']}`}>
					<Link
						href={route}
						locale={currentLocale}
						className={`${style['item']} ${style['selected']}`}
					>
						<p className={`${style['item']} ${style['selected']}`}>
							{displayLocaleName(currentLocale, currentLocale)}
						</p>
					</Link>
					{status == 'show' && notSeletedLangs}
				</div>
				<div className={`${style['arrow-container']}`}>
					<LangArrow className={`${style['arrow']}`} />
				</div>
			</div>
		</div>
	);
}
