import { getProducts } from '@/lib/swell/products'
import Products from '@/components/products'

export default async function Page() {
    const { results: products } = await getProducts( { page: 1 } )

    return <Products products={ products }/>
}