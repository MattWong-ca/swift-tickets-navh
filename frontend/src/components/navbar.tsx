import styles from './navbar.module.css';
import { useState } from 'react';
import { ethers } from "ethers";

declare var window: any

function truncateAddress(address: string): string {
    if (!address || address.length < 10) {
        return "";
    }

    const start = address.slice(0, 6);
    const end = address.slice(-4);
    return `${start}...${end}`;
}

export default function Navbar() {

    const [currentAccount, setCurrentAccount] = useState("");

    const getEthereumObject = () => window.ethereum;

    const connectWallet = async () => {
        try {
            const ethereum = getEthereumObject();
            if (!ethereum) {
                alert("Get MetaMask!");
                return;
            }

            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });

            console.log("Connected", accounts[0]);
            setCurrentAccount(accounts[0]);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.navbar}>
            <img className={styles.logo} src="/images/logo.png" alt="Swift Tickets Logo" />
            <p className={styles.truncatedAddress}>{truncateAddress(currentAccount)}</p>
            {!currentAccount && (
                <button className={styles.connectwallet} role="button" onClick={connectWallet}>CONNECT WALLET</button>
            )}
        </div>
    );
}