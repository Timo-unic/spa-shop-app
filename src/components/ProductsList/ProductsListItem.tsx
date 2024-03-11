import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductsListItem.scss'

type Props = {
    title: string
    price: number
    rating: number
    describtion: string
    features: string
    categories: string
    image: string
}

const ProductsListItem = ({
    title,
    price,
    rating,
    describtion,
    features,
    categories,
    image,
}: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-price">{price}$</div>
                <div className="product-rating">{rating}stars</div>
                <div className="product-describtion">{describtion}</div>
                <div className="product-features">Pack: {features}</div>
                <div className="product-categories">{categories}</div>
                <div className="product-quantity">
                    <Button variant="outlined">-</Button>
                    <TextField size="small" value="1" />
                    <Button variant="outlined">+</Button>
                </div>
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
