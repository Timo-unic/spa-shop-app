import { Grid, Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
}

const Blog = ({ productsInCart, removeProductFromCart }: Props) => {
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
                    removeProductFromCart={removeProductFromCart}
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default Blog
