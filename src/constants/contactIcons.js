import React from "react"
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const icons = [
  {
    id: 1,
    className: "icon facebook",
    name: <AiFillFacebook />,
    link: "https://www.facebook.com/ashdazed",
  },
  {
    id: 2,
    className: "icon linkedin",
    name: <AiFillLinkedin />,
    link: "www.linkedin.com/in/adam-susuł",
  },
  {
    id: 3,
    className: "icon github",
    name: <AiFillGithub />,
    link: "https://github.com/SusulAdam",
  },
]

const icon = icons.map(icon => {
  return (
    <li className={icon.className} key={icon.id}>
      <a href={icon.link}>{icon.name}</a>
    </li>
  )
})

const ContactIcons = ({ contactStyle }) => {
  return <ul className={`icons ${contactStyle ? contactStyle : ""}`}>{icon}</ul>
}

export default ContactIcons
