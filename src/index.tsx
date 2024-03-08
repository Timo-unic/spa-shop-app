import React from 'react'
import ReactDOM from 'react-dom/client'
import { text } from 'stream/consumers'

interface ItitleProps {
    text: string
}

type ContentProps = {
    text1: string
    text2: string
    year: number
}

const Title = (props: ItitleProps) => {
    console.log(props)
    return <h1>Hello {props.text}</h1>
}

const Content = (props: ContentProps) => {
    return (
        <React.Fragment>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <div>Year: {props.year}</div>
        </React.Fragment>
    )
}

function App() {
    return (
        <>
            <Title text="React" />
            <Title text="Js" />
            <Content text1="Hello World1" text2="Hello World2" year={2023} />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
