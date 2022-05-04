import styles from '../styles/ProjectList.module.scss'
import { DataMetaType } from '../utils/lib'
import Project from './Project'

interface ProjectListProps {
    projects: DataMetaType
}

export default function ProjectList({ projects }: ProjectListProps) {
    const { data } = projects

    return (
        <div className={styles.projectlist}>
            {// @ts-ignore
            data.map(project => <Project key={project.id} project={project} />)}
        </div>

    )
}