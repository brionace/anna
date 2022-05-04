import type { NextPage } from 'next'
import Hat from '../components/Hat'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Project from '../components/Project'
import ProjectList from '../components/ProjectList'
import CategoryList from '../components/CategoryList'
import { getWork, getCategories, DataMetaType, DataType } from '../utils/lib'

import styles from '../styles/Pages.module.scss'

type PortfolioTypes = {
  projects: DataMetaType
  categories: DataMetaType
}

const Portfolio: NextPage<PortfolioTypes> = ({ projects, categories }) => {

  return (
    <>

      <Hat title="Portfolio" />

      <Header />

      <main className={styles.contents}>
        <div className='container'>
          <h1>Portfolio</h1>

          <ProjectList projects={projects} />

        </div>
      </main>

      <Footer />
    </>
  )
}

export default Portfolio

export async function getServerSideProps() {
  const projects = await getWork()
  const categories = await getCategories()

  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
      categories: JSON.parse(JSON.stringify(categories))
    }
  }
}
