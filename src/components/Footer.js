import React from "react"
import ContactIcons from "../constants/contactIcons"

const Footer = () => {
  return (
    <section className="footer">
      <h5 className="footer__title">Contact with me:</h5>
      <ContactIcons contactStyle={"footer-icons"} />
    </section>
  )
}

export default Footer
