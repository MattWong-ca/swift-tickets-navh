import Navbar from '../components/navbar';
import styles from '../styles/index.module.css';
import Link from 'next/link';

export default function Home() {

	return (
		<div>
			<Navbar />
			<div className={styles.background}>
				<div className={styles.landingcopy}>
					<p className={styles.title}>SWIFT TICKETS</p>
					<p className={styles.tagline}>Taylor Swift tickets belong to genuine fans.<br />Bots will never steal your tickets again.</p>
					<Link href="/upcomingevents">
						<button className={styles.explorebutton} role="button">EXPLORE SHOWS</button>
					</Link>
				</div>
			</div>
			<div className={styles.quote}>
				<p className={styles.statista}>"REVENUE IN THE EVENT TICKETS MARKET IS PROJECTED TO REACH $78B USD IN 2023, [...] AND AN EXPECTED 760M USERS BY 2027"</p>
				<p className={styles.smallstatista}>STATISTA</p>
			</div>
			<div className={styles.valueprop}>
				<img className={styles.backgroundimage} src="/images/times.png" alt="NY Times" />
				<div className={styles.problemcontainer}>
					<p className={styles.bots}>I’M THE PROBLEM, IT’S ME – 🤖</p>
					<p className={styles.botstext}>Bots + Ticketmaster’s failed attempts to fend them off. They’re a giant monopoly, and Verified Fan just isn’t the solution. The site even went down last November!</p>
				</div>
			</div>
			<div className={styles.valueprop2}>
				<div className={styles.summercontainer}>
					<p className={styles.summer}>CRUEL SUMMER</p>
					<p className={styles.summertext}>Canadian fans are extremely frustrated, with most being left on a waitlist. It was a 0.25% chance to get a Eras ticket.</p>
				</div>
				<img className={styles.backgroundimage} src="/images/twitterproof2.png" alt="NY Times" />
			</div>
			<div className={styles.valueprop}>
				<img className={styles.backgroundimage} src="/images/worldcoinorb.jpeg" alt="NY Times" />
				<div className={styles.problemcontainer}>
					<p className={styles.bots}>YOU’RE THE ONLY ONE OF YOU 👁️</p>
					<p className={styles.botstext}>With our platform, users can only purchase Swift tickets if they verify with World ID, preventing bots from accessing the page.</p>
				</div>
			</div>

			<div className={styles.black}>
				<p className={styles.poweredby}>POWERED BY</p>
				<div className={styles.logocarousel}>
					<div className={styles.logoslide}>
						<img src="/images/metamask.png" />
						<img src="/images/linea.svg" />
						<img style={{ filter: 'brightness(0) invert(1)' }} src="/images/Infura.png" />
						<img src="/images/thirdweb.svg" />
						<img src="/images/truffle.png" />
					</div>

					<div className={styles.logoslide}>
						<img src="/images/metamask.png" />
						<img src="/images/linea.svg" />		
						<img style={{ filter: 'brightness(0) invert(1)' }} src="/images/Infura.png" />
						<img src="/images/thirdweb.svg" />
						<img src="/images/truffle.png" />
					</div>
				</div>
			</div>
		</div>
	);
}