import TitleBanner from 'components/TitleBanner/TitleBanner'
import ProductsList from 'components/ProductsList/ProductsList'
import Reviews from 'components/Reviews/Reviews'
import { Container } from '@mui/material'

type Props = {}
const ShopPage = (props: Props) => {
    return (
        <>
            <TitleBanner
                titleBanner="Shop"
                subTitleBanner="Here's a list of all our products"
            />
            <Container>
                <ProductsList />
                <Reviews />
            </Container>
        </>
    )
}
export default ShopPage
