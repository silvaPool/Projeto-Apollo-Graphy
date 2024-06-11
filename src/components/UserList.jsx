import { gql, useQuery } from "@apollo/client";

// const GET_USERS = gql`
//     query GetUsers {
//         users {
//             id
//             name
//             status
//         }
//     }
// `;

const GET_USERS = gql`
    query GetUsers {
      results {
        id
        name
        status
        type
      }
    }
  `
  

const UserList = () => {
    const {loading, error, data} = useQuery(GET_USERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    return (
        <ul>
            {data.results.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.email}
                </li>
            ))}
        </ul>
    );
};

export default UserList;