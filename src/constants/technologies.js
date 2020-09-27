import React from "react"

const programingTechnologies = [
  {
    id: 1,
    name: "html",
  },
  { id: 2, name: "css" },
  { id: 3, name: "scss" },
  { id: 4, name: "javascript" },
  { id: 5, name: "react" },
  { id: 6, name: "gatsby" },
  { id: 7, name: "python" },
]

const programingTechnology = programingTechnologies.map(technology => {
  return (
    <li classname="technology" key={technology.id}>
      {technology.name}
    </li>
  )
})

const Technologies = () => {
  return <ul className="technologies">{programingTechnology}</ul>
}

export default Technologies
