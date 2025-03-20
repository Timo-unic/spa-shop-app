import { Typography } from '@mui/material'
import separator from 'assets/separator.svg'
import './TitleBanner.scss'

type Props = {
    titleBanner: string
    subTitleBanner?: string
}
const TitleBanner = ({
    titleBanner = "Here's a list of all our products",
    subTitleBanner,
}: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                component="h2"
                className="title-content"
            >
                {titleBanner}
                <span className="sub-title">{subTitleBanner}</span>
            </Typography>
            <div className="img-content">
                <img className="img-separator" src={separator} alt="" />
            </div>
        </>
    )
}
export default TitleBanner
