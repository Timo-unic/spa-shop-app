import { useParams } from 'react-router-dom'
import productsShopArray from 'utils/productsShopArray'
import ProductItemCard from './ProductItemCard'

// type Props = {}

const ProductWrapper = () => {
    const { productId } = useParams<{ productId: string }>()
    const product = productsShopArray
        .flatMap((c) => c.products)
        .find((p) => p.id === parseInt(productId || ''))
    return product ? (
        <ProductItemCard product={product} />
    ) : (
        <h1>Product not found</h1>
    )
}
export default ProductWrapper
