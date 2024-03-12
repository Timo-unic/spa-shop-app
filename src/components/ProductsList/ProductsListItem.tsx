import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductsListItem.scss'
import { useState } from 'react'

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
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount(count + 1)
    }

    const onDecrement = () => {
        setCount(count - 1)
    }

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
                    <Button variant="outlined" onClick={() => onDecrement()}>
                        -
                    </Button>
                    <TextField size="small" value={count} />
                    <Button variant="outlined" onClick={() => onIncrement()}>
                        +
                    </Button>
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
