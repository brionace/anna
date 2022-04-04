import styles from '../styles/Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.brian}>
                <span>Made by <a href="https://brianory.me" target="_blank" rel="noreferrer">Brian</a></span>
                </div>
            </div>
        </footer>
    )
}
