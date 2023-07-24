import React, { useEffect, useContext } from 'react'
import { auth } from '../firebaseConfig';
import { getAuth, setPersistence, browserSessionPersistence,signInWithEmailAndPassword } from "firebase/auth";

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [uid, setUid] = React.useState(null)
  const [uemail,setUemail] = React.useState(null)
  const [pass,setPass] = React.useState('')
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(true);
  const updateuid = newValue => {
    setUid(newValue)
  }
  const updateEmail = newValue => {
    setUemail(newValue)
  }
  const updatePass = newValue => {
    setPass(newValue)
  }


  useEffect(()=>{
    const Auth = getAuth();

    setPersistence(Auth, browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, localStorage.getItem("uemail"), localStorage.getItem("upass"));
    })
    .then((userCred)=>{
      updateEmail(userCred.user.email)
      updateuid(userCred.user.uid)
      setIsUpdating(false)
      console.log("stored")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  },[uid,uemail,updateEmail,updateuid])

  return (
    <UserContext.Provider value={{isLoggedIn, setIsLoggedIn, uid, uemail , updateEmail , updateuid, pass, updatePass}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
