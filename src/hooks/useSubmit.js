import {useState,useContext} from "react";
import {useNavigate} from 'react-router-dom'
import {auth ,db} from "../../src/firebaseConfig"                 
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth"
import {doc , setDoc} from "firebase/firestore"
import UserContext from "../context/userContext";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";

const Auth = getAuth();




const useSubmit = () => {
  const {uid, uemail, updateEmail , updateuid} = useContext(UserContext);

  const postLoginFunc = (email , uid)=>{
    updateEmail(email)
    updateuid(uid)
  }

  

  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const navigate = useNavigate()


  const submit = async (data) => {
    setLoading(true);
    try {
      
    if(data.isSignUp){
      createUserWithEmailAndPassword(auth , data.signemail , data.signpassword)
        .then((e)=>{
          postLoginFunc(e.user.email , e.user.uid, e.user.pass)
          return setDoc(doc(db,"users",e.user.uid),{
            name: data.Name,
            gender: data.gender,
            age: data.age,
            q1: data.q1,
            q2: data.q2,
            q3: data.q3,
            q4: data.q4,
            q5: data.q5,
            q6: data.q6,
            q7: data.q7,
            q8: data.q8,
            q9: data.q9,
            q10:data.q10
          })
        })
        .then(()=>{
          localStorage.setItem('uemail', data.signemail)
          localStorage.setItem('upass', data.signpassword)
          localStorage.setItem('isLoggedIn','true')
          navigate('/Home')
        })
        .then(() =>{
          console.log(localStorage.getItem('uemail'))
          console.log(localStorage.getItem('upass'))
          console.log(localStorage.getItem('isLoggedIn'))
        })
      }
    
    else{
      signInWithEmailAndPassword(auth , data.signemail, data.signpassword)
      .then((e)=>{
        postLoginFunc(e.user.email , e.user.uid) 
      })
      .then(()=>{
        localStorage.setItem('uemail', data.signemail)
        localStorage.setItem('upass', data.signpassword)
        localStorage.setItem('isLoggedIn','true')
        navigate('/Home')
      })
      .then(() =>{
        console.log("logger")
        console.log(localStorage.getItem('uemail'))
        console.log(localStorage.getItem('upass'))
        console.log(localStorage.getItem('isLoggedIn'))
      })
    }
      
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

/* sample signup Object:{Name: ""
          gender: ""
          isSignUp: true
          q1: "0"
          q2: "0"
          q3: ""
          q4: ""
          q5: ""
          q6: ""
          q7: ""
          q8: ""
          q9: ""
          q10:""
          signemail: ""
          signpassword: "" }*/
export default useSubmit;