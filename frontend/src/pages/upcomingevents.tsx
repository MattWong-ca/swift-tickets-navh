import Navbar from '../components/navbar';
import styles from '../styles/upcomingevents.module.css';
import WorldcoinButton from './checkout';
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
                            <img className={styles.backgroundimage} src="/images/tscardz.jpg" alt="Background" />
                            <img
                                style={{
                                    width: '100px', // Adjust the width of the square image
                                    position: 'absolute',
                                    top: '80%', // Position the square image vertically at 50% of the container
                                    left: '18%', // Position the square image horizontally at 50% of the container
                                    transform: 'translate(-50%, -50%)', // Center the square image
                                    border: '2px solid black',
                                }}
                                src="/images/taylorswifteraspfp.jpeg"
                                alt="Square Image"
                            />
                        </div>

                        <p style={{ marginTop: '40px', marginLeft: '30px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: 'bold', fontSize: '30px' }}>The Eras Tour - Section Z</p>
                        <p style={{ marginLeft: '30px', fontFamily: 'Arial Mono, monospace', color: '#777777' }}>Toronto, CA | Nov 15 2024</p>
                        <div className={styles.worldcoinbutton}/*style={{ marginLeft: '30px', marginTop: '25px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: '700', border: '3px solid black', borderRadius: '0' }}*/>
                            {/* <button>PURCHASE TICKET</button> */}
                            <Link href="/checkout">
                                <button role="button">PURCHASE TICKET</button>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.wcard}>

                        <div style={{ height: '100px', position: 'relative' }}>
                            <img className={styles.backgroundimage} src="/images/tsblue.jpeg" alt="Background" />
                            <img
                                style={{
                                    width: '100px', // Adjust the width of the square image
                                    position: 'absolute',
                                    top: '80%', // Position the square image vertically at 50% of the container
                                    left: '18%', // Position the square image horizontally at 50% of the container
                                    transform: 'translate(-50%, -50%)', // Center the square image
                                    border: '2px solid black',
                                }}
                                src="/images/taylorswifteraspfp.jpeg"
                                alt="Square Image"
                            />
                        </div>

                        <p style={{ marginTop: '40px', marginLeft: '30px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: 'bold', fontSize: '30px' }}>The Eras Tour - Section B</p>
                        <p style={{ marginLeft: '30px', fontFamily: 'Arial Mono, monospace', color: '#777777' }}>Toronto, CA | Nov 15 2024</p>
                        <div className={styles.worldcoinbutton}/*style={{ marginLeft: '30px', marginTop: '25px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: '700', border: '3px solid black', borderRadius: '0' }}*/>
                            {/* <button>PURCHASE TICKET</button> */}
                            <Link href="/checkout">
                                <button role="button">PURCHASE TICKET</button>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.wcard}>

                        <div style={{ height: '100px', position: 'relative' }}>
                            <img className={styles.backgroundimage} src="/images/tsred.jpeg" alt="Background" />
                            <img
                                style={{
                                    width: '100px', // Adjust the width of the square image
                                    position: 'absolute',
                                    top: '80%', // Position the square image vertically at 50% of the container
                                    left: '18%', // Position the square image horizontally at 50% of the container
                                    transform: 'translate(-50%, -50%)', // Center the square image
                                    border: '2px solid black',
                                }}
                                src="/images/taylorswifteraspfp.jpeg"
                                alt="Square Image"
                            />
                        </div>

                        <p style={{ marginTop: '40px', marginLeft: '30px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: 'bold', fontSize: '30px' }}>The Eras Tour - Section O</p>
                        <p style={{ marginLeft: '30px', fontFamily: 'Arial Mono, monospace', color: '#777777' }}>Toronto, CA | Nov 15 2024</p>
                        <div className={styles.worldcoinbutton}/*style={{ marginLeft: '30px', marginTop: '25px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: '700', border: '3px solid black', borderRadius: '0' }}*/>
                            {/* <button>PURCHASE TICKET</button> */}
                            <Link href="/checkout">
                                <button role="button">PURCHASE TICKET</button>
                            </Link>
                        </div>
                    </div>

                </div>

                <div style={{ display: 'flex', marginTop: '20px', marginLeft: '20px' }}>
                    <div className={styles.wcard}>

                        <div style={{ height: '100px', position: 'relative' }}>
                            <img className={styles.backgroundimage} src="/images/tsgreen.jpg" alt="Background" />
                            <img
                                style={{
                                    width: '100px', // Adjust the width of the square image
                                    position: 'absolute',
                                    top: '80%', // Position the square image vertically at 50% of the container
                                    left: '18%', // Position the square image horizontally at 50% of the container
                                    transform: 'translate(-50%, -50%)', // Center the square image
                                    border: '2px solid black',
                                }}
                                src="/images/taylorswifteraspfp.jpeg"
                                alt="Square Image"
                            />
                        </div>

                        <p style={{ marginTop: '40px', marginLeft: '30px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: 'bold', fontSize: '30px' }}>The Eras Tour - Section M</p>
                        <p style={{ marginLeft: '30px', fontFamily: 'Arial Mono, monospace', color: '#777777' }}>Toronto, CA | Nov 15 2024</p>
                        <div className={styles.worldcoinbutton}/*style={{ marginLeft: '30px', marginTop: '25px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: '700', border: '3px solid black', borderRadius: '0' }}*/>
                            {/* <button>PURCHASE TICKET</button> */}
                            <Link href="/checkout">
                                <button role="button">PURCHASE TICKET</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.wcard}>

                        <div style={{ height: '100px', position: 'relative' }}>
                            <img className={styles.backgroundimage} src="/images/tscardw.jpeg" alt="Background" />
                            <img
                                style={{
                                    width: '100px', // Adjust the width of the square image
                                    position: 'absolute',
                                    top: '80%', // Position the square image vertically at 50% of the container
                                    left: '18%', // Position the square image horizontally at 50% of the container
                                    transform: 'translate(-50%, -50%)', // Center the square image
                                    border: '2px solid black',
                                }}
                                src="/images/taylorswifteraspfp.jpeg"
                                alt="Square Image"
                            />
                        </div>

                        <p style={{ marginTop: '40px', marginLeft: '30px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: 'bold', fontSize: '30px' }}>The Eras Tour - Section W</p>
                        <p style={{ marginLeft: '30px', fontFamily: 'Arial Mono, monospace', color: '#777777' }}>Toronto, CA | Nov 15 2024</p>
                        <div className={styles.worldcoinbutton}/*style={{ marginLeft: '30px', marginTop: '25px', fontFamily: '"Arial Narrow", Arial, sans-serif', fontWeight: '700', border: '3px solid black', borderRadius: '0' }}*/>
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