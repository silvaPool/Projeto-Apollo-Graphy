const { ApolloClient, InMemoryCache } = require("@apollo/client");

const client = new ApolloClient({
    uri: 'http://your-graphql-api-endpoint',
    cache: new InMemoryCache(),
});
const ApolloAppProvider = ({children}) => {
    return <ApolloAppProvider client={client}>{children}</ApolloAppProvider>
};
export default ApolloAppProvider;