import Link from 'next/link'
import styles from '../styles/Hero.module.scss'

export default function Hero(contents: unknown) {
    return (
        <section className={styles.hero}>
            <div className="container">
                {contents}
            </div>
        </section>
    )
}
