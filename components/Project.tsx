import { useState } from 'react'
import Image from 'next/image'

import styles from '../styles/Project.module.scss'
import { CONSTANTS, DataType } from '../utils/lib'

interface ProjectType {
    project: DataType
}

export default function Project({ project }: ProjectType) {
    const [large, setLarge] = useState(false)
    const { name, images } = project.attributes

    // @ts-ignore
    const image_url = images.data[0].attributes.url
    // const imagelist = images?.data.map(image => {
    //     return (
    //         <Image
    //             key={image.id}
    //             src={`${CONSTANTS.ADMIN_URL}${image.attributes.url}`}
    //             alt=""
    //             layout="fill"
    //         />
    //     )
    // })

    return (
        <div>
            <div className={styles.card}>
                <figure className={styles.figure}>
                    {/* {large && <button className={`${styles.close}`} onClick={doSetLarge}>CLOSE</button>}
                    <span className={`${styles.nav} prev`}>PREV</span>
                    <span className={`${styles.nav} next`}>NEXT</span>
                    <div className={`${styles.carousel} carousel`}>
                        {imagelist}
                    </div> */}
                    <img src={`${CONSTANTS.ADMIN_URL}${image_url}`} alt='' />
                </figure>
                <h3>{name}</h3>
            </div>
        </div>
    )
}
