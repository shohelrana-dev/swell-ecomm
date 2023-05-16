import swell from './client'
import { PRODUCTS_PER_PAGE } from '../constants'

export const getProducts = async ( data: any ) => {
    const { page = 1, filters = {}, limit = PRODUCTS_PER_PAGE } = data
    return await swell.products.list( {
        page,
        limit,
        $filters: filters,
        expand: ['variants', 'categories']
    } )
}

export const getProductBySlugOrId = async ( slugOrId: string ) => {
    return await swell.products.get( slugOrId )
}