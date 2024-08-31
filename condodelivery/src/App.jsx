import {  } from 'react'
import Aplication from './components/Aplication'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Aplication/>
      <Outlet/>
    </>
  )
}
export default App
