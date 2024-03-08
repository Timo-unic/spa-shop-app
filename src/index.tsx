import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './Content'

interface ItitleProps {
    text: string
}

const Title = (props: ItitleProps) => {
    console.log(props)
    return <h1>Hello {props.text}</h1>
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
