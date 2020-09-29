import React from "react"
import Layout from "../components/Layout"
import AllProjects from "../components/AllProjects"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
const projects = () => {
  return (
    <div>
      <Layout>
        <SEO
          title="Projects"
          description="projcts with descriptions and links to them"
        />
        <AllProjects />
        <Footer />
      </Layout>
    </div>
  )
}

export default projects
