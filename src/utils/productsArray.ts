type ProductProps = {
    title: string
    price: number
    rating: number
    describtion: string
    features: string
    categories: string
}

const productsArray: ProductProps[] = [
    {
    title: 'Large candle',
    price: 10,
    rating: 5,
    describtion: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    features: '2pcks',
    categories: 'Candles',
},
{
    title: 'Scented candles',
    price: 40,
    rating: 5,
    describtion: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    features: 'Silver 35cm',
    categories: 'Candles',
},
{
    title: 'Eucalyptus candle',
    price: 12,
    rating: 5,
    describtion: '',
    features: '',
    categories: 'Candles',
}
]

export default productsArray