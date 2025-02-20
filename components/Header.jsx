import styles from '../styles/Home.module.css'

export default function header(){
    return (
        <div className={styles.container}>
        <div className={styles.header}>
            <h1>BadTime</h1>
            <img className={styles.urso} src="/download.png" alt="download.png" />
        </div>
        </div>

    )
}