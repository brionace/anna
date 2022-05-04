import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Hat from '../../components/Hat'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from '../../styles/Pages.module.scss'

import { getWork, getCategories, DataMetaType, DataType } from '../../utils/lib'
import Project from '../../components/Project'
import ProjectList from '../../components/ProjectList'
import CategoryList from '../../components/CategoryList'

interface PortfolioTypes {
  projects: DataMetaType
  categories: DataType[]
}

const Category: NextPage<PortfolioTypes> = ({ projects, categories }) => {
  const { query } = useRouter();
  const currentCategory = categories.find((category: DataType) => {

    if(category.attributes.slug !== undefined || query.category !== undefined){
      return category.attributes.slug?.toLowerCase() === query.category
    }
    
  });

  return (
    <>

      <Hat title="Category" />

      <Header />

      <main className={styles.contents}>
        <div className='container'>
          
          <h1 className="displaynone">{currentCategory?.attributes.name}</h1>
          
          <CategoryList category={currentCategory} categories={categories} />

          <ProjectList>
          {[projects.data].map((project: unknown, idx: number) => {
            const images: unknown = project[0].attributes.images ? project[0].attributes.images : ''
            return (
                <Project key={idx} name={project[0].attributes.name} images={images} />
            )
          })}
          </ProjectList>

        </div>
      </main>

      <Footer />

    </>
  )
}

export default Category

export async function getServerSideProps() {
  const projects = await getWork()
  const categories = await getCategories()

  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
      categories: JSON.parse(JSON.stringify(categories.data))
    }
  }
}
