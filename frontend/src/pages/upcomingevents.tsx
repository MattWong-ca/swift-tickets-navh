import Navbar from '../components/navbar';
import styles from '../styles/upcomingevents.module.css';

export default function Upcomingevents() {

    return (
        <div>
            <Navbar />
            <div>
                <p className={styles.title}>UPCOMING EVENTS</p>

                <div style={{ display: 'flex', marginLeft: '20px' }}>
                    <div className={styles.wcard}>
                        <div style={{ backgroundColor: 'red', height: '100px' }}></div>
                        <img style={{ width: '30px' }} src="/images/swiftw.webp" alt="Swift PFP 1" />
                    </div>
                    <div className={styles.wcard}>
                        Hi
                    </div>
                    <div className={styles.wcard}>
                        Hi
                    </div>
                </div>

                <div style={{ display: 'flex', marginTop: '20px', marginLeft: '20px' }}>
                    <div className={styles.wcard}>
                        Hi
                    </div>
                    <div className={styles.wcard}>
                        Hi
                    </div>
                </div>

            </div>
        </div>
    );
}