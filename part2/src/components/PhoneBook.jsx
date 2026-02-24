import { useState } from 'react'

const PhoneBook = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '095123F',
            important: true
        }
    ])
    const [newName, setNewName] = useState({
        name: '',
        number: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewName(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleAddperson = (e) => {
        e.preventDefault();

        const exists = persons.find((person) => person.name === newName);

        if (exists) {
            alert(`${newName} is already added to phonebook`)
            return
        }

        setPersons((prev) => [
            ...prev,
            {
                name: newName.name,
                number: newName.number
            }
        ]);
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name: <input
                        name='name'
                        value={newName.name}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    number: <input
                        name='number'
                        value={newName.number}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        onClick={(e) => handleAddperson(e)}
                    >add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map((person) =>
                    <li key={person.name}>
                        <p>Name: {person.name} Number: {person.number}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default PhoneBook
