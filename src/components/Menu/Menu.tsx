import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">
                <Link to="/">Home</Link>
            </Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">Categories</Button>
            <Button color="inherit">
                <Link to="/blog">Blog</Link>
            </Button>
            <Button color="inherit">Contact</Button>
        </>
    )
}

export default Menu
