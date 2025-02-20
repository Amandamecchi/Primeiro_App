import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <section className={styles.cardsContainer}>
                    <div className={styles.card}>usrinho</div>
                    <div className={styles.card}>usrinho</div>
                    <div className={styles.card}>usrinho</div>
                </section>

                <aside className={styles.imageContainer}>
                    <img className={styles.bearImage} 
                         src="/cloudBear.jpg" 
                         alt="Urso grande" />
                </aside>
            </main>

            <footer className={styles.footer}>
                <p>© 2025 Amanda - Todos os direitos reservados</p>
            </footer>
        </div>
    );
}
