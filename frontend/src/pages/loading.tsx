import styles from '../styles/loading.module.css';

export default function Loading() {

    return (
        <div className={styles.loaderContainer}>
            <p className={styles.minting}>Minting your NFT ticket...</p>
            <div className={styles.loader}></div>
        </div>
    );
}