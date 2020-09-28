import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const getImages = graphql`
  {
    piggyBank: file(relativePath: { eq: "piggyBank.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 738, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    portfolioApp: file(relativePath: { eq: "portofolioApp.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 738, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    WeatherApplication: file(relativePath: { eq: "WeatherApplication.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 738, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    leafletMap: file(relativePath: { eq: "leafletMap.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 738, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    toDoList: file(relativePath: { eq: "to-do-list.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 738, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    foodbrainers: file(relativePath: { eq: "foodbrainers.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 738, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dataAnalysis: file(relativePath: { eq: "dataAnalysis.png" }) {
      childImageSharp {
        fluid(maxWidth: 738, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AllProjects = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <section className="allprojects">
      <div className="allprojects__container">
        <h3 className="allprojects__title">All projects</h3>
        <article className="project">
          <Image
            className="project__image"
            fluid={data.piggyBank.childImageSharp.fluid}
          />
          <div className="project__informations">
            <h3 className="project__title">React project</h3>
            <p className="project__information">
              Managing your money has never been easier. Control your expenses,
              check your investments and plan your budget. If you want to change
              the currency, go to the "exchange rate" page and check the current
              currency rates.
              <ul className="project__technologies">
                <li className="project__technology">react</li>
                <li className="project__technology">javascript</li>
                <li className="project__technology">scss</li>
                <li className="project__technology">api</li>
              </ul>
            </p>
          </div>
        </article>
        <article className="project">
          <Image
            className="project__image"
            fluid={data.portfolioApp.childImageSharp.fluid}
          />
          <div className="project__informations">
            <h3 className="project__title">Gatsby project</h3>
            <p className="project__information">
              Build a portfolio website, advertise your business and increase
              your profits gain more customers. <br />
              Don't waste your time, contact me and we'll talk about it.
              <ul className="project__technologies">
                <li className="project__technology">gatsby</li>
                <li className="project__technology">javascript</li>
                <li className="project__technology">scss</li>
              </ul>
            </p>
          </div>
        </article>
        <article className="project">
          <Image
            className="project__image"
            fluid={data.WeatherApplication.childImageSharp.fluid}
          />
          <div className="project__informations">
            <h3 className="project__title">Javascript project</h3>
            <p className="project__information">
              The project consists in showing the temperature, humidity,
              pressure and a picture of the weather (e.g. clouds). To find
              weather information you can use 'input' and write a city name or
              you can click a microphone and say a city name then application
              find automatic weather information.
              <ul className="project__technologies">
                <li className="project__technology">javascript</li>
                <li className="project__technology">scss</li>
              </ul>
            </p>
          </div>
        </article>
        <article className="project">
          <Image
            className="project__image"
            fluid={data.leafletMap.childImageSharp.fluid}
          />
          <div className="project__informations">
            <h3 className="project__title">Javascript project</h3>
            <p className="project__information">
              This project shows free map with several functions like:
              <br />
              - find your location <br />
              - measure the distance <br /> The map is free and uses the free
              Leaflet library.
              <ul className="project__technologies">
                <li className="project__technology">javascript</li>
                <li className="project__technology">scss</li>
                <li className="project__technology">leaflet-librabry</li>
              </ul>
            </p>
          </div>
        </article>

        <article className="project">
          <Image
            className="project__image"
            fluid={data.toDoList.childImageSharp.fluid}
          />
          <div className="project__informations">
            <h3 className="project__title">Javascript project</h3>
            <p className="project__information">
              Project consist on add, edit and delete new tasks. The projecy
              includes the possiblity of adding and editing a task execution.
              Project don't have data base.
              <ul className="project__technologies">
                <li className="project__technology">javascript</li>
                <li className="project__technology">scss</li>
              </ul>
            </p>
          </div>
        </article>

        <article className="project">
          <Image
            className="project__image"
            fluid={data.foodbrainers.childImageSharp.fluid}
          />
          <div className="project__informations">
            <h3 className="project__title">Django project</h3>
            <p className="project__information">
              The main goal of the project was to create a food application.
              Which consists in searching for the nearest restaurant based on
              the entered location in the place of search. After entering the
              location, we can choose one of the 40 closest restaurants in
              Cracow.
              <ul className="project__technologies">
                <li className="project__technology">javascript</li>
                <li className="project__technology">python</li>
                <li className="project__technology">django</li>
              </ul>
            </p>
          </div>
        </article>

        <article className="project">
          <Image
            className="project__image"
            fluid={data.dataAnalysis.childImageSharp.fluid}
          />
          <div className="project__informations">
            <h3 className="project__title">Python project</h3>
            <p className="project__information">
              The project aims to do a basic data analysis based on the data
              loaded in Python. The project included data on selected
              biochemical and clinical parameters collected for patients with
              ischemic heart disease.
              <ul className="project__technologies">
                <li className="project__technology">python</li>
              </ul>
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AllProjects
