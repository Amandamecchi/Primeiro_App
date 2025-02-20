import styles from "../styles/Home.module.css"
import header from "../components/Header";

export default function Home(){
    return (
        <div className={styles.container}>
            <header>
                <div className={styles.bloco}>
                <h1>BadTime</h1>
                <img className ={styles.urso} src="/download.png" alt="download.png" />

                </div>
            </header>
            <main className={styles.main}>
            </main>

            <div className={styles.footer}>
                <h3>amanda</h3>
            </div>
        </div>
        
    );
}