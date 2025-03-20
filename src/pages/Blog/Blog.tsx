import { Grid } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'
import TitleBanner from 'components/TitleBanner/TitleBanner'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'toolkit/hooks'

const Blog = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    return (
        <>
            <TitleBanner titleBanner="Latest tips & tricks" />
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
            <Link to="/checkout">Proceed to Checkout</Link>
        </>
    )
}

export default Blog
