function School(props) {
    // console.log(props)
    return (
        <div>
            School
            <ul>
                <li>{props.name}</li>
                <li>{props.city}</li>
            </ul>
        </div>
    )
}

export default School;