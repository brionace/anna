import type { NextPage } from 'next'
import Hat from '../components/Hat'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Project from '../components/Project'
import ProjectList from '../components/ProjectList'
import CategoryList from '../components/CategoryList'
import { getPortfolio, getCategories } from '../utils/lib'

import styles from '../styles/Pages.module.scss'

type PortfolioType = {
  projects: Record<string, Record<string, Record<string, string>>>
  categories: Record<string, Record<string, Record<string, string>>>
}

const Portfolio: NextPage<PortfolioType> = ({ projects, categories }) => {
  if (!projects.data || !categories.data) return false

  return (
    <>

      <Hat title="Portfolio" />

      <Header />

      <main className={styles.contents}>
        <div className='container'>
          <h1 className='displaynone'>Portfolio</h1>

          <CategoryList list={categories.data} />

          <ProjectList>
            {[projects.data].map((project: unknown) => {
              return project.map(p => {
                const images = p.attributes.images ? p.attributes.images : ''

                return (
                  <Project key={p.id} name={p.attributes.name} images={images} />
                )
              })
            })}
          </ProjectList>

        </div>
      </main>

      <Footer />
    </>
  )
}

export default Portfolio

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
