import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Contact from '../components/Contact/Contact'
import Layouts from '../components/Layouts/Layouts'
import ErrorPage from '../components/ErrorPage/ErrorPage'

function AppRouter() {
  return (<>
    <Routes>
      <Route element={<Layouts/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Route>
    </Routes>
  </>)
}

export default AppRouter