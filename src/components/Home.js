import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Image from "gatsby-image"
import ContactIcons from "../constants/contactIcons"
import Typical from "react-typical"

const query = graphql`
  {
    file(relativePath: { eq: "myPhoto2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Home = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <section className="home">
      <article className="main-information">
        <h1 className="main-information__name-info">I'm Adam</h1>
        <h4 className="main-information__proffesion-info">
          <Typical
            steps={["engineer", 1500, "frontend developer", 4000]}
            wrapper="p"
            loop={Infinity}
          />
        </h4>

        <Link to="contact">
          <button className="main-information__contact btn">Contact me</button>
        </Link>

        <ContactIcons />
      </article>
      <Image fluid={fluid} className="home__photo" />
    </section>
  )
}

export default Home
