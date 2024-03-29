import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Learning from './pages/Learning/Learning'
import Home from './pages/Home/Home'
import Arrival from './pages/Arrival/Arrival'
import Signup from './pages/Signup/Signup'
import TestPageA1 from './pages/TestPageA1/TestPageA1'
import Profile from './pages/Profile/Profile'
import TestPageA2 from './pages/TestPageA2/TestPageA2'
import TAMenu from './pages/TAMenu/TAMenu'
import TestFeedback from './pages/TestFeedback/TestFeedback'
import TestResults from './pages/TestResults/TestResults'
import TestPageB1 from './pages/TestPageB1/TestPageB1'
import TestPageA1new from './pages/TestPageA1new/TestPageA1new'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/Learning' element={<Learning/>}/>
            <Route path='/' element={<Arrival/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/TestA1/Level1' element={<TestPageA1new/>}/>
            <Route path='/TestA1/Level2' element={<TestPageA1new/>}/>
            <Route path='/TestA1/Level3' element={<TestPageA1new/>}/>
            <Route path='/TestA1/Level4' element={<TestPageA1new/>}/>
            <Route path='/TestA1/Level5' element={<TestPageA1new/>}/>
            <Route path='/TestA1/Level6' element={<TestPageA1new/>}/>
            <Route path='/TestA2/Level1' element={<TestPageA2/>}/>
            <Route path='/TestA2/Level2' element={<TestPageA2/>}/>
            <Route path='/TestA2/Level3' element={<TestPageA2/>}/>
            <Route path='/TestA2/Level4' element={<TestPageA2/>}/>
            <Route path='/TestA2/Level5' element={<TestPageA2/>}/>
            <Route path='/TestA2/Level6' element={<TestPageA2/>}/>
            <Route path='/TestB1/Level1' element={<TestPageB1/>}/>
            <Route path='/TestB1/Level2' element={<TestPageB1/>}/>
            <Route path='/TestB1/Level3' element={<TestPageB1/>}/>
            <Route path='/TestB1/Level4' element={<TestPageB1/>}/>
            <Route path='/TestB1/Level5' element={<TestPageB1/>}/>
            <Route path='/TestB1/Level6' element={<TestPageB1/>}/>
            <Route path='/TestAMenu' element={<TAMenu/>}/>
            <Route path='/TestA1/feedback'element={<TestFeedback/>}/>
            <Route path='/TestA2/feedback'element={<TestFeedback/>}/>
            <Route path='/TestResults'element={<TestResults/>}/>
        </Routes>
      
    </div>
  )
}

export default AllRoutes
