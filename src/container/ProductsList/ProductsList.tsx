import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'

type Props = {}

type ProductProps = {
    title: string
    price: number
    rating: number
    describtion: string
    features: string
    categories: string
}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" align="center" component="h2">
                Here's a list of all our products
            </Typography>

            <Grid container spacing={3}>
                {productsArray.map(
                    ({
                        title,
                        price,
                        rating,
                        describtion,
                        features,
                        categories,
                    }: ProductProps) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductsListItem
                                title={title}
                                price={price}
                                rating={rating}
                                describtion={describtion}
                                features={features}
                                categories={categories}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
