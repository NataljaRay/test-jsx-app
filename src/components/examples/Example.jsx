import Button from "./Button";

export default () => {
    const users = [
        {age: 15, name: 'John'},
        {age: 20, name: 'Ray'},
        {age: 30, name: 'Bill'},
    ]
    return (
        <>
            <h2 id="title" className="title">
                Example <br/>
                <small>
                   4556
                </small>
            </h2>
            <label htmlFor="dsdsds"></label>
            <input
                tabIndex="0"
                maxLength="16"
            />
            <Button mode="default" test={10} dsds="123" config={{
                name: 'name',
                age: 33,
                address: {
                    city: 'Kazan',
                    code: 12321
                }
            }}/>
            <Button mode="accent" label={<b>BOLD</b>}/>
            <Button>
                <span>Curs</span>
            </Button>
            <Button label="Кнопка 1"/>
            <p>paragraph</p>

            <ul >
                {users.map(({age, name}, index) => (
                    <li key={index}>
                        Name: {name}, age: {age}
                    </li>
                ))}
            </ul>
        </>
    )
}

