import React from "react"
import PageLinks from "../constants/links"
import "../styles/main.scss"
import { FaAlignRight } from "react-icons/fa"

const Navbar = ({ toggleSideBar }) => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <p className="navbar__logo">AS</p>
          <button
            type="button"
            className="navbar__control"
            onClick={toggleSideBar}
          >
            <FaAlignRight />
          </button>
          <PageLinks styleClass="nav-links" />
        </div>
      </nav>
    </>
  )
}

export default Navbar
