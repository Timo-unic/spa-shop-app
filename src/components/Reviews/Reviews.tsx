import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import { ChangeEvent, useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Antoin',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut natus sunt sed assumenda. Incidunt numquam impedit, quasi tempore dolorum adipisci minima, asperiores veritatis voluptates ipsum iste ullam, exercitationem deserunt.',
        },
        {
            name: 'Edite',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut natus sunt sed assumenda. Incidunt numquam impedit, quasi tempore dolorum adipisci minima, asperiores veritatis voluptates ipsum iste ullam, exercitationem deserunt.',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields is requaired')
        } else {
            setNewReview({
                name: '',
                text: '',
            })

            setReviews((prevState) => {
                return [...prevState, newReview]
            })
        }
    }

    return (
        <>
            <Typography variant="h4" component="h2" sx={{ margin: '60px 0' }}>
                Reviews
            </Typography>
            <div>
                {reviews.map((item, i) => (
                    <Card variant="outlined" sx={{ margin: '20px 0' }} key={i}>
                        <CardContent>
                            <div>{item.name}:</div>
                            <div>{item.text}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <form onSubmit={onSend}>
                <h3>Please leave a review</h3>
                <div>
                    <TextField
                        label="Name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Text"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="contained" color="warning" type="submit">
                    Send
                </Button>
            </form>
        </>
    )
}

export default Reviews
