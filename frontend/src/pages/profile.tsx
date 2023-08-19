import Navbar from '../components/navbar';
import styles from '../styles/checkout.module.css';
import { useState, useEffect } from 'react';
import { ThirdwebNftMedia, useContract, useNFT } from "@thirdweb-dev/react";

export default function Profile() {

    const { contract } = useContract("0xa4dcd85885daa2efd8aa1ca1699b3846afbe5a10");
    const { data: nft, isLoading, error } = useNFT(contract, "0");

    if (isLoading) return <div>Loading...</div>;
    if (error || !nft) return <div>NFT not found</div>;

    return (
        <div>
            <Navbar />
            <div>
                <p className={styles.title}>MY PROFILE</p>
                <p className={styles.questiontext}><b>Full name:</b> </p>
                <p className={styles.questiontext}><b>Email:</b> </p>
                <p className={styles.questiontext}><b>Phone:</b> </p>

                <p className={styles.title}>TICKETS</p>
                <div style={{ marginLeft: '40px' }}>
                    <ThirdwebNftMedia metadata={nft.metadata} />
                </div>
            </div>
        </div>
    );
}