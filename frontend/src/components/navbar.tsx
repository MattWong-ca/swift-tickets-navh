import styles from './navbar.module.css';
import { useState, useEffect } from 'react';
import { MetaMaskSDK } from '@metamask/sdk';

function truncateAddress(address: string): string {
    if (!address || address.length < 10) {
        return "";
    }

    const start = address.slice(0, 6);
    const end = address.slice(-4);
    return `${start}...${end}`;
}

export default function Navbar() {
    const options = {
        dappMetadata: { name: "Swift Tickets", url: "https://mydapp.com" },
        injectProvider: true,
      };

      const [currentAccount, setCurrentAccount] = useState("");
      const MMSDK = new MetaMaskSDK(options);
    
    const connectWallet = async () => {
        try {
            const ethereum = MMSDK.getProvider();
            if (ethereum) {
                const accounts = await ethereum.request({ method: "eth_requestAccounts" }) as string[];
                setCurrentAccount(accounts[0]);
            } else {
                console.error("Ethereum provider not available.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const ethereum = MMSDK.getProvider();

        const checkMetaMask = async () => {
          if (ethereum && ethereum.isConnected()) {
            // Request the current accounts from MetaMask
            const accounts = await ethereum.request({ method: 'eth_accounts' }) as string[];
            setCurrentAccount(accounts[0]);
          }
        };
    
        checkMetaMask();
      }, []);

    return (
        <div className={styles.navbar}>
            <a href="/">
                <img className={styles.logo} src="/images/logo.png" alt="Swift Tickets Logo" />
            </a>
            <p className={styles.truncatedAddress}>{truncateAddress(currentAccount)}</p>
            {!currentAccount && (
                <button className={styles.connectwallet} role="button" onClick={connectWallet}>CONNECT WALLET</button>
            )}
        </div>
    );
} 