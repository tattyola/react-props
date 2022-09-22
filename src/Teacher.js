function Teacher(props) {
    // console.log(props)
    return (
        <div>
            Teacher
            <ul>
                <li>{props.name}</li>
                <li>{props.grade}</li>
            </ul>
        </div>
    )
}

export default Teacher;