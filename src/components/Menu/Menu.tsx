import MenuItemCategories from './MenuItemCategories'
import MenuItem from './MenuItem'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/shop">Shop</MenuItem>
            <MenuItemCategories />
            <MenuItem to="/blog">Blog</MenuItem>
            <MenuItem to="/contact">Contact</MenuItem>
        </>
    )
}

export default Menu
