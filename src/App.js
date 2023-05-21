import {HashRouter as Router} from 'react-router-dom';
import AllRoutes from './AllRoutes'
import { ChakraProvider } from '@chakra-ui/react'
import { AlertProvider } from "./context/alertContext";
import {UserProvider} from "./context/userContext"
import Alert from "./components/Alert";
import './App.css';



function App() {

  return (
    <div className='app'>
      
        <ChakraProvider>
          <UserProvider >
          <AlertProvider>
            <Router>
              <AllRoutes/>
            </Router>
            <Alert />
          </AlertProvider>
          </UserProvider>
        </ChakraProvider>
      
    </div>
  );
}

export default App;
