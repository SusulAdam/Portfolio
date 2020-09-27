import React from "react"
import { Link } from "gatsby"

const ErrorLayout = () => {
  return (
    <section className="error">
      <div className="error__titles">
        <p className="error__title">Error 404</p>
        <p className="error__title ">
          This page isn't available. Sorry about that. Please back to the home
          page
        </p>
      </div>

      <button className="error__home-control btn">
        <Link to="/">home</Link>
      </button>
    </section>
  )
}

export default ErrorLayout
