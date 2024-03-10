import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" align="center" component="h2">
                Here's a list of all our products
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="Large candle"
                        price={10}
                        rating={5}
                        describtion="Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Vivamus magna justo, lacinia eget consectetur sed,
                    convallis at tellus."
                        features="2pcks"
                        categories="Candles"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="Scented candles"
                        price={40}
                        rating={5}
                        describtion="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
                        features="Silver 35cm"
                        categories="Candles"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="Eucalyptus candle"
                        price={12}
                        rating={5}
                        describtion=""
                        features=""
                        categories="Candles"
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
