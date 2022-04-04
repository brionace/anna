import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.scss'

export default function Header() {
    const [shownav, setShowNav] = useState<boolean>(false)
    function showMenu() {
        setShowNav(!shownav)
    }
    function handleResize() {
        if (window.innerWidth > 767) {
            setShowNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    })

    return (
        <header className={styles.header}>
            <div className={`${styles.container} container`}>
                <Link href="/">
                    <a>Anna Paton Studios</a>
                </Link>
                <button className={styles.toggle} onClick={showMenu}>
                    MENU
                </button>
                <nav className={shownav ? styles.shownav : styles.nav}>
                    <Link href="/portfolio">
                        <a>Portfolio</a>
                    </Link>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
