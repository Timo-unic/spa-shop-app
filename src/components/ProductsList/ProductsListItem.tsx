import { Button, Card, CardActions, CardContent } from '@mui/material'
import { useState } from 'react'
import Quantity from 'components/Quantity/Quantity'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispath, useAppSelector } from 'toolkit/hooks'
import { addLike, removeLike } from 'toolkit/likeReducer'
import { addProductToCart } from 'toolkit/cartReducer'
import './ProductsListItem.scss'

type Props = {
    id: number
    title: string
    price: number
    rating: number
    describtion: string
    features: string
    categories: string
    image: string
    addProductToCart?: (count: number, price: number) => void
}

const ProductsListItem = ({
    id,
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
        setCount((prevState) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    const isLiked = useAppSelector((state) => state.productsLikeState[id])

    const dispatch = useAppDispath()

    return (
        <Card
            variant="outlined"
            className="product"
            sx={{ position: 'relative' }}
        >
            <CardContent>
                <Button
                    className="btn-favorite"
                    variant="outlined"
                    sx={{ position: 'absolute' }}
                    onClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-price">{price}$</div>
                <div className="product-rating">{rating}stars</div>
                <div className="product-describtion">{describtion}</div>
                <div className="product-features">Pack: {features}</div>
                <div className="product-categories">{categories}</div>
                <Quantity
                    count={count}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                />
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button
                    variant="contained"
                    color="warning"
                    onClick={() =>
                        dispatch(
                            addProductToCart({
                                id,
                                count,
                            })
                        )
                    }
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
