import MenuItem from './MenuItem'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/products">Products</MenuItem>
            <MenuItem to="/categories">Categories</MenuItem>
            <MenuItem to="/blog">Blog</MenuItem>
            <MenuItem to="/contact">Contact</MenuItem>
        </>
    )
}

export default Menu
