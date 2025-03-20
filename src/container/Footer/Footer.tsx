import { Typography } from '@mui/material'

type Props = {}

const Footer = (props: Props) => {
    return (
        <Typography
            variant="h5"
            align="center"
            component="div"
            sx={{
                backgroundColor: '#bc4b20',
                color: 'white',
                padding: '20px',
                fontSize: '16px',
            }}
        >
            © 2012 - 2025 • Website Builded by React TS Technology • All Rights
            Reserved • Developed by MofeyFusion
        </Typography>
    )
}

export default Footer
