import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from './MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
import productsShopArray from 'utils/productsShopArray'

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        display: 'flex',
        flexDirection: 'column',
        color:
            theme.palette.mode === 'light'
                ? 'rgb(55, 65, 81)'
                : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}))

const MenuItemCategories = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Button
                id="demo-customized-button"
                sx={{
                    color: 'black',
                    '&:hover': { color: '#bc4b20' },
                }}
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Categories
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {productsShopArray.map((category) => (
                    <MenuItem
                        key={category.id}
                        to={`product-category/${category.id}`}
                        onClick={handleClose}
                        disableRipple
                    >
                        {category.name}
                    </MenuItem>
                ))}
                {/* <MenuItem
                    to="product-category/ceramics"
                    onClick={handleClose}
                    disableRipple
                >
                    Ceramics
                </MenuItem>

                <MenuItem
                    to="product-category/jewels"
                    onClick={handleClose}
                    disableRipple
                >
                    Handmade jewels
                </MenuItem>
                <MenuItem
                    to="product-category/candles"
                    onClick={handleClose}
                    disableRipple
                >
                    Candles
                </MenuItem>
                <MenuItem
                    to="product-category/plants"
                    onClick={handleClose}
                    disableRipple
                >
                    Plants
                </MenuItem>
                <MenuItem
                    to="product-category/decor"
                    onClick={handleClose}
                    disableRipple
                >
                    Decorations
                </MenuItem> */}
            </StyledMenu>
        </div>
    )
}

export default MenuItemCategories
