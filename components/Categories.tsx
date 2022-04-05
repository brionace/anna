import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Categories.module.scss'

import { getCategories, getPortfolio, CONSTANTS } from '../utils/lib'

type CategoriesType = {
    categories?: Record<string, Record<string, Record<string, string>>>,
    portfolio?: Record<string, Record<string, Record<string, string>>>
}

export default function Categories({ categories, portfolio }: CategoriesType) {
    const [allcategories, setAllCategories] = useState<[]>([])

    useEffect(() => {
        fetchCategories()
    }, [])

    async function fetchCategories() {
        let ids: unknown = []
        let finale: unknown = []

        //fetch categories
        const categories = await getCategories()

        // then attach images first image from projects
        const portfolio = await getPortfolio()

        categories.data.forEach((category: unknown) => {
            const catId: unknown = category.id as string

            portfolio.data.forEach(project => {
                if (!ids.includes(catId)) {
                    if (project.attributes.categories.data.some((e: number) => e.id === catId)) {
                        finale.push(
                            {
                                'name': category.attributes.name,
                                'slug': category.attributes.slug,
                                'images': project.attributes.images
                            })
                        ids.push(catId)
                    }
                }
            })
        })

        // set in state
        setAllCategories(finale)
    }

    const showCategories = allcategories.map((category: Record<string, Record<string, string>>, idx: number) => {
        const images = category.images.data.map((image, idx) => {
            return <img key={idx} src={`${CONSTANTS.ADMIN_URL}${image.attributes.url}`} alt='' />
        })

        return (
            <a key={idx} href={`/portfolio/${category.slug}`}>
                <figure>
                    <img src={`${CONSTANTS.ADMIN_URL}${category.images.data[0].attributes.url}`} alt='' />
                </figure>
                <span>{category.name}</span>
            </a>
        )
    })

    return (
        <div className='container'>
            <div className={styles.grid}>
                {showCategories}
            </div>
        </div>

    )
}
