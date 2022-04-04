import type { NextPage } from 'next'
import Hat from '../components/Hat'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Categories from '../components/Categories'

import styles from '../styles/Pages.module.scss'

import { getPage } from '../utils/lib'

type PageTypes = {
  page: Record<string, Record<string, Record<string, Record<string, string>>>>
}

const Home: NextPage<PageTypes> = ({ page }) => {

  // if (!page.data){
  //   return 'Page load'
  // }

  const hero = () => {
    return (
      <section>
        <div className="container">
          <p className='h1'>{page.data.attributes.description}</p>
        </div>
      </section>
    )
  }


  return (
    <>
      <Hat description="All my designs in one place" />

      <Header />

      <main className={styles.contents}>

        <h1 style={{ display: "none" }}>
          {`Welcome to Anna Paton Studios`}
        </h1>
        
        {hero()}
        
        <Categories />
      
      </main>

      <Footer />
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const page = await getPage('homepage')

  return {
    props: {
      page: JSON.parse(JSON.stringify(page))
    }
  }
}
