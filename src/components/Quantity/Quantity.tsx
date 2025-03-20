import { Button, TextField } from '@mui/material'

type Props = {
    onDecrement: () => void
    onIncrement: () => void
    count: number
    minCount?: number
    maxCount?: number
}

const Quantity = ({
    count,
    onDecrement,
    onIncrement,
    minCount = 0,
    maxCount = Infinity,
}: Props) => {
    console.log(count)
    return (
        <div className="product-quantity">
            <Button
                variant="outlined"
                onClick={() => onDecrement()}
                disabled={count <= minCount}
            >
                -
            </Button>
            <TextField value={count} sx={{ width: '100%' }} />
            <Button
                variant="outlined"
                onClick={() => onIncrement()}
                disabled={count >= maxCount}
            >
                +
            </Button>
        </div>
    )
}

export default Quantity
