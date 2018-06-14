import React, { Fragment } from 'react'

const Form = props => (
  <Fragment>
    <form className="form-container">
      <header className="form-header">
        Gig<span className="emphasis">Hub</span>
      </header>

      <p>
        Need a job quick? Don't have time schedule interviews and definitely
        can't be bothered to fill out paperwork?
      </p>
      <p>
        GigHub has you covered. Our carefully curated repository of gigs surely
        has work that will fit your needs. Get started below!
      </p>

      {/* Needs to be own component */}
      <div className="container">
        <label htmlFor="query">
          What are you looking for?
          <input
            type="text"
            className="form-input"
            name="query"
            placeholder="ex. mow the lawn, paint a house"
          />
        </label>

        <button className="button">Find Job</button>
      </div>
    </form>
  </Fragment>
)

export default Form
