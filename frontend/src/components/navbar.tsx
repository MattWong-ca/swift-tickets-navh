import styles from './navbar.module.css';

export default function Navbar() {
	

	return (
		<div className={styles.navbar}>
            <img className={styles.logo} src="/images/logo.png" alt="Swift Tickets Logo"/>
		</div>
	);
}