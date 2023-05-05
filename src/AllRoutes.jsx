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

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/Learning' element={<Learning/>}/>
            <Route path='/' element={<Arrival/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/TestA1/Level1' element={<TestPageA1/>}/>
            <Route path='/TestA1/Level2' element={<TestPageA1/>}/>
            <Route path='/TestA1/Level3' element={<TestPageA1/>}/>
            <Route path='/TestA1/Level4' element={<TestPageA1/>}/>
            <Route path='/TestA1/Level5' element={<TestPageA1/>}/>
            <Route path='/TestA1/Level6' element={<TestPageA1/>}/>
            <Route path='/TestA2/Level1' element={<TestPageA2/>}/>
            <Route path='/TestA2/Level2' element={<TestPageA2/>}/>
            <Route path='/TestA2/Level3' element={<TestPageA2/>}/>
            <Route path='/TestA2/Level4' element={<TestPageA2/>}/>
            <Route path='/TestA2/Level5' element={<TestPageA2/>}/>
            <Route path='/TestA2/Level6' element={<TestPageA2/>}/>
            <Route path='/TestA1Menu' element={<TAMenu/>}/>
        </Routes>
      
    </div>
  )
}

export default AllRoutes
