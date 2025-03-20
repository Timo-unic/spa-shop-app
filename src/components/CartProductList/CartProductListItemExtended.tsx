import { Button, Card, CardActions, CardContent, Grid } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Quantity from 'components/Quantity/Quantity'
import { useAppDispath } from 'toolkit/hooks'
import {
    changeProductQuantity,
    removeProductFromCart,
} from 'toolkit/cartReducer'
import { IProductType } from 'utils/modelProductsArray'

type Props = {
    productCount: number
    product: IProductType
}

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    const dispatch = useAppDispath()

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
                            ? dispatch(removeProductFromCart(product.id))
                            : dispatch(
                                  changeProductQuantity({
                                      id: product.id,
                                      count: productCount - 1,
                                  })
                              )
                    }
                    onIncrement={() =>
                        dispatch(
                            changeProductQuantity({
                                id: product.id,
                                count: productCount + 1,
                            })
                        )
                    }
                    // minCount={0}
                />
                <CardActions>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            dispatch(removeProductFromCart(product.id))
                        }
                    >
                        <DeleteForeverIcon />
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
