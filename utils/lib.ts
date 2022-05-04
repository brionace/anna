import axios from 'axios'
import qs from 'qs'

const ADMINURL = process.env.NODE_ENV === 'production' ? 'https://annapatonstudios.com' : 'http://127.0.0.1:1337'
const ADMIN_API = `${ADMINURL}/api`

export const ADMIN_URL = ADMINURL

// Site constants
export const CONSTANTS = {
    ADMIN_URL: ADMINURL
}

Object.freeze(CONSTANTS)

// Get a page
export async function getPage(page: string) {
    const res = await axios.get(`${ADMIN_API}/${page}`)
    return res.data
}

// Get Categories
export async function getCategories() {
    const res = await axios.get(`${ADMIN_API}/categories`)
    return res.data
}

// Get all Portfolio
export async function getWork() {
    // const query = qs.stringify({
    //     filters: {
    //       categories: {
    //         $contains: 'prints',
    //       },
    //     },
    //     pagination: {
    //         page: 1,
    //         pageSize: 1,
    //       }
    //   }, {
    //     encodeValuesOnly: true,
    //   })
    //   const query = qs.stringify({
    //     populate: ['categories'], 
    //   }, {
    //     encodeValuesOnly: true,
    //   }) http://localhost:1337/api/projects?populate=*
    const res = await axios.get(`${ADMIN_API}/projects?populate=*`)
    return res.data
}

export type AttributesProps = {
    categories?: {}
    createdAt: string
    description?: string
    images?: {
        data: {
            id: number
            attributes: {
                alternativeText: string
                caption: string
                createdAt: string
                ext: string
                formats: { thumbnail: {}, large: {}, medium: {}, small: {} }
                hash: string
                height: number
                mime: string
                name: string
                previewUrl: null
                provider: string
                provider_metadata: null
                size: Float32Array
                updatedAt: string
                url: string
                width: number
            }
        }[]
    }
    name?: string
    slug?: string
    publishedAt: string
    updatedAt: string
}

export type DataType = {
    id: number,
    attributes: AttributesProps
}

export type DataMetaType = {
    data: DataType
    meta: {}
}