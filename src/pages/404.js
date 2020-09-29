import React from "react"
import Layout from "../components/Layout"
import ErrorLayout from "../components/ErrorLayout"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="404" description="error page- there is no such page" />
      <ErrorLayout />
      <Footer />
    </Layout>
  )
}

export default Error
