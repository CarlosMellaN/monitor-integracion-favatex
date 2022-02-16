import Routes from './routes';
import Provider from "./context/ServerExpress/Provider"

function App(){
  return (
    <Provider>
      <Routes/>
    </Provider>
  )
}

export default App;
