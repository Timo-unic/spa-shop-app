import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'

type Props = {
    addProductToCart: (count: number, price: number) => void
}

const ProductsList = ({ addProductToCart }: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                component="h2"
                sx={{ marginBottom: '20px' }}
            >
                Here's a list of all our products
            </Typography>

            <Grid container spacing={3}>
                {productsArray.map(
                    ({
                        id,
                        title,
                        price,
                        rating,
                        describtion,
                        features,
                        categories,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                id={id}
                                title={title}
                                price={price}
                                rating={rating}
                                describtion={describtion}
                                features={features}
                                categories={categories}
                                image={image}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
