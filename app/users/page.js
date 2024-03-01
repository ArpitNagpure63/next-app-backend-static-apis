import Link from "next/link";

const getUsers = async () => {
    const data = await fetch('http://localhost:3000/api/users/');
    const userList = await data.json();
    return userList;
};

const Users = async () => {
    const userDetails = await getUsers();
    return <div>
        <div className="container">User Lists</div>
        {
            userDetails.map((item, index) => {
                return <div key={index} className="container">
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                    <Link href={`/users/${item.id}/edituser`}>Edit</Link>
                    <Link href={`/users/${item.id}/deleteuser`}>Delete</Link>
                    <Link href={`/users/${item.id}`}>{item.id}</Link>
                </div>
            })
        }
    </div>
};

export default Users;