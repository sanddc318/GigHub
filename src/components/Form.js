import React, { Fragment } from 'react'

const Form = props => (
  <section
    style={{
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    }}
  >
    <header>
      Gig<span className="emphasis">Hub</span>
    </header>

    {/* Needs to be own component */}
    <div className="container container--form">
      <p>
        Need a job quick? Don't have time schedule interviews and definitely
        can't be bothered to fill out paperwork?
      </p>
      <p>
        GigHub has you covered. Our carefully curated repository of gigs surely
        has work that will fit your needs. Get started below!
      </p>

      <form className="form-container">
        <label htmlFor="query">
          What are you looking to do? <br />
        </label>
        <input
          type="text"
          className="form-input"
          name="query"
          placeholder="ex. mow the lawn, paint a house"
        />

        <button className="button">Find Job</button>
      </form>
    </div>
  </section>
)

export default Form
