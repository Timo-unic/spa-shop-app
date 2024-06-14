import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import './Header.scss'
import Menu from 'components/Menu/Menu'

const Header = () => {
    return (
        <AppBar position="static" className="app-bar">
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <Menu />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
