import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type IProductProps = {
    id: number
    name: string
    image: string
    description?: string
}
const ProductCategoryItem = ({
    image,
    name,
    id,
    description,
}: IProductProps) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}>
                <CardMedia image={image} title={name} sx={{ height: 170 }} />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                            color: 'text.primary',
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                        }}
                    >
                        {description}
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    )
}
export default ProductCategoryItem
