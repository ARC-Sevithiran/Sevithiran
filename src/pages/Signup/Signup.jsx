import React from 'react'
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
  RadioGroup,
  Radio,
  Stack
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../../hooks/useSubmit";
import { useState ,useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import './Signup.css'
import {useAlertContext} from "../../context/alertContext";


const Signup = () => {

  const navigate=useNavigate();

  const [show, setShow] = useState(false) //password show/hide state
  const [page1, setpage1] = useState(true) //page toggler: true-->page 1 displayed
  const handleNext = () => setpage1(!page1)
  const handleClickpass = () => setShow(!show)
  const handlesignup = () => {
    navigate('/')//navigate to login page 
  }

  const {onOpen} = useAlertContext();  //send details to render a alert box on success or failure of signup
  
  const {isLoading, response, submit} = useSubmit(); //submit to firebase
  const passwordreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; // password requirements
  const formik = useFormik({ // initial values of all attributes of object to be passed
    initialValues: {
      Name:"",
      signpassword:'',
      signemail:'',
      gender: '',
      age: '',
      q1:'',
      q2:'',
      q3:'',
      q4:'',
      q5:'',
      q6:'',
      q7:'',
      q8:'',
      q9:'',
      q10:'',
      isSignUp:true

    }, 
    validationSchema: Yup.object({ //client side validation requirements object
      Name: Yup.string()
      .max(50, 'Must be at most 50 characters long')
      .required('Required'),

      signpassword: Yup.string()
      .matches(passwordreg, 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number') 
      .required("Required"),

      signemail: Yup.string()
      .email("Please enter a valid email address.")
      .required('Required'),

      gender: Yup.string()
      .required("Required"),

      age: Yup.number()
      .required("Required"),

      q1: Yup.string()
      .required("Required"),

      q2: Yup.string()
      .required("Required"),

      q3: Yup.string()
      .required("Required"),

      q4: Yup.string()
      .required("Required"),

      q5: Yup.string()
      .required("Required"),

      q6: Yup.string()
      .required("Required"),

      q7: Yup.string()
      .required("Required"),

      q8: Yup.string()
      .required("Required"),

      q9: Yup.string()
      .required("Required"),

      q10: Yup.string()
      .required("Required"),

      isSignUp: Yup.bool()
    }),
    onSubmit: (values) => { //submit button
      console.log(values)
      submit(values);
    },
    
  });

  console.log(formik.values)

  useEffect(() => { 
    if (response) { 
      onOpen(response.type, response.message); 
      if (response.type === 'success') { 
        formik.resetForm(); 
      } 
    } 
  }, [response]); // erase contents on succesful form submission

  return (
    <div className="signup-page">
    <div className="auth-signup">
      {/* below starts page 1 */}
    {page1?<div className="auth-box-signup page-1"> 
       <div className="signup-auth">
        <VStack alignItems="center" color='#9452f7' >
            <Heading as="h1" id="auth-section">
              Sign Up
            </Heading>
            
            <div className="page1">
            <Heading size='md' id="auth-section" pb='10px' pt='10px' >
              Page 1 of 2: குழந்தையின் சுயவிவரம்
            </Heading>
            <Box p={8} rounded="md" w="28vw" border='2px' borderRadius='10px'>
              <form onSubmit={formik.handleSubmit}>
                <VStack spacing={4}>
                  <FormControl isInvalid={!!formik.errors.Name & formik.touched.Name}> 
                    <FormLabel htmlFor="Name">Name</FormLabel>
                    <Input
                      id="Name"
                      name="Name"
                      type="text"
                      borderColor='#9452f7'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.Name}
                    />
                    <FormErrorMessage>{formik.errors.Name}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!formik.errors.age & formik.touched.age}> 
                    <FormLabel htmlFor="age">Age</FormLabel>
                    <Input
                      id="age"
                      name="age"
                      type='number'
                      borderColor='#9452f7'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.age}
                    />
                    <FormErrorMessage>{formik.errors.age}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!formik.errors.gender & formik.touched.gender}>
                    <FormLabel htmlFor="gender">Gender</FormLabel>
                    <RadioGroup 
                      id='gender' 
                      name='gender'
                      borderColor='#9452f7'
                      onChange={(value) => formik.setFieldValue("gender", value)}
                      onBlur={formik.handleBlur}
                      value={formik.values.gender}
                      >
                      <Stack direction='row' spacing='18px'>
                        <Radio value='Male' colorScheme='purple'>Male</Radio>
                        <Radio value='Female' colorScheme='purple'>Female</Radio>
                        <Radio value='Prefer_not_to_say' colorScheme='purple' textColor='purple'>Prefer not to say</Radio>
                      </Stack>
                    </RadioGroup>
                    <FormErrorMessage>{formik.errors.gender}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!formik.errors.signemail & formik.touched.signemail}>
                    <FormLabel htmlFor="signemail">Email Address</FormLabel>
                    <Input
                      id="signemail"
                      name="signemail"
                      type="signemail"
                      borderColor='#9452f7'
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
                        pr='4.5rem'
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
                  <Button onClick={handleNext} colorScheme="purple" width="full">Next</Button>
                  <HStack className="switcher">
                    <div className="switchtext">
                      <Heading size='md'>Already have an account?</Heading>
                    </div>
                    <Button onClick={handlesignup} className="switch-btn" colorScheme="purple" variant='outline'>Login</Button>
                  </HStack>
                </VStack>
              </form>
            </Box>
          </div></VStack>  
          </div></div>:
          <div className="auth-box page-2">
          <VStack alignItems="center" color='#9452f7' >
              <Heading as="h1" id="auth-section">
                Sign Up
              </Heading>
            <div className="page2">
              <Heading size='md' id="auth-section" pb='10px' pt='10px' >
                Page 2 of 2: பெற்றோருக்கான கேள்விகள்
              </Heading>
                <Box p={8} rounded="md" w="50vw" border='2px' borderRadius='10px'>
                <form onSubmit={formik.handleSubmit}>
                  <VStack spacing={4}>

                    <Heading size='md' bgColor='rgba(255, 221, 0, 1)' borderRadius='10px' p={4} border='2px'>வழிமுறைகள்:<br/>"எப்போதும்" என்பதற்கு 4 தேர்ந்தெடுக்கவும் <br/>"சில நேரம்" என்பதற்கு 2 தேர்ந்தெடுக்கவும் <br/>"இல்லை" என்பதற்கு 0 தேர்ந்தெடுக்கவும்</Heading>

                    <FormControl isInvalid={!!formik.errors.q1 & formik.touched.q1}>
                        <FormLabel htmlFor="q1"><strong>1. </strong>உங்கள் குழந்தை புதியவர்களை சந்திக்கும் பொழுது கேட்கும் பிரச்சனை சங்கடத்தை ஏற்படுதிகிரதா?</FormLabel>
                        <RadioGroup 
                          id='q1' 
                          name='q1'
                          borderColor='#9452f7'
                          onChange={(value) => formik.setFieldValue("q1", value)}
                          onBlur={formik.handleBlur}
                          value={formik.values.q1}
                          >
                          <Stack direction='row' spacing='18px'>
                            <Radio value='4' colorScheme='purple'>4</Radio>
                            <Radio value='2' colorScheme='purple'>2</Radio>
                            <Radio value='0' colorScheme='purple' textColor='purple'>0</Radio>
                          </Stack>
                        </RadioGroup>
                        <FormErrorMessage>{formik.errors.q1}</FormErrorMessage>
                      </FormControl>


                      <FormControl isInvalid={!!formik.errors.q2 & formik.touched.q2}>
                        <FormLabel htmlFor="q2"><strong>2. </strong>உங்கள் குழந்தை குடும்ப உறுப்பினர்களுடன் பேசும் பொழுது கேட்கும் பிரச்சனை விரக்தியை ஏற்படுத்துமா?</FormLabel>
                        <RadioGroup 
                          id='q2' 
                          name='q2'
                          borderColor='#9452f7'
                          onChange={(value) => formik.setFieldValue("q2", value)}
                          onBlur={formik.handleBlur}
                          value={formik.values.q2}
                          >
                          <Stack direction='row' spacing='18px'>
                            <Radio value='4' colorScheme='purple'>4</Radio>
                            <Radio value='2' colorScheme='purple'>2</Radio>
                            <Radio value='0' colorScheme='purple' textColor='purple'>0</Radio>
                          </Stack>
                        </RadioGroup>
                        <FormErrorMessage>{formik.errors.q2}</FormErrorMessage>
                      </FormControl>


                      <FormControl isInvalid={!!formik.errors.q3 & formik.touched.q3}>
                        <FormLabel htmlFor="q3"><strong>3. </strong>உங்கள் குழந்தைக்கு சக ஊழியர்கள், வாடிக்கையாளர்கள்/ வாடிக்கையாளர்கள் அல்லது காத்திருப்பு பணியாளர்கள் கேட்பதில்/புரிந்து கொள்வதில் சிரமம் உள்ளதா?</FormLabel>
                        <RadioGroup 
                          id='q3' 
                          name='q3'
                          borderColor='#9452f7'
                          onChange={(value) => formik.setFieldValue("q3", value)}
                          onBlur={formik.handleBlur}
                          value={formik.values.q3}
                          >
                          <Stack direction='row' spacing='18px'>
                            <Radio value='4' colorScheme='purple'>4</Radio>
                            <Radio value='2' colorScheme='purple'>2</Radio>
                            <Radio value='0' colorScheme='purple' textColor='purple'>0</Radio>
                          </Stack>
                        </RadioGroup>
                        <FormErrorMessage>{formik.errors.q3}</FormErrorMessage>
                      </FormControl>


                      <FormControl isInvalid={!!formik.errors.q4 & formik.touched.q4}>
                        <FormLabel htmlFor="q4"><strong>4. </strong>செவித்திறன் பிரச்சனை மூலம் உங்கள் குழந்தை குறிப்பிடத்தக்க அளவில் பின்தங்கியதாக உணர்கிறாரா?</FormLabel>
                        <RadioGroup 
                          id='q4' 
                          name='q4'
                          borderColor='#9452f7'
                          onChange={(value) => formik.setFieldValue("q4", value)}
                          onBlur={formik.handleBlur}
                          value={formik.values.q4}
                          >
                          <Stack direction='row' spacing='18px'>
                            <Radio value='4' colorScheme='purple'>4</Radio>
                            <Radio value='2' colorScheme='purple'>2</Radio>
                            <Radio value='0' colorScheme='purple' textColor='purple'>0</Radio>
                          </Stack>
                        </RadioGroup>
                        <FormErrorMessage>{formik.errors.q4}</FormErrorMessage>
                      </FormControl>


                      <FormControl isInvalid={!!formik.errors.q5 & formik.touched.q5}>
                        <FormLabel htmlFor="q5"><strong>5. </strong>கேட்கும் பிரச்சனை உங்கள் குழந்தைக்கு நண்பர்கள், உறவினர்கள் அல்லது அண்டை வீட்டார் வருகை தரும் போது சிரமத்தை ஏற்படுத்துமா?</FormLabel>
                        <RadioGroup 
                          id='q5' 
                          name='q5'
                          borderColor='#9452f7'
                          onChange={(value) => formik.setFieldValue("q5", value)}
                          onBlur={formik.handleBlur}
                          value={formik.values.q5}
                          >
                          <Stack direction='row' spacing='18px'>
                            <Radio value='4' colorScheme='purple'>4</Radio>
                            <Radio value='2' colorScheme='purple'>2</Radio>
                            <Radio value='0' colorScheme='purple' textColor='purple'>0</Radio>
                          </Stack>
                        </RadioGroup>
                        <FormErrorMessage>{formik.errors.q5}</FormErrorMessage>
                      </FormControl>


                      <FormControl isInvalid={!!formik.errors.q6 & formik.touched.q6}>
                        <FormLabel htmlFor="q6"><strong>6. </strong>காது கேளாமை உங்கள் குழந்தைக்கு திரைப்படங்கள் அல்லது திரையரங்கில் காது கேட்கும் பிரச்சனையை ஏற்படுத்துமா?</FormLabel>
                        <RadioGroup 
                          id='q6' 
                          name='q6'
                          borderColor='#9452f7'
                          onChange={(value) => formik.setFieldValue("q6", value)}
                          onBlur={formik.handleBlur}
                          value={formik.values.q6}
                          >
                          <Stack direction='row' spacing='18px'>
                            <Radio value='4' colorScheme='purple'>4</Radio>
                            <Radio value='2' colorScheme='purple'>2</Radio>
                            <Radio value='0' colorScheme='purple' textColor='purple'>0</Radio>
                          </Stack>
                        </RadioGroup>
                        <FormErrorMessage>{formik.errors.q6}</FormErrorMessage>
                      </FormControl>


                      <FormControl isInvalid={!!formik.errors.q7 & formik.touched.q7}>
                        <FormLabel htmlFor="q7"><strong>7. </strong>காது கேளாமை உங்கள் குழந்தைக்கு குடும்ப உறுப்பினர்களுடன் வாக்குவாதத்தை ஏற்படுத்துமா?</FormLabel>
                        <RadioGroup 
                          id='q7' 
                          name='q7'
                          borderColor='#9452f7'
                          onChange={(value) => formik.setFieldValue("q7", value)}
                          onBlur={formik.handleBlur}
                          value={formik.values.q7}
                          >
                          <Stack direction='row' spacing='18px'>
                            <Radio value='4' colorScheme='purple'>4</Radio>
                            <Radio value='2' colorScheme='purple'>2</Radio>
                            <Radio value='0' colorScheme='purple' textColor='purple'>0</Radio>
                          </Stack>
                        </RadioGroup>
                        <FormErrorMessage>{formik.errors.q7}</FormErrorMessage>
                      </FormControl>


                      <FormControl isInvalid={!!formik.errors.q8 & formik.touched.q8}>
                        <FormLabel htmlFor="q8"><strong>8. </strong>காது கேளாமை உங்கள் குழந்தைக்கு டிவி அல்லது வானொலியில் கேட்கும் போது சிரமத்தை ஏற்படுத்துமா?</FormLabel>
                        <RadioGroup 
                          id='q8' 
                          name='q8'
                          borderColor='#9452f7'
                          onChange={(value) => formik.setFieldValue("q8", value)}
                          onBlur={formik.handleBlur}
                          value={formik.values.q8}
                          >
                          <Stack direction='row' spacing='18px'>
                            <Radio value='4' colorScheme='purple'>4</Radio>
                            <Radio value='2' colorScheme='purple'>2</Radio>
                            <Radio value='0' colorScheme='purple' textColor='purple'>0</Radio>
                          </Stack>
                        </RadioGroup>
                        <FormErrorMessage>{formik.errors.q8}</FormErrorMessage>
                      </FormControl>


                      <FormControl isInvalid={!!formik.errors.q9 & formik.touched.q9}>
                        <FormLabel htmlFor="q9"><strong>9. </strong>உங்கள் குழந்தை தனது கேட்கும் வரம்பில் ஏதேனும் சிரமம் இருப்பதாக உணர்கிறார்களா அல்லது அவர்களின் தனிப்பட்ட அல்லது சமூக வாழ்க்கை தடைபடுகிறதா?</FormLabel>
                        <RadioGroup 
                          id='q9' 
                          name='q9'
                          borderColor='#9452f7'
                          onChange={(value) => formik.setFieldValue("q9", value)}
                          onBlur={formik.handleBlur}
                          value={formik.values.q9}
                          >
                          <Stack direction='row' spacing='18px'>
                            <Radio value='4' colorScheme='purple'>4</Radio>
                            <Radio value='2' colorScheme='purple'>2</Radio>
                            <Radio value='0' colorScheme='purple' textColor='purple'>0</Radio>
                          </Stack>
                        </RadioGroup>
                        <FormErrorMessage>{formik.errors.q9}</FormErrorMessage>
                      </FormControl>


                      <FormControl isInvalid={!!formik.errors.q10 & formik.touched.q10}>
                        <FormLabel htmlFor="q10"><strong>10. </strong>காது கேளாமை உங்கள் குழந்தைக்கு உறவினர்கள் அல்லது நண்பர்களுடன் உணவகத்தில் இருக்கும் பொழுது சிரமத்தை ஏற்படுத்துமா?</FormLabel>
                        <RadioGroup 
                          id='q10' 
                          name='q10'
                          borderColor='#9452f7'
                          onChange={(value) => formik.setFieldValue("q10", value)}
                          onBlur={formik.handleBlur}
                          value={formik.values.q10}
                          >
                          <Stack direction='row' spacing='18px'>
                            <Radio value='4' colorScheme='purple'>4</Radio>
                            <Radio value='2' colorScheme='purple'>2</Radio>
                            <Radio value='0' colorScheme='purple' textColor='purple'>0</Radio>
                          </Stack>
                        </RadioGroup>
                        <FormErrorMessage>{formik.errors.q10}</FormErrorMessage>
                      </FormControl>


                      <Button onClick={handleNext} colorScheme="purple" width="full">Back</Button>
                      <Button type="submit" colorScheme="purple" width="full" isDisabled={isLoading}>
                        {isLoading? "Signing up" : "Sign Up"}
                      </Button>
                      <HStack className="switcher">
                        <div className="switchtext">
                          <Heading size='md'>Already have an account?</Heading>
                        </div>
                        <Button onClick={handlesignup} className="switch-btn" colorScheme="purple" variant='outline'>Login</Button>
                      </HStack>
                    </VStack>
                  </form>
              </Box>
            </div>
        </VStack>
        </div>
          }
                  
                
        </div>
        </div>
      
  )
}
          /* sample Object:{Name: ""
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
export default Signup
