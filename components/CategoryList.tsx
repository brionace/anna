import { Attributes } from 'react'
import styles from '../styles/CategoryList.module.scss'
import { DataType } from '../utils/lib'

type CategoryListTypes = {
    categories: DataType[]
  }

export default function CategoryList({ categories }: CategoryListTypes)  {

    return (
        <div className={styles.categorylist}>
            <div className={styles.list}>
                <ul>
                    {categories.map((category: DataType, idx: number) => {
                        return (
                            <li key={idx}>
                                <a href={`/portfolio/${category.attributes.slug}`}>{category.attributes.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
