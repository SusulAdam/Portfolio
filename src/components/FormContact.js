import React from "react"

const FormContact = () => {
  return (
    <section className="contact-page">
      <article className="contact-form">
        <h3 className="contact-form__title">get in touch</h3>
        <form action="https://formspree.io/xaylnorz" method="POST">
          <div className="contact-form__form-group">
            <input
              name="name"
              type="text"
              placeholder="name"
              className="contact-form__form-control"
            />
            <input
              name="email"
              type="email"
              placeholder="email"
              className="contact-form__form-control"
            />
            <textarea
              name="message"
              className="contact-form__form-control"
              placeholder="message"
              rows="5"
            ></textarea>
            <button type="sumbit" className="contact-form__sumbit btn">
              sumbit here
            </button>
          </div>
        </form>
      </article>
    </section>
  )
}

export default FormContact
