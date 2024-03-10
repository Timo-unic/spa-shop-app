import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'

type Props = {}

const ProductsListItem = (props: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-title">Large candle</div>
                <div className="product-price">$10</div>
                <div className="product-rating">5stars</div>
                <div className="product-describtion">
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Vivamus magna justo, lacinia eget consectetur sed,
                    convallis at tellus.
                </div>
                <div className="product-features">Pack</div>
                <div className="product-categories">Candles</div>
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button variant="contained" color="warning">
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
