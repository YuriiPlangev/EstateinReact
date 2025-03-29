function DetailsPricing ({property}) {
    return (
      <section className="property-pricing">
      <h2 className="property-pricing__title">Comprehensive Pricing Details</h2>
      <p className="property-pricing__text">
        At Estatein, transparency is key. We want you to have a clear understanding
        of all costs associated with your property investment. Below, we break down
        the pricing for Seaside Serenity Villa to help you make an informed decision
      </p>
      <div className="property-pricing__note">
        <h3 className="property-pricing__note-title">Note</h3>
        <p className="property-pricing__text">
          The figures provided above are estimates and may vary depending on the
          property, location, and individual circumstances.
        </p>
      </div>
      <div className="property-pricing-wrapper">
        <div className="property-pricing__price">
          <p className="property-pricing__price-text">Listing Price</p>
          <p className="property-pricing__price-value">{`${property.price}$`}</p>
        </div>
      </div>
      <article className="property-pricing__card">
      <h3 className="property-pricing__note-title">Additional Fees</h3>
      <div className="property-pricing__card-wrapper">
        <div className="property-pricing__card-item">
          <p className="property-pricing__card-title">Property Transfer Tax</p>
          <p className="property-pricing__card-value" >{`${property.price * 0.02}$`}</p>
          <p className="property-pricing__card-note">
            Based on the sale price and local regulations
          </p>
        </div>
        <div className="property-pricing__card-item">
          <p className="property-pricing__card-title">Legal Fees</p>
          <p className="property-pricing__card-value" >{`${property.price * 0.002}$`}</p>
          <p className="property-pricing__card-note">
            Approximate cost for legal services, including title transfer
          </p>
        </div>
        <div className="property-pricing__card-item">
          <p className="property-pricing__card-title">Home Inspection</p>
          <p className="property-pricing__card-value">$500</p>
          <p className="property-pricing__card-note">
            Recommended for due diligence
          </p>
        </div>
        <div className="property-pricing__card-item">
          <p className="property-pricing__card-title">Property Insurance</p>
          <p className="property-pricing__card-value" >{`${property.price * 0.0009}$`}</p>
          <p className="property-pricing__card-note">
            Annual cost for comprehensive property insurance
          </p>
        </div>
        <div className="property-pricing__card-item">
          <p className="property-pricing__card-title">Mortgage Fees</p>
          <p className="property-pricing__card-value">Varies</p>
          <p className="property-pricing__card-note">
            If applicable, consult with your lender for specific details
          </p>
        </div>
      </div>
    </article>
    <>
      <article className="property-pricing__card">
        <h3 className="property-pricing__note-title">Monthly Costs</h3>
        <div className="property-pricing__card-item">
          <p className="property-pricing__card-title">Property Taxes</p>
          <p className="property-pricing__card-value" >{`${property.price * 0.001}$`}</p>
          <p className="property-pricing__card-note">
            Approximate monthly property tax based on the sale price and local rates
          </p>
        </div>
        <div className="property-pricing__card-item">
          <p className="property-pricing__card-title">
            Homeowners' Association Fee
          </p>
          <p className="property-pricing__card-value">{`${property.price * 0.0002}$`}</p>
          <p className="property-pricing__card-note">
            Monthly fee for common area maintenance and security
          </p>
        </div>
        <div className="property-pricing__card-item">
          <p className="property-pricing__card-title">Mortgage Payment</p>
          <p className="property-pricing__card-value">
            Varies based on terms and interest rate
          </p>
        </div>
        <div className="property-pricing__card-item">
          <p className="property-pricing__card-title">Property Insurance</p>
          <p className="property-pricing__card-value">$100</p>
          <p className="property-pricing__card-note">Approximate monthly cost</p>
        </div>
      </article>
      <article className="property-pricing__card">
        <h3 className="property-pricing__note-title">Total Initial Costs</h3>
        <div className="property-pricing__card-item">
          <p className="property-pricing__card-title">Listing Price</p>
          <p className="property-pricing__card-value" >{`${property.price}$`}</p>
        </div>
        <div className="property-pricing__card-item">
          <p className="property-pricing__card-title">Additional Fees</p>
          <p className="property-pricing__card-value" >{`${property.price * 0.023}$`}</p>
          <p className="property-pricing__card-note">
            Property transfer tax, legal fees, inspection, insurance
          </p>
        </div>
        <div className="property-pricing__card-item">
          <p className="property-pricing__card-title">Down Payment</p>
          <p className="property-pricing__card-value" >{`${property.price * 0.2}$`}</p>
          <p className="property-pricing__card-note">20%</p>
        </div>
        <div className="property-pricing__card-item">
          <p className="property-pricing__card-title">Mortgage Amount</p>
          <p className="property-pricing__card-value" >{`${property.price * 0.8}$`}</p>
          <p className="property-pricing__card-note">If applicable</p>
        </div>
      </article>
    </>
                </section>
    )
}
export default DetailsPricing   