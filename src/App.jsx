import './css/App.css'
import Navbar from './components/navBar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [itemTotal, setItemTotal] = useState(0)

  return (
    <>
      <Navbar itemTotal={itemTotal}/>
      <Outlet>
        context={{itemTotal}}
      </Outlet>
    </>
  )
}

export default App
