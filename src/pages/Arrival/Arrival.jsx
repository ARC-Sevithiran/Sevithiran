import { useFormik} from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  HStack,
  Image
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../../hooks/useSubmit";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import './Arrival.css'
import sev_sec from "../../assets/sev_sec.jpg"


const Arrival = () => {

  const navigate=useNavigate();

  const [show, setShow] = useState(false)
  const handleClickpass = () => setShow(!show)
  const handlesignup = () => {
    navigate('/Signup')
  }
  const [enter, setenter] = useState(true)
  const handleClickfr = () => setenter(!enter)



  const {isLoading, submit} = useSubmit();
  const formik = useFormik({
    initialValues: {
      signemail:"",
      signpassword:"",
      isSignUp:false

    },
    validationSchema: Yup.object({

      signemail: Yup.string()
      .email("Please enter a valid email address.")
      .required('Required'),

      signpassword: Yup.string()       
      .required("Required"),

      isSignUp: Yup.bool()
    }),
    onSubmit: (values) => {
      console.log(values)
      submit(values);
    },
    
  });

{/* {enter && <div className="front-page">
        <div className="fp-container">
          <div className="fp-kid-image">
            <div className="fp-anim-cont">
              <div className="fp-img-1">
                <Image src={arrival} width='70%' objectFit='contain'/>
              </div>
              <div className="fp-img-2">
                <Image src={arrival2} objectFit='cover' />              
              </div>
            </div>
          </div>
          <div className="fp-content">
            <div className="fp-top-part">
              <Image src={sev} width='100%' />
              <button onClick={handleClickfr} className="enter-button">Enter</button>
            </div>
            <div className="image-array">
              <Image src={siiec}   width='200px'/>
              <Image src={srm}   width='200px' />
              <Image src={srmmed}   width='140px' />
              <Image src={iedc}   width='200px' />
            </div>
          </div>
        </div>
      </div>} */}
      
  return (
    <div className="arrival">
    {enter && <div className ="front-page">
      <Image src={sev_sec} width='100%' height="100%" position='absolute'/>
      <button onClick={handleClickfr} className="enter-button" >Enter</button>
      </div>}
      
      <div className="auth">
        <div className="auth-box">
          <div className="login-auth">
            <VStack color='#9452f7'  alignItems="center">
              <Heading as="h1" id="auth-section">
                Log In
              </Heading>
              <Box p={5} rounded="md" w="100%">
                <form onSubmit={formik.handleSubmit}>
                  <VStack spacing={4}>
                    <FormControl isInvalid={!!formik.errors.signemail & formik.touched.signemail}>
                      <FormLabel htmlFor="signemail">Email Address</FormLabel>
                      <Input
                        borderColor='#9452f7'
                        id="signemail"
                        name="signemail"
                        type="signemail"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.signemail}
                      />
                      <FormErrorMessage>{formik.errors.signemail}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!formik.errors.signpassword & formik.touched.signpassword}>
                      <FormLabel htmlFor="signpassword">Password</FormLabel>
                      <InputGroup size='md'>
                        <Input
                          id='signpassword'
                          name='signpassword'
                          borderColor='#9452f7'
                          type={show ? 'text' : 'password'}
                          placeholder='Enter password'
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.signpassword}
                        />
                        <InputRightElement width='4.5rem'>
                          <Button h='1.75rem' size='sm' onClick={handleClickpass}>
                            {show ? 'Hide' : 'Show'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{formik.errors.signpassword}</FormErrorMessage>
                    </FormControl>
                    <Button type="submit" colorScheme="purple" width="full" isDisabled={isLoading}>
                    {isLoading? "Logging In" : "Log In"}
                    </Button>
                    <HStack className="switcher">
                      <div className="switchtext">
                        <Heading size='md'>Don't have an account?</Heading>
                      </div>
                      <Button onClick={handlesignup} className="switch-btn" colorScheme="purple" variant='outline'>Sign Up</Button>
                    </HStack>
                  </VStack>
                </form>
              </Box>
            </VStack>
        </div> 
      </div>
    </div>
  </div>
  );
};

export default Arrival;

