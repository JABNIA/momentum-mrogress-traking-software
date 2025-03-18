import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import { useState } from "react"
import NewEmployee from "./NewEmployee/NewEmployee"

function Layout() {
  const [modal, setModal] = useState<boolean>(true)
  

  return (
    <>
      <Header setModal={setModal}/>
      <Outlet context={{setModal}}/> 
      {modal && <NewEmployee setModal={setModal}/>}
    </>
  )
}

export default Layout
