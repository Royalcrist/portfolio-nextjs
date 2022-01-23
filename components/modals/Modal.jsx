import { useEffect, useState } from 'react';
import styles from '../../styles/components/modals/Modal.module.scss';
import CloseButton from '../buttons/CloseButton';
import ClientOnlyPortal from '../portals/ClientOnlyPortal';

export default function Modal({ show, children, onClose, title, ...props }) {
	return (
		<ClientOnlyPortal selector="#modal">
			<div className={`${styles['modal']} ${show ? styles['show'] : ''}`}>
				<div className={styles['content']}>
					<div className={styles['header']}>
						<p>{title}</p>
						<CloseButton onClick={onClose} />
					</div>
					<div className={styles['body']}>{children}</div>
				</div>
			</div>
		</ClientOnlyPortal>
	);
}
