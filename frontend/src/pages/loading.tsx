import styles from '../styles/loading.module.css';
import { useEffect, useRef } from 'react';

export default function Loading() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            // Set the desired starting time in seconds
            const startTime = 25; // Start playing at 30 seconds

            audioRef.current.volume = 0.5;

            audioRef.current.currentTime = startTime;
            audioRef.current.play();
        }
    }, []);


    return (
        <div className={styles.loaderContainer}>
            <p className={styles.minting}>Minting your NFT ticket...</p>
            <div className={styles.loader}></div>
            <audio ref={audioRef} autoPlay controls={false}>
                <source src="/WelcomeToNY.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}