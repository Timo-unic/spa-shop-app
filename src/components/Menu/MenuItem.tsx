import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import './MenuItem.scss'

type Props = {
    to: string
    children: React.ReactNode
    onClick?: any
    disableRipple?: any
}

const MenuItem = ({ to, children, onClick, disableRipple }: Props) => {
    return (
        <Button
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'menu-item-active' : 'menu-item'
                }
                to={to}
            >
                {children}
            </NavLink>
        </Button>
    )
}

export default MenuItem
