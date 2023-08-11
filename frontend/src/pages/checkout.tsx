import { CredentialType, IDKitWidget } from "@worldcoin/idkit";
import type { ISuccessResult } from "@worldcoin/idkit";
import type { VerifyReply } from "./api/verify";
import Navbar from '../components/navbar';
import styles from '../styles/checkout.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
// import supabase from '../utils/supabaseConfig';
import { ethers } from 'ethers';
import { useRouter } from 'next/router';

import goerliNFT from '../utils/goerliContract.json';
import baseNFT from '../utils/baseContract.json';

declare var window: any
const GOERLI_CONTRACT_ADDRESS = "0x46224855ce16B2a5A8DDFAb0578Da8828D43f601";
const OP_CONTRACT_ADDRESS = "";
const BASE_CONTRACT_ADDRESS = "0x2A6123eEDea57303d2034f60A62C0C1529f06752";
const ZORA_CONTRACT_ADDRESS = "";
const MODE_CONTRACT_ADDRESS = "";

export default function Checkout() {

	const [userVerified, setUserVerified] = useState(false);
	const [currentAccount, setCurrentAccount] = useState("");
	const router = useRouter();

	const onSuccess = (result: ISuccessResult) => {
		// This is where you should perform frontend actions once a user has been verified, such as redirecting to a new page
		setUserVerified(true);
		window.alert("Successfully verified with World ID! Your nullifier hash is: " + result.nullifier_hash);
	};

	const handleProof = async (result: ISuccessResult) => {
		console.log("Proof received from IDKit:\n", JSON.stringify(result)); // Log the proof from IDKit to the console for visibility
		const reqBody = {
			merkle_root: result.merkle_root,
			nullifier_hash: result.nullifier_hash,
			proof: result.proof,
			credential_type: result.credential_type,
			action: process.env.NEXT_PUBLIC_WLD_ACTION_NAME,
			signal: "",
		};
		console.log("Sending proof to backend for verification:\n", JSON.stringify(reqBody)) // Log the proof being sent to our backend for visibility
		const res: Response = await fetch("/api/verify", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(reqBody),
		})
		const data: VerifyReply = await res.json()
		if (res.status == 200) {
			console.log("Successful response from backend:\n", data); // Log the response from our backend for visibility
		} else {
			throw new Error(`Error code ${res.status} (${data.code}): ${data.detail}` ?? "Unknown error."); // Throw an error if verification fails
		}
	};

	const mintNftTicket = async () => {
		const MINT_PRICE = ethers.utils.parseEther("0.00013");

		try {
			const { ethereum } = window;

			if (ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum);
				const signer = provider.getSigner();
				// CHANGE THESE DEPENDING ON THE CHAIN
				const connectedContract = new ethers.Contract(BASE_CONTRACT_ADDRESS, baseNFT.abi, signer);

				console.log("Going to pop wallet now to pay gas...")
				let nftTxn = await connectedContract.mintNFTTicket({ value: MINT_PRICE, from: currentAccount})

				router.push('/loading');
				console.log("Minting...please wait.")
				await nftTxn.wait();

				const accounts = await ethereum.request({ method: "eth_requestAccounts" });
				setCurrentAccount(accounts[0]);
				// console.log(currentAccount)

				console.log(`Minted, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`);
				router.push('/upcomingevents');

			} else {
				console.log("Ethereum object doesn't exist!");
			}
		} catch (error) {
			console.log(error)
		}
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // Prevent the default form submission behavior

		// Need to save form data here (fetch to backend)

		mintNftTicket();
	};

	// useEffect(() => {
	// 	async function fetchUserVerificationStatus() {
	// 		const userAddress = 'user_wallet_address'; //FIX THIS
	// 		const { data, error } = await supabase
	// 			.from('users')
	// 			.select('isWorldcoinVerified')
	// 			.eq('address', userAddress);

	// 		if (error) {
	// 			// Handle error
	// 		} else if (data && data.length > 0) {
	// 			setUserVerified(data[0].isWorldcoinVerified);
	// 		}
	// 	}

	// 	fetchUserVerificationStatus();
	// }, []);

	return (
		<div>
			<Navbar />
			<div className={styles.splittwo}>
				<div id="checkout" className={styles.halfPage}>
					<p className={styles.title}>CHECKOUT</p>
					<p className={styles.questiontext}>Verify with World ID to prove you're not a bot:</p>


					{userVerified === false ? (
						<IDKitWidget
							action={process.env.NEXT_PUBLIC_WLD_ACTION_NAME!}
							app_id={process.env.NEXT_PUBLIC_WLD_APP_ID!}
							onSuccess={onSuccess}
							handleVerify={handleProof}
							credential_types={[CredentialType.Orb, CredentialType.Phone]}
							autoClose
						>
							{({ open }) =>
								<button className={styles.worldcoinbutton}/*className="border border-black rounded-md"*/ onClick={open}>
									<div /*className="mx-3 my-1"*/>I'M HUMAN</div>
								</button>
							}
						</IDKitWidget>


					) : (
						<div className={styles.verified}>VERIFIED</div>
					)}

					{/* <p className={styles.questiontext} style={{ marginTop: '30px' }}>Full name</p> */}
					<form style={{ marginTop: '50px', marginLeft: '40px' }} onSubmit={handleSubmit}>
						<div className={styles.formGroup}>
							<label className={styles.formlabels}>Full name</label>
							<br />
							<input type="text" id="name" name="name" className={styles.inputfield} />
						</div>

						<div className={styles.formGroup}>
							<label className={styles.formlabels}>Email</label>
							<br />
							<input type="text" id="email" name="email" className={styles.inputfield} />
						</div>

						<div className={styles.formGroup}>
							<label className={styles.formlabels}>Phone number</label>
							<br />
							<input type="text" id="phone" name="phone" className={styles.inputfield} />
						</div>

						<button className={styles.purchasebutton} type="submit">
							PURCHASE NFT TICKET
						</button>

					</form>

				</div>

				<div id="ordersummary" className={styles.halfPage}>
					<p className={styles.ordersummary}>ORDER SUMMARY</p>

					<div className={styles.wcard}>
						{/* <div> */}
						<img style={{ borderRight: '3px solid black' }} src="/images/eras.jpeg"></img>
						<div>
							<p style={{ marginTop: '20px', marginLeft: '30px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: 'bold', fontSize: '30px' }}>The Eras Tour - Nov 15 2024</p>
							<p style={{ marginLeft: '30px', marginTop: '10px', fontFamily: 'Arial Mono, monospace', color: 'black' }}>Rogers Centre | Toronto, CA</p>
							<p style={{ marginLeft: '30px', marginTop: '5px', fontFamily: 'Arial Mono, monospace', color: 'black' }}>Section Z, Row 1, Seat 3</p>
							<p style={{ marginLeft: '30px', marginTop: '5px', fontFamily: 'Arial Mono, monospace', color: 'black' }}>7:00 PM ET</p>
						</div>



					</div>
					<div className={styles.holder}>
						<span className={styles.totalText}>TOTAL</span>
						<span className={styles.totalAmount}>0.013 ETH</span>
					</div>
				</div>

			</div>
		</div>
	);
}