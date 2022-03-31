import 'antd/dist/antd.css';
import './App.css';
import MainContainer from "./views/layouts/main-container";
import {ApolloProvider} from "@apollo/client";
import {client} from "./apollo-client/client";

function App() {
  return (
      <ApolloProvider client={client}>
    <div className="App bg-dark-blue">
      <MainContainer />
    </div>
      </ApolloProvider>
  );
}

export default App;
