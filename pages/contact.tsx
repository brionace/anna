import type { NextPage } from 'next'
import Hat from '../components/Hat'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Pages.module.scss'

import { getPage, DataMetaType } from '../utils/lib'

type ContactTypes = {
    page: DataMetaType
}

const Contact: NextPage<ContactTypes> = ({ page }) => {

    const description = () => {
        // @ts-ignore
        const email = page.data.attributes.email
        return (
            <>
                <p>{page.data.attributes.description}</p>
                <p><a href={`mailto:${email}`}>{`Email: ${email}`}</a></p>
            </>
        )
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
