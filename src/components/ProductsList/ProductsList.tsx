import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'

const ProductsList = () => {
    return (
        <>
            <Grid container spacing={3}>
                {productsArray.map(
                    ({
                        id,
                        title,
                        price,
                        rating,
                        describtion,
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
                                categories={categories}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
