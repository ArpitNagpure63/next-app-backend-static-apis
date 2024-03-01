import Link from "next/link";

const getSpecificUsers = async (id) => {
    const data = await fetch(`http://localhost:3000/api/users/${id}`);
    const userList = await data.json();
    return userList;
};

const Users = async ({ params }) => {
    const specificUser = await getSpecificUsers(params.id);
    console.log(specificUser);
    return <div>
        <div className="container">Specific User Lists</div>
        {specificUser.error ?
            <div>{specificUser.error}</div>
            :
            <div className="container">
                <div>{specificUser.name}</div>
                <div>{specificUser.email}</div>
            </div>
        }
        <Link className="container" href="/users">Go To Users</Link>
    </div>
};

export default Users;