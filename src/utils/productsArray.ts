type Product = {
    title: string
    price: number
    rating: number
    describtion: string
    features: string
    categories: string
    id:number
    image: string
}

const productsArray: Product[] = [
    {
    id:1,
    title: 'Large candle',
    price: 10,
    rating: 5,
    describtion: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    features: '2pcks',
    categories: 'Candles',
    image: "/images/product-large.jpg",
},
{
    id:2,
    title: 'Scented candles',
    price: 40,
    rating: 5,
    describtion: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    features: 'Silver 35cm',
    categories: 'Candles',
    image: "/images/product-scented.jpg",
},
{
    id:3,
    title: 'Eucalyptus candle',
    price: 12,
    rating: 5,
    describtion: '',
    features: '',
    categories: 'Candles',
    image: "/images/product-eucalyptus.jpg",
},
{
    id:4,
    title: 'Ceramic creamer',
    price: 90,
    rating: 5,
    describtion: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    features: 'Gold 40cm',
    categories: 'Ceramics',
    image: "/images/product-creamer.jpg",
},
{
    id:5,
    title: 'Ceramic plates',
    price: 60,
    rating: 5,
    describtion: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    features: 'Platinum 40cm',
    categories: 'Ceramics',
    image: "/images/product-plates.jpg",
},
{
    id:6,
    title: 'Ceramic bowls',
    price: 40,
    rating: 5,
    describtion: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    features: 'Silver 50cm',
    categories: 'Ceramics',
    image: "/images/product-bowls.jpg",
},
{
    id:7,
    title: 'Handmade man necklace',
    price: 40,
    rating: 5,
    describtion: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    features: 'Silver 35cm',
    categories: 'Handmade jewels',
    image: "/images/product-necklace.jpg",
},
{
    id:8,
    title: 'Seashell earrings',
    price: 90,
    rating: 5,
    describtion: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    features: 'Gold 40cm',
    categories: 'Handmade jewels',
    image: "/images/product-seashell.jpg",
},
{
    id:9,
    title: 'Pearl and gold earrings',
    price: 60,
    rating: 5,
    describtion: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    features: 'Platinum 40cm',
    categories: 'Handmade jewels',
    image: "/images/product-pear&gold.jpg",
},
{
    id:10,
    title: 'Tropical plant',
    price: 15,
    rating: 5,
    describtion: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.",
    features: 'Medium',
    categories: 'Plants',
    image: "/images/product-tropical.jpg",
},
{
    id:11,
    title: 'Small terrarium',
    price: 15,
    rating: 5,
    describtion: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.",
    features: 'Small',
    categories: 'Plants',
    image: "/images/product-smterrarium.jpg",
},
{
    id:12,
    title: 'Small plant',
    price: 15,
    rating: 5,
    describtion: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.",
    features: 'Large',
    categories: 'Plants',
    image: "/images/product-smplant.jpg",
},
]

export default productsArray