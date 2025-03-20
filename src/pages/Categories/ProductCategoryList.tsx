import { Container, Grid } from '@mui/material'
import ProductCategoryItem from './ProductCategoryItem'
import TitleBanner from 'components/TitleBanner/TitleBanner'

interface ICategoryProductProps {
    category: {
        id: number
        name: string
        image: string
        description?: string
        products: IProductProps[]
    }
}

interface IProductProps {
    id: number
    name: string
    image: string
    description?: string
}

const ProductCategoryList = ({ category }: ICategoryProductProps) => {
    return (
        <>
            <TitleBanner titleBanner={category.name.toLocaleUpperCase()} />
            <Container maxWidth="lg">
                <Grid
                    container
                    columnSpacing={2}
                    rowSpacing={1}
                    sx={{ marginBottom: 20 }}
                >
                    {/* <Typography variant="h3" component="h5" align="center">
                {category.name.toLocaleUpperCase()}
            </Typography> */}

                    {category.products.map((product) => (
                        <Grid item xs={3} sm={6} md={4} key={product.id}>
                            <ProductCategoryItem
                                id={product.id}
                                name={product.name}
                                image={product.image}
                                description={product.description}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}
export default ProductCategoryList
