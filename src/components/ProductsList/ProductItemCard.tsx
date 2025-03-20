import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from '@mui/material'
import { useState } from 'react'
import './ProductsListItem.scss'
import Quantity from 'components/Quantity/Quantity'

interface IProductProps {
    product: {
        id: number
        name: string
        image: string
        description?: string
        variations: IVariationProps[]
    }
}

interface IVariationProps {
    attributes: Record<string, string>
    price: number
    quantity: number
}

const ProductItemCard = ({ product }: IProductProps) => {
    const [selectedAttributes, setSelectedAttributes] = useState<
        Record<string, string>
    >(
        Object.fromEntries(
            Object.keys(product.variations[0].attributes).map((key) => [
                key,
                product.variations[0].attributes[key],
            ])
        )
    )
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    const selectedVariation = product.variations.find((v) =>
        Object.entries(selectedAttributes).every(
            ([key, value]) => v.attributes[key] === value
        )
    )

    const maxPrice = Math.max(
        ...product.variations.map((variation) => variation.price)
    )

    const minPrice = Math.min(
        ...product.variations.map((variation) => variation.price)
    )

    const quantityInStock = product.variations.reduce(
        (total, variation) => total + variation.quantity,
        0
    )

    // console.log('Selected Variation:', selectedVariation)

    const handleAttributeChange = (key: string, value: string) => {
        setSelectedAttributes((prev) => ({ ...prev, [key]: value }))
    }

    const uniqueValuesForAttribute = (attribute: string) => {
        return Array.from(
            new Set(
                product.variations
                    .map((v) => v.attributes[attribute])
                    .filter(Boolean)
            )
        )
    }

    return (
        <Box
            component="section"
            sx={{ backgroundColor: '#f7efec', padding: '30px' }}
        >
            <Container maxWidth="xl">
                <Grid container columnSpacing={3} columns={12}>
                    <Grid item xl={6}>
                        <Card variant="outlined">
                            <CardMedia>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="prodcard-image"
                                />
                            </CardMedia>
                        </Card>
                    </Grid>
                    <Grid item xl={6}>
                        <Card
                            variant="outlined"
                            sx={{
                                backgroundColor: 'white',
                                padding: '30px 50px',
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="h3"
                                    component="h2"
                                    sx={{
                                        marginBottom: '20px',
                                    }}
                                >
                                    {product.name}
                                </Typography>
                                <div className="prodcard-content-price">
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        sx={{
                                            color: '#bc4b20',
                                        }}
                                    >
                                        ${minPrice.toFixed(2)} - $
                                        {maxPrice.toFixed(2)}
                                    </Typography>
                                    <p className="prodcard-price-stock">
                                        <span className="prodcard-price-stock-quantity">
                                            {quantityInStock}
                                        </span>{' '}
                                        in Stock
                                    </p>
                                </div>
                                <div className="prodcard-review">{`(1 customer review)`}</div>
                                <Typography
                                    variant="h5"
                                    component="h5"
                                    sx={{
                                        marginBottom: '20px',
                                    }}
                                >
                                    {product.description}
                                </Typography>
                            </CardContent>
                            <CardActions
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'stretch',
                                }}
                            >
                                {Object.keys(
                                    product.variations[0].attributes
                                ).map((attribute) => (
                                    <label
                                        key={attribute}
                                        className="prodcard-attribute"
                                    >
                                        {attribute.charAt(0).toUpperCase() +
                                            attribute.slice(1)}
                                        :
                                        <ToggleButtonGroup
                                            color="warning"
                                            size="large"
                                            value={
                                                selectedAttributes[attribute]
                                            }
                                            exclusive
                                            onChange={(e) =>
                                                handleAttributeChange(
                                                    attribute,
                                                    (
                                                        e.target as HTMLButtonElement
                                                    ).value
                                                )
                                            }
                                            aria-label="Platform"
                                        >
                                            {uniqueValuesForAttribute(
                                                attribute
                                            ).map((value) => (
                                                <ToggleButton
                                                    key={value}
                                                    value={value}
                                                >
                                                    {value}
                                                </ToggleButton>
                                            ))}
                                        </ToggleButtonGroup>
                                    </label>
                                ))}
                                {selectedVariation ? (
                                    <>
                                        <p className="prodcard-item-content">
                                            Price:
                                            <span className="prodcard-item-price">
                                                $
                                                {selectedVariation.price.toFixed(
                                                    2
                                                )}
                                            </span>
                                            {selectedVariation.quantity} in
                                            Stock
                                        </p>
                                        <Quantity
                                            onDecrement={onDecrement}
                                            onIncrement={onIncrement}
                                            count={count}
                                            minCount={1}
                                            maxCount={
                                                selectedVariation.quantity
                                            }
                                        />
                                        <Button
                                            variant="contained"
                                            color="warning"
                                            size="large"
                                            sx={{
                                                marginBottom: '20px',
                                                borderRadius: '30px',
                                            }}
                                            disabled={
                                                selectedVariation.quantity === 0
                                            }
                                        >
                                            Add to cart
                                        </Button>
                                    </>
                                ) : (
                                    <p>
                                        Selected combination is not available.
                                    </p>
                                )}
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default ProductItemCard
