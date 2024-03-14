import { Button, Card, CardActions, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

type Props = {
    productCount: number
    product: Product
}

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                </CardContent>
                <CardActions>
                    <Button variant="outlined">
                        <DeleteForeverIcon />
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
