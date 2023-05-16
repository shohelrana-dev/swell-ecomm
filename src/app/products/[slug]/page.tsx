import { getProductBySlugOrId } from '@/lib/swell/products'
import Product from '@/components/product'

export default async function Page( { params }: { params: { slug: string } } ) {
    const product = await getProductBySlugOrId( params.slug )

    return <Product product={ product }/>
}