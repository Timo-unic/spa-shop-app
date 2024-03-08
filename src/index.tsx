import React from 'react'
import ReactDOM from 'react-dom/client'
import { Content } from './Content'
import Title from './Title'

function App() {
    return (
        <>
            <Title text="React" />
            <Title text="Js" />
            <Content
                text1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut debitis ratione soluta nostrum fuga hic sint "
                text2="molestias, quidem distinctio labore odit tempore dolor! Est iusto, eligendi quas quos at placeat."
                year={2023}
            />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
