import Logo from "./Logo";

function Menu(props) {
    console.log(props)
    const buyCourse = (id) => {
        console.log('buy something', id)
    }
    return (
        <>
            Menu
            <div>Site name: {props.siteName}</div>
            <div>Version: {props.version}</div>
            <div>isPublic: {props.isPublic ? 'Public' : 'Private'}</div>
            <div>Owner: {props.owner.name} {props.owner.phone}</div>
            <div>Classes: {props.classes}</div>
            <div>Courses:</div>
            <ul>
                {props.courses.map(el => (
                    <li key={el.id}>
                        <strong>{el.title}</strong> {el.price}
                        <Logo siteName={props.siteName}/>
                        <button onClick={() => buyCourse(el.id)}>Buy</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Menu;