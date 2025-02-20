import styles from "../styles/Home.module.css"
import Header from "../components/Header";

export default function Home() {
    return (
        <div className={styles.container}>
<Header />
            <main className={styles.main}>

            </main>

            <div className={styles.article}>
                <div className={styles.box1}>
                    <h1>1</h1>
                </div>

                <div className={styles.box2}>
                    <h1>2</h1>
                </div>

                <div className={styles.box3}>
                    <h1>3</h1>
                </div>

            </div>

            <div className={styles.footer}>
                <h3>footer</h3>
            </div>

            <div className={styles.imagem}>
            <img className={styles.cloud} src="/CloudBear.jpg" alt="urso" />
            </div>
        </div>

    );
}