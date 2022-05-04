import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Categories.module.scss'

import { getCategories, getPortfolio, CONSTANTS, DataType } from '../utils/lib'
import { AnyRecord } from 'dns'

type NewCat = {
    name: string
    slug: string | unknown
    images: {
        data: DataType[]
    }
}

type CategoriesType = {
    categories?: DataType,
    portfolio?: DataType
}

export default function Categories({ categories, portfolio }: CategoriesType) {
    const [allcategories, setAllCategories] = useState<NewCat[]>([])

    useEffect(() => {
        fetchCategories()
    }, [])

    async function fetchCategories() {
        const ids: number[] = []
        const finale: NewCat[] = []

        //fetch categories
        const categories = await getCategories()

        // then attach images first image from projects
        const portfolio = await getPortfolio()

        categories.data.forEach((category: DataType) => {
            const catId: number = category.id

            portfolio.data.forEach((project: DataType) => {
                if (!ids.includes(catId)) {
                    if (project.attributes.categories.data.some((e: DataType) => e.id === catId)) {
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

    const showCategories = allcategories.map((category: NewCat, idx: number) => {
        const images = category.images.data.map((image, idx) => {
            return <img key={idx} src={`${CONSTANTS.ADMIN_URL}${image.attributes.url}`} alt='' />
        })
        
        return (
            <a key={idx} href={`/portfolio/${category.slug}`}>
                <figure>
                    <img src={`${CONSTANTS.ADMIN_URL}${category.images.data[0].attributes.url}`} alt='' />
                </figure>
                <span>{category.name}</span>
                <div className="blob">
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
  <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
  </svg>
</div>
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
