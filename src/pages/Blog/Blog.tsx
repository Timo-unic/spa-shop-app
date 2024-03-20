import { Grid, Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'toolkit/hooks'

const Blog = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    return (
        <div>
            <Typography
                variant="h4"
                component="h1"
                sx={{ marginBottom: '20px' }}
            >
                Basket
            </Typography>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
            <Link to="/checkout">Proceed to Checkout</Link>
        </div>
    )
}

export default Blog
