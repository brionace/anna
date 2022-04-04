import styles from '../styles/CategoryList.module.scss'

export default function CategoryList({ category, list }: unknown) {
    if (!list.length) return false

    const categories = list.map((category) => {
        return (
            <li key={category.id}>
                    <a href={`/portfolio/${category.attributes.slug}`}>{category.attributes.name}</a>
            </li>
        )
    })

    return (
        <div className={styles.categorylist}>
            <div className={styles.list}>
                <span>{(category && category.attributes) ? category.attributes.name : 'All'}</span>
                <ul>
                    {categories}
                </ul>
            </div>
        </div>
    )
}
