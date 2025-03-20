import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import Blog from 'pages/Blog/Blog'
import CheckoutPage from 'pages/Checkout/CheckoutPage'
import TopHeader from 'container/Header/TopHeader'
import ShopPage from 'pages/Shop/ShopPage'
import ContactPage from 'pages/Contact/ContactPage'
import AboutPage from 'pages/About/AboutPage'
import ProductWrapper from 'components/ProductsList/ProductWrapper'
import ProductCategoryWrapper from 'pages/Categories/ProductCategoryWrapper'

// type Props = {}

const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <TopHeader />
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="shop" element={<ShopPage />} />
                <Route
                    path="product-category/:categoryId"
                    element={<ProductCategoryWrapper />}
                />
                <Route
                    path="products/:productId"
                    element={<ProductWrapper />}
                />
                <Route path="blog" element={<Blog />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
            </Routes>

            <Footer />
        </StyledEngineProvider>
    )
}

export default App
