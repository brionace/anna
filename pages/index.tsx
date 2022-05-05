import type { NextPage } from 'next'
import Hat from '../components/Hat'
import Header from '../components/Header'
import Footer from '../components/Footer'

import styles from '../styles/Pages.module.scss'

import { getPage, DataMetaType } from '../utils/lib'

interface HomeProps {
  page: DataMetaType
}

const Home: NextPage<HomeProps> = ({ page }) => {

  return (
    <>
      <Hat description="All my designs in one place" />

      <Header />

      <main className={styles.contents}>

        <h1 style={{ display: "none" }}>
          {`Welcome to Anna Paton Studios`}
        </h1>

        <section>
          <div className="container">
            <p className='h1'>{page.data.attributes.description}</p>
          </div>
        </section>

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
