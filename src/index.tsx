import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello App.js</h1>
}

const Content = () => {
    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                hic provident, eligendi consectetur ea architecto praesentium
                odit at sint ex, voluptate nesciunt voluptas sapiente non. Nulla
                doloremque a mollitia impedit?
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                blanditiis porro explicabo modi, mollitia, consequatur
                perferendis laboriosam ea illum ad fugiat quibusdam voluptatum
                ipsa eius! Magni voluptas mollitia commodi sunt.
            </p>
        </div>
    )
}

function App() {
    return (
        <div>
            <Title />
            <Content />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
