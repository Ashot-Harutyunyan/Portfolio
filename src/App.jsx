import './style.app.scss'
import React from 'react'
import AppRouter from './Routes/AppRouter'
import Particle from './Particle/Particle'

function App() {
  return (<>
     <AppRouter/>
     <Particle/>
  </>)
}

export default App
