import styles from '../styles/Home.module.css';
import header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div className={styles.cardsContainer}>
                    <Card text="afucgwiegfcisc" />
                    <Card text="afucgwiegfcisc" />
                    <Card text="afucgwiegfcisc" />
                </div>

                <div className={styles.imageContainer}>
                    <img src="/CloudBear" alt="bicho" 
                    className={styles.bearImage}
                    />
                </div>
            </main>
            <Footer/>
        </div>
    );
}
