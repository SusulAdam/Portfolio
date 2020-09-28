import React from "react"
import Layout from "../components/Layout"
import AllProjects from "../components/AllProjects"
import Footer from "../components/Footer"
const projects = () => {
  return (
    <div>
      <Layout>
        <AllProjects />
        <Footer />
      </Layout>
    </div>
  )
}

export default projects
