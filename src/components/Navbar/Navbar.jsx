import React from 'react';
import {Link , useNavigate} from 'react-router-dom'
import { Button } from '@chakra-ui/react';
import Avatar from '../Avatar'
import {useContext,useEffect } from 'react';
import './Navbar.css'
import { Heading } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import UserContext from '../../context/userContext';

const Navbar=()=>{
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn} = useContext(UserContext);
    const Logout= async()=>{
        signOut(auth)
        .then(()=>{
             // Remove authentication flag/token from local storage
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('uid');
            localStorage.removeItem('uemail');
            setIsLoggedIn(false);
            console.log("what")
        })
        .then(()=>{
            navigate("/")
        })
        .catch((e)=>{
            console.log(e);
        })
    }



    useEffect(() => {
      // Check local storage for authentication flag/token
      const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
      console.log(storedIsLoggedIn);
      console.log(2,isLoggedIn)
  
      if (storedIsLoggedIn === 'true') {
        setIsLoggedIn(true);
      }
    });

    // const [color,setColor] = useState('#fadee8')
    console.log(4,isLoggedIn)
    return (
        <nav className='main-nav' >
            <div className="navbar" >
                <div className="logo-section">
                    <Link to='/Home' className='nav-item nav-logo'>
                        <Heading size='lg'>செவித்திறன்</Heading>
                    </Link>
                </div>
                <div className="buttons">
                    { isLoggedIn === false ?
                        <Button colorScheme='orange' onClick={() =>{ navigate("/")}}>Log in</Button>:
                        <>
                            {console.log(3,isLoggedIn)}
                            <Link to='/profile' className='' style={{color:'white', textDecoration:'none' }}><Avatar backgroundColor='#009dff' px='10px' py='15px' borderRadius='50%' color='white'>N</Avatar></Link>
                            <Button  colorScheme='orange' onClick={Logout}>Log out</Button>
                        </>
                    }
                </div>
            </div>
        </nav>
    )
}
export default Navbar

    