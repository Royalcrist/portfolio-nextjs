import CloseIcon from '../icons/commons/CloseIcon';
import styles from '../../styles/components/buttons/CloseButton.module.scss';

export default function CloseButton({ onClick, ...props }) {
	return (
		<button onClick={onClick} className={styles['close-button']}>
			<CloseIcon />
		</button>
	);
}
