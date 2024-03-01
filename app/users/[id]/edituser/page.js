'use client';

import { useEffect, useState } from "react";

const EditUser = ({ params }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);

    const getSpecificUsers = async (id) => {
        const response = await fetch(`http://localhost:3000/api/users/${params.id}`);
        const specificUser = await response.json();
        console.log('data--->', specificUser);
        if (specificUser.name) setName(specificUser.name);
        if (specificUser.email) setEmail(specificUser.email);
        if (specificUser.age) setAge(specificUser.age);
    };

    const handleEdit = async () => {
        const response = await fetch(`http://localhost:3000/api/users/${params.id}`, { method: 'PUT', body: JSON.stringify({ name, email, age }) });
        const updatedUser = await response.json();
        alert(updatedUser.text);
    }

    useEffect(() => {
        getSpecificUsers();
    }, []);

    return <div className="container-column">
        <div className="container">Welcome to edit user page</div>
        <input type="text" placeholder="Edit user name" className="input-field" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Edit user email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="number" placeholder="Edit user age" className="input-field" value={age} onChange={(e) => setAge(e.target.value)} />
        <button className="cta-button" onClick={handleEdit}>Add New User</button>
    </div>
};

export default EditUser;