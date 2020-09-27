import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const getImages = graphql`
  {
    piggyBank: file(relativePath: { eq: "piggyBank.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    portfolioApp: file(relativePath: { eq: "portofolioApp.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    WeatherApplication: file(relativePath: { eq: "WeatherApplication.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    leafletMap: file(relativePath: { eq: "leafletMap.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    toDoList: file(relativePath: { eq: "to-do-list.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    foodbrainers: file(relativePath: { eq: "foodbrainers.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dataAnalysis: file(relativePath: { eq: "dataAnalysis.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ProjectsInformations = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return <div></div>
}

export default ProjectsInformations
