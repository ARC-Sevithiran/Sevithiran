import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import './Profile.css'
import Navbar from '../../components/Navbar/Navbar'
import { db } from '../../firebaseConfig'
import {doc , getDoc} from "firebase/firestore"
import UserContext from '../../context/userContext'
import { Heading, Text, Divider } from '@chakra-ui/react'


const Profile = () => {
  const{uid,uemail} = useContext(UserContext)
  const [user, setDocumentData] = useState(null);
  const [loading, setLoading] = useState(true);

  const quarray=["உங்கள் குழந்தை புதியவர்களை சந்திக்கும் பொழுது கேட்கும் பிரச்சனை சங்கடத்தை ஏற்படுதிகிரதா?",
  "உங்கள் குழந்தை குடும்ப உறுப்பினர்களுடன் பேசும் பொழுது கேட்கும் பிரச்சனை விரக்தியை ஏற்படுத்துமா?",
  "உங்கள் குழந்தைக்கு சக ஊழியர்கள், வாடிக்கையாளர்கள்/ வாடிக்கையாளர்கள் அல்லது காத்திருப்பு பணியாளர்கள் கேட்பதில்/புரிந்து கொள்வதில் சிரமம் உள்ளதா?",
  "செவித்திறன் பிரச்சனை மூலம் உங்கள் குழந்தை குறிப்பிடத்தக்க அளவில் பின்தங்கியதாக உணர்கிறாரா?",
  "கேட்கும் பிரச்சனை உங்கள் குழந்தைக்கு நண்பர்கள், உறவினர்கள் அல்லது அண்டை வீட்டார் வருகை தரும் போது சிரமத்தை ஏற்படுத்துமா?",
  "காது கேளாமை உங்கள் குழந்தைக்கு திரைப்படங்கள் அல்லது திரையரங்கில் காது கேட்கும் பிரச்சனையை ஏற்படுத்துமா?",
  "காது கேளாமை உங்கள் குழந்தைக்கு குடும்ப உறுப்பினர்களுடன் வாக்குவாதத்தை ஏற்படுத்துமா?",
  "காது கேளாமை உங்கள் குழந்தைக்கு டிவி அல்லது வானொலியில் கேட்கும் போது சிரமத்தை ஏற்படுத்துமா?",
  "உங்கள் குழந்தை தனது கேட்கும் வரம்பில் ஏதேனும் சிரமம் இருப்பதாக உணர்கிறார்களா அல்லது அவர்களின் தனிப்பட்ட அல்லது சமூக வாழ்க்கை தடைபடுகிறதா?",
  "காது கேளாமை உங்கள் குழந்தைக்கு உறவினர்கள் அல்லது நண்பர்களுடன் உணவகத்தில் இருக்கும் பொழுது சிரமத்தை ஏற்படுத்துமா?"]

  useEffect(() => {
    const docRef = doc(db,"users",uid === (undefined || null) ? "X9UaU4XB8eUQDL4nCcQ2oYBOWyH3" : uid);
    getDoc(docRef).then((docSnapshot) => {
      if (docSnapshot.exists) {
        const data = docSnapshot.data();
        setLoading(false);
        setDocumentData({
          name: data.name,
          email: uemail,
          age: data.age,
          gender: data.gender,
          answers: [data.q1 , data.q2,data.q3 , data.q4,data.q5 , data.q6,data.q7 , data.q8,data.q9 , data.q10,]})
      }
    });
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='profile-main-container'>
      <Navbar />
      <div className="basic-info">
        <img className='profileimage' src='https://www.svgrepo.com/show/396005/child-medium-dark-skin-tone.svg' alt={"imager"} width='70%' />
        <Heading size='xl'>{user.name}</Heading>
        <Heading size='md'>Profile Information</Heading>
        <Divider/>
        <div className="profile-details">
            <div className="info-item">
              <Heading size='md'>Email:</Heading>
              <Heading size='md'>{user.email}</Heading>
            </div>
            <div className="info-item">
              <Heading size='md'>Gender:</Heading>
              <Heading size='md'>{user.gender}</Heading>
            </div>
            <div className="info-item">
              <Heading size='md'>Age:</Heading>
              <Heading size='md'>{user.age}</Heading>
            </div>
        </div>
      </div>
      <div className="question-pq-details">
        <div className="info-item">
          <p className="info-label">Questions</p>
          <ul className="question-list">
            {user.answers.map((answer, index) => (
              <li key={index} className="question-item">
                <span className="question-number">Q{index + 1}</span>
                <span className='qtag'>{quarray[index]}</span>
                <span className="question-answer">{answer}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Profile
