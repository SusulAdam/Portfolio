import React from "react"
import PageLinks from "../constants/links"
import ContactIcons from "../constants/contactIcons"
import { FaTimes } from "react-icons/fa"

const Sidebar = ({ isOpen, toggleSideBar }) => {
  return (
    <aside className={`sidebar ${isOpen ? `show-sidebar` : ""}`}>
      <button className="close-control" onClick={toggleSideBar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <PageLinks styleClass={` ${isOpen ? "sidebar-links" : ""}`} />
        <ContactIcons contactStyle={` ${isOpen ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  )
}

export default Sidebar
