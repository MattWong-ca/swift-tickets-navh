import { CredentialType, IDKitWidget } from "@worldcoin/idkit";
import type { ISuccessResult } from "@worldcoin/idkit";
import type { VerifyReply } from "./api/verify";
import Navbar from '../components/navbar';
import styles from '../styles/index.module.css';

export default function Home() {
	

	return (
		<div>
			<Navbar/>
			<div className={styles.background}>
				<div className={styles.landingcopy}>
					<p className={styles.title}>SWIFT TICKETS</p>
					<p className={styles.tagline}>Taylor Swift tickets belong to genuine fans.<br/>Bots will never steal your tickets again.</p>
					<button className={styles.explorebutton} role="button">EXPLORE TICKETS</button>
				</div>
			</div>
		</div>
	);
}