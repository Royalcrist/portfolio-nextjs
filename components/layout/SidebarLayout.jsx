import styles from '../../styles/components/layout/SidebarLayout.module.scss';

import InfoSidebar from './InfoSidebar';
import BlocksBuilder from '../builders/BlocksBuilder';
import LanguageButton from '../buttons/LanguageButton';

export default function SidebarLayout({ info }) {
	return (
		<>
			<div className={`grid-column-sidebar page`}>
				<InfoSidebar info={info} backUrl="/" />

				<div className={`grid-column-sidebar ${styles['info-container']}`}>
					<div className={styles['info-sections']}>
						<BlocksBuilder info={info} />
					</div>
				</div>

				<LanguageButton classname={styles['languange-button']} />
			</div>
		</>
	);
}
