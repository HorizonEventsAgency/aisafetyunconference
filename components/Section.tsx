
export default function Section(props) {
    return (
        <div >
            <h2 className="text-2xl my-5 mb-2">{props.title}</h2>
            {props.children}
        </div>
    )
}

