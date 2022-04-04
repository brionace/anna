import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Hat from '../../components/Hat'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from '../../styles/Pages.module.scss'

import { getPortfolio, getCategories, CONSTANTS } from '../../utils/lib'
import Project from '../../components/Project'
import ProjectList from '../../components/ProjectList'
import CategoryList from '../../components/CategoryList'

type PortfolioType = {
  projects: Record<string, Record<string, Record<string, string>>>
  categories: Record<string, Record<string, Record<string, string>>>
}

const Category: NextPage<PortfolioType> = ({ projects, categories }) => {
  const router = useRouter()
  const [currentCategory, setCurrentCategory] = useState<unknown>({})
  //if (!projects.data) return <p>Nothing available</p>
  
  // Pick the current category
  useEffect(()=>{
    for (const slug in categories.data){
      if(categories.data[slug].attributes.slug === router.query.category){
        return setCurrentCategory(categories.data[slug])
      }
    }
  },[])

  const name = (currentCategory.attributes !== undefined) ? currentCategory.attributes.name : ''

  return (
    <>

      <Hat title="Category" />

      <Header />

      <main className={styles.contents}>
        <div className='container'>
          
          <h1 className="displaynone">{name}</h1>
          
          <CategoryList category={currentCategory} list={categories.data} />

          <ProjectList>
          {[projects.data].map((project: unknown, idx: number) => {
            const images = project[0].attributes.images ? project[0].attributes.images : ''
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
  const projects = await getPortfolio()
  const categories = await getCategories()

  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
      categories: JSON.parse(JSON.stringify(categories))
    }
  }
}
