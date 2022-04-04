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
export async function getPortfolio() {
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