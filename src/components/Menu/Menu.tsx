import MenuItemCategories from './MenuItemCategories'
import MenuItem from './MenuItem'
import MenuItemProducts from './MenuItemProducts'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItemProducts />
            <MenuItemCategories />
            <MenuItem to="/blog">Blog</MenuItem>
            <MenuItem to="/contact">Contact</MenuItem>
        </>
    )
}

export default Menu
