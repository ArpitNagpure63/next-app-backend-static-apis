'use client';

const DeleteUser = ({ params }) => {
    const handleDeleteClick = async () => {
        const response = await fetch(`http://localhost:3000/api/users/${params.id}`, { method: 'DELETE' });
        const data = await response.json();
        alert(data.text)
    };

    return <div className="container-column">
        <div className="container">Welcome to delete user page</div>
        <button onClick={handleDeleteClick}>Delete user</button>
    </div>
}

export default DeleteUser;