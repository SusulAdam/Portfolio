import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  ;<li key={data.id}>
    <Link to={data.url}>{data.text}</Link>
  </li>
})

const links = () => {
  return <ul>{tempLinks}</ul>
}

export default links
