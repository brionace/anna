import styles from '../styles/ProjectList.module.scss'

export default function ProjectList({children}) {
    return (
        <div className={styles.projectlist}>
            {children}
        </div>

    )
}