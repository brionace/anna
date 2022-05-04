import Link from 'next/link'
import React from 'react'
import styles from '../styles/Hero.module.scss'

export default function Hero(contents: React.ReactNode) {
    return (
        <section className={styles.hero}>
            <div className="container">
                {contents}
            </div>
        </section>
    )
}
