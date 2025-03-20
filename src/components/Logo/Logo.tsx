import { Typography } from '@mui/material'
import logo from 'assets/techno.png'
import './Logo.scss'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img className="img-logo" src={logo} alt="logo" />
        </Typography>
    )
}

export default Logo
