import Navbar from '../components/navbar';
import styles from '../styles/test.module.css';
import Link from 'next/link';

export default function Home() {

	return (

			<div className={styles.logos}>
				<div className={styles.logoslide}>
					<img src="/images/worldcoin.svg" />
					<img src="/images/op.png" />
					<img  src="/images/base.svg" />
                    <img  src="/images/zora.svg" />
                    <img  src="/images/modenetwork.svg" />
				</div>

				<div className={styles.logoslide}>
					<img src="/images/worldcoin.svg" />
					<img src="/images/op.png" />
					<img  src="/images/base.svg" />
                    <img  src="/images/zora.svg" />
                    <img  src="/images/modenetwork.svg" />
				</div>
			</div>

	);
}