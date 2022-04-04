import type { NextPage } from 'next'
import Hat from '../components/Hat'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Pages.module.scss'

import { getPage } from '../utils/lib'

type Page = {
    page: Record<string, Record<string, Record<string, string>>>
}

const Contact: NextPage<Page> = ({ page }) => {

    const description = () => {
        if (!page.data.attributes.description) return
        const description = page.data.attributes.description
        const email = page.data.attributes.email
        return (
            <>
                <p>{description}</p>
                <p><a href={`mailto:${email}`}>{`Email: ${email}`}</a></p>
            </>
        )
    }

    const content = () => {
        // if(!page.page.data.attributes.description) return
        // const description = page.page.data.attributes.description
        // return (
        //   <section className={styles.grid}>
        //       <div className='container'></div>
        //     </section>
        // )
    }

    return (
        <>

            <Hat title="Contact" />

            <Header />

            <main className={styles.contents}>
                <div className='container'>
                    <h1>Contact</h1>
                    {description()}
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Contact

export async function getServerSideProps() {
    const page = await getPage('contact')

    return {
        props: {
            page: JSON.parse(JSON.stringify(page))
        }
    }
}
