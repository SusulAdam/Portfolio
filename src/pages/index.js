import React from "react"
import Layout from "../components/Layout"
import Home from "../components/Home"
import SEO from "../components/SEO"

export default () => {
  return (
    <Layout>
      <SEO title="Home" description="this is our home page" />
      <Home />
    </Layout>
  )
}
