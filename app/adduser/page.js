'use client'
import { useState } from "react";

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);

    const handleClick = async () => {
        console.log('name---->', name, email, age);
        const response = await fetch('http://localhost:3000/api/users/', { method: 'POST', body: JSON.stringify({ name, email, age }) });
        const data = await response.json();
        console.log('response--->', data);
        alert(data.text)
    };

    return <div className="container-column">
        <div className="container">Welcome to add user page</div>
        <input type="text" placeholder="Add user name" className="input-field" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Add user email" className="input-field" onChange={(e) => setEmail(e.target.value)} />
        <input type="number" placeholder="Add user age" className="input-field" onChange={(e) => setAge(e.target.value)} />
        <button className="cta-button" onClick={handleClick}>Add New User</button>
    </div>
}

export default AddUser;