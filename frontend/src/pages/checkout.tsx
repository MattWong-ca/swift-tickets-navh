import { CredentialType, IDKitWidget } from "@worldcoin/idkit";
import type { ISuccessResult } from "@worldcoin/idkit";
import type { VerifyReply } from "./api/verify";
import Navbar from '../components/navbar';
import styles from '../styles/checkout.module.css';
import { useState } from 'react';

export default function Checkout() {

	const hello = () => {
		console.log("Hi!")
	}

	const [verified, setVerified] = useState(false);

	const onSuccess = (result: ISuccessResult) => {
		// This is where you should perform frontend actions once a user has been verified, such as redirecting to a new page
		setVerified(true);
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

	return (
		<div>
			<Navbar />
			<p className={styles.title}>CHECKOUT</p>
			<p className={styles.questiontext}>Verify with World ID to prove you're not a bot:</p>


			{verified === false ? (

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
			<form style={{ marginTop: '50px', marginLeft: '40px' }}>
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

				<button className={styles.purchasebutton}>
					<div>PURCHASE NFT TICKET</div>
				</button>
			</form>

		</div>


		/*
		<div>
			<div className="flex flex-col items-center justify-center align-middle h-screen">
				<p className="text-2xl mb-5">World ID Cloud Template</p>
				<IDKitWidget
					action={process.env.NEXT_PUBLIC_WLD_ACTION_NAME!}
					app_id={process.env.NEXT_PUBLIC_WLD_APP_ID!}
					onSuccess={onSuccess}
					handleVerify={handleProof}
					credential_types={[CredentialType.Orb, CredentialType.Phone]}
					autoClose
				>
					{({ open }) =>
						<button className="border border-black rounded-md" onClick={open}>
							<div className="mx-3 my-1">Verify with World ID</div>
						</button>
					}
				</IDKitWidget>
			</div>
		</div>
		*/
	);
}