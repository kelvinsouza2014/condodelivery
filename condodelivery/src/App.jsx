import {  } from 'react'
import Aplication from './components/Aplication'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      {/* COMPONENTE FIXO NA TELA PRINCIPAL (EM TODAS AS ROTAS) */}
      <Aplication/>
      {/* COMPONENTE FIXO NA TELA PRINCIPAL (EM TODAS AS ROTAS) */}
      <Outlet/>
    </>
  )
}
export default App
