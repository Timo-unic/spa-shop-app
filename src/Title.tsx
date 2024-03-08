type Props = {
    text: string
}

const Title = (props: Props) => {
    return <h1>Hello {props.text}</h1>
}

export default Title
