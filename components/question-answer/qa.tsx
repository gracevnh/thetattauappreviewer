type Props = {
    q: string,
    a: string
}

const QA = ({ q, a }: Props) => {
    return (
        <li>
            <a href={`#${q}`} id={q}><h3>{q}</h3></a>
            <p>{a}</p>
        </li>
    )
}

export default QA