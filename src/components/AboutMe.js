import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Technologies from "../constants/technologies"

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

const AboutMe = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <section className="about">
      <article className="about__container">
        <div className="about__image">
          <Image fluid={fluid} />
        </div>
        <div className="about__information-container">
          <div className="about__main-information">
            <h5 className="about__title">About Me</h5>
            <p className="about__split-information">
              Hi! My name is Adam and I'm an engineer. Mainly I deal with
              frontend programming. Moreover i like to analyze the data.
            </p>
            <p className="about__split-information">
              While working with me, we will create a joint team and develop a
              goal.
            </p>
            <p className="about__split-information">
              My involvement in the project is always on the highest level. I
              work based on the latest technologies. I care about good
              appearance of the application and its functionality. My
              applications are always refined in every possible way.
            </p>
            <Technologies />
          </div>
          <div className="about__language-information"></div>
        </div>
      </article>
    </section>
  )
}

export default AboutMe
