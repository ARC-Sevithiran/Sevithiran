import React from 'react'

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [uid, setUid] = React.useState(null)
  const [uemail,setUemail] = React.useState(null)
  const [pass,setPass] = React.useState('')
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const updateuid = newValue => {
    setUid(newValue)
  }
  const updateEmail = newValue => {
    setUemail(newValue)
  }
  const updatePass = newValue => {
    setPass(newValue)
  }


  return (
    <UserContext.Provider value={{isLoggedIn, setIsLoggedIn, uid, uemail , updateEmail , updateuid, pass, updatePass}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
