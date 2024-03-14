import { Button, Card, CardActions, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Quantity from 'components/Quantity/Quantity'

type Props = {
    productCount: number
    product: Product
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
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
                <Quantity
                    count={productCount}
                    onDecrement={() =>
                        productCount <= 1
                            ? removeProductFromCart(product.id)
                            : changeProductQuantity(
                                  product.id,
                                  productCount - 1
                              )
                    }
                    onIncrement={() =>
                        changeProductQuantity(product.id, productCount + 1)
                    }
                    // minCount={0}
                />
                <CardActions>
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteForeverIcon />
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
