import React from "react"
import Layout from "../components/Layout"
import FormContact from "../components/FormContact"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="you can contact with me" />
      <FormContact />
      <Footer />
    </Layout>
  )
}

export default contact
