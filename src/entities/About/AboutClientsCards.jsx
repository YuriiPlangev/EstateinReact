function AboutClientsCards () {
    return (
        <div className="clients__wrap">
    <article className="clients__card">
      <div className="clients__card-header">
        <span className="clients__card-date">Since 2019</span>
        <h2 className="clients__card-title">ABC Corporation</h2>
        <a
          href="https://www.linkedin.com/"
          className="clients__card-link"
          target="_blank"
        >
          Visit Website
        </a>
      </div>
      <div className="clients__card-info">
        <div className="clients__card-item">
          <p className="clients__card-label">Domain</p>
          <p className="clients__card-value">Commercial Real Estate</p>
        </div>
        <div className="clients__card-item">
          <p className="clients__card-label">Category</p>
          <p className="clients__card-value">Luxury Home Development</p>
        </div>
      </div>
      <div className="clients__card-testimonial">
        <span className="clients__card-label">What They Said</span>
        <p className="clients__card-text">
          Estatein's expertise in finding the perfect office space for our
          expanding operations was invaluable. They truly understand our
          business needs.
        </p>
      </div>
    </article>
    <article className="clients__card">
      <div className="clients__card-header">
        <span className="clients__card-date">Since 2018</span>
        <h2 className="clients__card-title">GreenTech Enterprises</h2>
        <a
          href="https://www.linkedin.com/"
          className="clients__card-link"
          target="_blank"
        >
          Visit Website
        </a>
      </div>
      <div className="clients__card-info">
        <div className="clients__card-item">
          <p className="clients__card-label">Domain</p>
          <p className="clients__card-value">Commercial Real Estate</p>
        </div>
        <div className="clients__card-item">
          <p className="clients__card-label">Category</p>
          <p className="clients__card-value">Retail Space</p>
        </div>
      </div>
      <div className="clients__card-testimonial">
        <span className="clients__card-label">What They Said</span>
        <p className="clients__card-text">
          Estatein's ability to identify prime retail locations helped us expand
          our brand presence. They are a trusted partner in our growth{" "}
        </p>
      </div>
    </article>
  </div>
    )
}
export default AboutClientsCards