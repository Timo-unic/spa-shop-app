import { Typography } from '@mui/material'
import logo from 'assets/techno.png'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
                src={logo}
                alt="logo"
                style={{ width: '200px', height: '50px' }}
            />
        </Typography>
    )
}

export default Logo
