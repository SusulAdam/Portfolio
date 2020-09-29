import React from "react"
import AboutMe from "../components/AboutMe"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

const about = () => {
  return (
    <Layout>
      <SEO title="About" description="information about me" />
      <AboutMe />
      <Footer />
    </Layout>
  )
}

export default about
