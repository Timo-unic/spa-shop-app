import { useParams } from 'react-router-dom'
import productsShopArray from 'utils/productsShopArray'
import ProductCategoryList from './ProductCategoryList'

// type Props = {}
const ProductCategoryWrapper = () => {
    const { categoryId } = useParams<{ categoryId: string }>()
    const category = productsShopArray.find(
        (c) => c.id === parseInt(categoryId || '')
    )
    return category ? (
        <ProductCategoryList category={category} />
    ) : (
        <h1>Category not found</h1>
    )
}
export default ProductCategoryWrapper
