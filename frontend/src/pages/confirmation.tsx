import styles from '../styles/loading.module.css';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';

declare var window: any

export default function Confirmation() {

	const [currentAccount, setCurrentAccount] = useState("");

	useEffect(() => {
		const checkIfWalletIsConnected = async () => {
			const { ethereum } = window;

			if (!ethereum) {
				console.log("Make sure you have metamask!");
				return;
			} else {
				console.log("We have the ethereum object", ethereum);
			}

			const accounts = await ethereum.request({ method: 'eth_accounts' });
			if (accounts.length !== 0) {
				const account = accounts[0];
				setCurrentAccount(account);

			} else {
				console.log("No authorized account found");
			}
		}
		checkIfWalletIsConnected();
	});

	return (
		<div>
			<Navbar />
			<div className={styles.backgroundContainer}>
				<div className={styles.confirmed}>
					<p className={styles.ticketconfirmed}>TICKET CONFIRMED! 🥳</p>
					<img
						style={{
							width: '300px',
							border: '2px solid black',
							marginBottom: '20px'
						}}
						src="/images/taylorswifteraspfp.jpeg"
						alt="Square Image"
					/>
					<p className={styles.minting}>CHECK IT OUT ON <a href={'https://testnets.opensea.io/' + currentAccount} target="_blank" rel="noopener noreferrer" className={styles.link}>OPENSEA</a></p>
				</div>
			</div>
		</div>
	);
}