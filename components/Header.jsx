import styles from '../styles/Home.module.css'

export default function header(){
    return (
        <header className={styles.header}>
            <h1>BadTime</h1>
            <img className={styles.logo} src="/download.png" alt="download.png" />
        </header>

    )
}