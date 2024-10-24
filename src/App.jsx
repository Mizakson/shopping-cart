import { useState } from 'react'
import "../src/index.css"
import Nav from './components/Nav/Nav'
import Info from './components/Info/Info'
import Shop from './components/Shop/Shop'

function App() {
  const [page, setPage] = useState(true)

  function handleClick() {
    setPage(false)
  }

  function goHome() {
    setPage(true)
  }

  return (
    <>
      <Nav onClick={handleClick}/>
      { page ? <Info /> : <Shop />}
    </>
  )
}

export default App
