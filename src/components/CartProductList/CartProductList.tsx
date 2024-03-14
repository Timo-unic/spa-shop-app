import productsArray, { Product, getProductsObject } from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    removeProductFromCart?: (id: number) => void
    CartItem?: any
}

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    removeProductFromCart,
    CartItem = CartProductListItem,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                    removeProductFromCart={removeProductFromCart}
                />
            ))}
        </>
    )
}

export default CartProductList
