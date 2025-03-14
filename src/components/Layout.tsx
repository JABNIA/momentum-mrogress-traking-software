import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import { useState } from "react"
import NewEmployee from "./NewEmployee/NewEmployee"

function Layout() {
  const [modal, setModal] = useState<boolean>(false)
  modal ? document.body.style.overflow = "hidden" : 
  document.body.style.overflow = "visible"
  return (
    <>
      <Header setModal={setModal}/>
      <Outlet /> 
      {modal && <NewEmployee setModal={setModal}/>}
    </>
  )
}

export default Layout
