import { NextPage } from "next"

interface Props {
  title: string
}

const Section: NextPage<Props> = (props) => {
    return (
        <div >
            <h2 className="text-2xl my-5 mb-2">{props.title}</h2>
            {props.children}
        </div>
    )
}

export default Section
