import School from "./School";
import Teacher from "./Teacher";
import Menu from "./Menu";
import Logo from "./Logo";
import Contacts from "./Contacts";

function App() {

    const title = 'PASV'
    const city = 'Atlanta'
    const name = 'Victor'
    const subject = 'React'

    const siteName = 'LocalCoding';
    const version = 2;
    const owner = {
        name: 'PASV',
        zip: '30000',
        phone: '111-222-3344'
    };
    const classes = ['JS', 'React', 'QA'];
    const courses = [
        {
            id: 'wxyz',
            title: 'JS',
            price: 253
        },
        {
            id: 'abcdef',
            title: 'React',
            price: 567
        },
        {
            id: 'klmnop',
            title: 'QA',
            price: 5467
        }
    ];

    return (
        <div>
            <School
                name={title}
                city={city}
            />
            <hr/>
            <Teacher
                name={name}
                grade={subject}
            />
            <hr/>
            <Menu
                siteName={siteName}
                version={version}
                isPublic={true}
                owner={owner}
                classes={classes}
                courses={courses}
            />
            <Logo siteName={siteName}/>

            <Contacts name={'Some name'}>
                <h4>Hello</h4>
                <div>Describe</div>
            </Contacts>

        </div>
    );
}

export default App;
