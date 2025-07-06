import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainStory from './components/MainStory'
import Prolog from './pages/Prolog'
import Bab1 from './pages/Bab1'
import Bab2 from './pages/Bab2'
import Bab3 from './pages/Bab3'
import Bab4 from './pages/Bab4'
import Bab5 from './pages/Bab5'
import Kesimpulan from './pages/Kesimpulan'

const AppRouter=()=> {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<MainStory/>}/>
            <Route path='/prolog' element={<Prolog/>}/>
            <Route path='/bab1' element={<Bab1/>}/>
            <Route path='/bab2' element={<Bab2/>}/>
            <Route path='/bab3' element={<Bab3/>}/>
            <Route path='/bab4' element={<Bab4/>}/>
            <Route path='/bab5' element={<Bab5/>}/>
            <Route path='/kesimpulan' element={<Kesimpulan/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter