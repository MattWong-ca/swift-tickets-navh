import Navbar from '../components/navbar';
import styles from '../styles/upcomingevents.module.css';
import WorldcoinButton from '../components/worldcoin';

export default function Upcomingevents() {

    return (
        <div>
            <Navbar />
            <div>
                <p className={styles.title}>UPCOMING EVENTS</p>

                <div style={{ display: 'flex', marginLeft: '20px' }}>
                    <div className={styles.wcard}>
                        {/* <div style={{ backgroundColor: 'red', height: '100px', position: 'relative' }}> */}
                            <img style={{ backgroundColor: 'red', height: '100px', position: 'relative' }} src="/images/tscardz.jpg">
                                {/* <img style={{ width: '100px', marginTop: '30px', marginLeft: '30px', position: 'absolute', border: '3px solid black'}} src="/images/swiftw.webp" alt="Swift PFP 1" /> */}
                            </img>
                            
                        {/* </div> */}

                        <p style={{ marginTop: '40px', marginLeft: '30px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: 'bold', fontSize: '30px' }}>The Eras Tour - Nov 15 2024</p>
                        <p style={{ marginLeft: '30px', fontFamily: 'Arial Mono, monospace', color: '#777777' }}>Toronto, CA | Section W</p>
                        <div className={styles.worldcoinbutton}/*style={{ marginLeft: '30px', marginTop: '25px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: '700', border: '3px solid black', borderRadius: '0' }}*/>
                            <WorldcoinButton/>
                        </div>
                        

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