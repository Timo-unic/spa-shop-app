import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'

type Props = {
    title: string
    price: number
    rating: number
    describtion: string
    features: string
    categories: string
}

const ProductsListItem = ({
    title,
    price,
    rating,
    describtion,
    features,
    categories,
}: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-title">{title}</div>
                <div className="product-price">{price}$</div>
                <div className="product-rating">{rating}stars</div>
                <div className="product-describtion">{describtion}</div>
                <div className="product-features">Pack: {features}</div>
                <div className="product-categories">{categories}</div>
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
