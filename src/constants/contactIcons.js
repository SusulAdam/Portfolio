import React from "react"
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai"

const icons = [
  {
    id: 1,
    className: "icon facebook",
    name: <AiFillFacebook />,
  },
  {
    id: 2,
    className: "icon linkedin",
    name: <AiFillLinkedin />,
  },
]

const icon = icons.map(icon => {
  return (
    <li className={icon.className} key={icon.id}>
      {icon.name}
    </li>
  )
})

const ContactIcons = () => {
  return <ul className="icons">{icon}</ul>
}

export default ContactIcons
