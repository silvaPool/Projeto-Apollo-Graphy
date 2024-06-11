import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
    query GetUsers {
        users {
            id
            name
            email
        }
    }
`;

const UserList = () => {
    const {loading, error, data} = useQuery(GET_USERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    return (
        <ul>
            {data.users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.email}
                </li>
            ))}
        </ul>
    );
};

export default UserList;