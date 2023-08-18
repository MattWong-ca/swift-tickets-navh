import Navbar from '../components/navbar';
import styles from '../styles/upcomingevents.module.css';
import Link from 'next/link';

export default function Upcomingevents() {

    return (
        <div>
            <Navbar />
            <div>
                <p className={styles.title}>UPCOMING EVENTS</p>

                <div style={{ display: 'flex', marginLeft: '20px' }}>

                    <div className={styles.wcard}>

                        <div style={{ height: '100px', position: 'relative' }}>
                            <img className={styles.backgroundimage} src="/images/concert.jpg" alt="Background" />
                            <img
                                style={{
                                    width: '100px', // Adjust the width of the square image
                                    position: 'absolute',
                                    top: '80%', // Position the square image vertically at 50% of the container
                                    left: '18%', // Position the square image horizontally at 50% of the container
                                    transform: 'translate(-50%, -50%)', // Center the square image
                                    border: '2px solid black',
                                }}
                                src="/images/erastourlogo.png"
                                alt="Square Image"
                            />
                        </div>

                        <p style={{ marginTop: '40px', marginLeft: '30px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: 'bold', fontSize: '30px' }}>The Eras Tour - Nov 14</p>
                        <p style={{ marginLeft: '30px', fontFamily: 'Arial Mono, monospace', color: '#777777' }}>Toronto, CA | 7PM</p>
                        <div className={styles.worldcoinbutton}>
                            <Link href="/checkout">
                                <button role="button">PURCHASE TICKET</button>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.wcard}>

                        <div style={{ height: '100px', position: 'relative' }}>
                            <img className={styles.backgroundimage} src="/images/concert.jpg" alt="Background" />
                            <img
                                style={{
                                    width: '100px', // Adjust the width of the square image
                                    position: 'absolute',
                                    top: '80%', // Position the square image vertically at 50% of the container
                                    left: '18%', // Position the square image horizontally at 50% of the container
                                    transform: 'translate(-50%, -50%)', // Center the square image
                                    border: '2px solid black',
                                }}
                                src="/images/nov15.png"
                                alt="Square Image"
                            />
                        </div>

                        <p style={{ marginTop: '40px', marginLeft: '30px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: 'bold', fontSize: '30px' }}>The Eras Tour - Nov 15</p>
                        <p style={{ marginLeft: '30px', fontFamily: 'Arial Mono, monospace', color: '#777777' }}>Toronto, CA | 7PM</p>
                        <div className={styles.worldcoinbutton}>
                            <Link href="/checkout">
                                <button role="button">PURCHASE TICKET</button>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.wcard}>

                        <div style={{ height: '100px', position: 'relative' }}>
                            <img className={styles.backgroundimage} src="/images/concert.jpg" alt="Background" />
                            <img
                                style={{
                                    width: '100px', // Adjust the width of the square image
                                    position: 'absolute',
                                    top: '80%', // Position the square image vertically at 50% of the container
                                    left: '18%', // Position the square image horizontally at 50% of the container
                                    transform: 'translate(-50%, -50%)', // Center the square image
                                    border: '2px solid black',
                                }}
                                src="/images/nov16.png"
                                alt="Square Image"
                            />
                        </div>

                        <p style={{ marginTop: '40px', marginLeft: '30px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: 'bold', fontSize: '30px' }}>The Eras Tour - Nov 16</p>
                        <p style={{ marginLeft: '30px', fontFamily: 'Arial Mono, monospace', color: '#777777' }}>Toronto, CA | 7PM</p>
                        <div className={styles.worldcoinbutton}>
                            <Link href="/checkout">
                                <button role="button">PURCHASE TICKET</button>
                            </Link>
                        </div>
                    </div>

                </div>

                <div style={{ display: 'flex', marginTop: '20px', marginLeft: '20px' }}>
                    <div className={styles.wcard}>

                        <div style={{ height: '100px', position: 'relative' }}>
                            <img className={styles.backgroundimage} src="/images/concert.jpg" alt="Background" />
                            <img
                                style={{
                                    width: '100px', // Adjust the width of the square image
                                    position: 'absolute',
                                    top: '80%', // Position the square image vertically at 50% of the container
                                    left: '18%', // Position the square image horizontally at 50% of the container
                                    transform: 'translate(-50%, -50%)', // Center the square image
                                    border: '2px solid black',
                                }}
                                src="/images/nov17.png"
                                alt="Square Image"
                            />
                        </div>

                        <p style={{ marginTop: '40px', marginLeft: '30px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: 'bold', fontSize: '30px' }}>The Eras Tour - Nov 17</p>
                        <p style={{ marginLeft: '30px', fontFamily: 'Arial Mono, monospace', color: '#777777' }}>Toronto, CA | 7PM</p>
                        <div className={styles.worldcoinbutton}>
                            <Link href="/checkout">
                                <button role="button">PURCHASE TICKET</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.wcard}>

                        <div style={{ height: '100px', position: 'relative' }}>
                            <img className={styles.backgroundimage} src="/images/concert.jpg" alt="Background" />
                            <img
                                style={{
                                    width: '100px', // Adjust the width of the square image
                                    position: 'absolute',
                                    top: '80%', // Position the square image vertically at 50% of the container
                                    left: '18%', // Position the square image horizontally at 50% of the container
                                    transform: 'translate(-50%, -50%)', // Center the square image
                                    border: '2px solid black',
                                }}
                                src="/images/nov17.png"
                                alt="Square Image"
                            />
                        </div>

                        <p style={{ marginTop: '40px', marginLeft: '30px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: 'bold', fontSize: '30px' }}>The Eras Tour - Nov 17</p>
                        <p style={{ marginLeft: '30px', fontFamily: 'Arial Mono, monospace', color: '#777777' }}>Toronto, CA | 7PM</p>
                        <div className={styles.worldcoinbutton}>
                            <Link href="/checkout">
                                <button role="button">PURCHASE TICKET</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}