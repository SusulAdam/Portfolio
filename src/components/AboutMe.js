import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

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
            <p className="about__split-information">
              My name is Adam. I am engineer. Mainly I deal with frontend
              programming. Sometimes I also like to look at the data and
              calculate something.
            </p>
            <p className="about__split-information">
              Working with me, we will create a joint team and develop a goal.
            </p>
            <p className="about__split-information">
              My involvement in the project is always high, based on modern
              technologies I appreciate the good appearance of the application
              and its functionality. My applications are always refined in every
              possible way
            </p>
          </div>
          <div className="about__language-information"></div>
        </div>
      </article>
    </section>
  )
}

export default AboutMe
