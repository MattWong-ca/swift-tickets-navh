import Navbar from '../components/navbar';
import styles from '../styles/checkout.module.css';
import { useState, useEffect } from 'react';
import { ThirdwebNftMedia, useContract, useNFT } from "@thirdweb-dev/react";
import supabase from '../utils/supabaseConfig';
import { ethers } from 'ethers';
import goerliNFT from '../utils/goerliContract.json';

declare var window: any

export default function Profile() {

    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    // const contractAddress = "0xa4dcd85885daa2efd8aa1ca1699b3846afbe5a10";
    // const contractAbi = goerliNFT.abi;
    // const [lastMintedTokenId, setLastMintedTokenId] = useState(0);
    // const ethersContract = new ethers.Contract(contractAddress, contractAbi, signer);

    const { contract } = useContract("0xa4dcd85885daa2efd8aa1ca1699b3846afbe5a10");
    const { data: nft, isLoading, error } = useNFT(contract, "0");
    const [currentAccount, setCurrentAccount] = useState("");

    // Fetch user data based on the user's Ethereum address
    const [userData, setUserData] = useState();

    const getEthereumObject = () => window.ethereum;

    useEffect(() => {
        async function fetchUserData() {
            try {
                const ethereum = getEthereumObject();

                if (ethereum) {
                    // const account = await signer.getAddress();
                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    const account = await signer.getAddress();

                    setCurrentAccount(account);
                    // setCurrentAccount(account);
                }

                // const { data, error } = await supabase
                //     .from('profile')
                //     .select('*')
                //     .eq('address', currentAccount)
                //     .single();
                // if (error) {
                //     console.error("Error fetching user data:", error);
                // } else {
                //     setUserData(data);
                // }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }

        // async function fetchLastMintedTokenId() {
        //     try {
        //         const tokenId = await ethersContract.getLastMintedTokenId();
        //         setLastMintedTokenId(tokenId);
        //     } catch (error) {
        //         console.error("Error fetching last minted token ID:", error);
        //     }
        // }

        fetchUserData();
        // fetchLastMintedTokenId();
    }, [contract, currentAccount]);

    if (isLoading) return <div>Loading...</div>;
    if (error || !nft) return <div>NFT not found</div>;

    return (
        <div>
            <Navbar />
            <div>
                <p className={styles.title}>MY PROFILE</p>
                <div>
                    <p className={styles.questiontext}><b>Full name:</b> Test Name</p>
                    <p className={styles.questiontext}><b>Email:</b> test@gmail.com</p>
                    <p className={styles.questiontext}><b>Phone:</b> 123-123-1233</p>
                    <p className={styles.questiontext}><b>Address:</b> {currentAccount}</p>
                </div>

                <p className={styles.title}>TICKETS</p>
                <div style={{ marginLeft: '40px' }}>
                    <ThirdwebNftMedia metadata={nft.metadata} />
                </div>
            </div>
        </div>
    );
}
