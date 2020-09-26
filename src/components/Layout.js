import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSideBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSideBar={toggleSideBar} />
      <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      {children}
    </>
  )
}

export default Layout
