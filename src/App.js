import {HashRouter as Router} from 'react-router-dom';
import AllRoutes from './AllRoutes'
import { ChakraProvider } from '@chakra-ui/react'
import { AlertProvider } from "./context/alertContext";
import {UserProvider} from "./context/userContext"
import Alert from "./components/Alert";
import './App.css';
import { useEffect } from 'react';
import { auth } from './firebaseConfig';
import { setPersistence,signInWithEmailAndPassword,browserSessionPersistence } from 'firebase/auth';



function App() {

  // const {uid, uemail, updateEmail , updateuid} = useContext(UserContext);

  // useEffect(() =>{
  //   setPersistence(auth, browserSessionPersistence)
  // .then(() => {
  //   // Existing and future Auth states are now persisted in the current
  //   // session only. Closing the window would clear any existing state even
  //   // if a user forgets to sign out.
  //   // ...
  //   // New sign-in will be persisted with session persistence.
  //   return signInWithEmailAndPassword(auth, uemail, password);
  // })
  // .catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });
  // })

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
