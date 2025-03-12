function PropertiesConnect () {
    return (
        <section className="properties__connect container">
    <h2 className="properties__title">Let's Make it Happen</h2>
    <p className="properties__description">
      Ready to take the first step toward your dream property? Fill out the form
      below, and our real estate wizards will work their magic to find your
      perfect match. Don't wait; let's embark on this exciting journey together.
    </p>
    <form className="connect__form" id="contactForm">
      <fieldset className="connect__fieldset">
        <label htmlFor="first-name" className="connect__label">
          First Name
        </label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="Enter First Name"
          className="connect__input"
        />
        <span className="error" id="firstNameError" />
      </fieldset>
      <fieldset className="connect__fieldset">
        <label htmlFor="last-name" className="connect__label">
          Last Name
        </label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Enter Last Name"
          className="connect__input"
        />
        <span className="error" id="lastNameError" />
      </fieldset>
      <fieldset className="connect__fieldset">
        <label htmlFor="email-connect" className="connect__label">
          Email
        </label>
        <input
          type="email"
          name="email-connect"
          id="email-connect"
          placeholder="Enter your Email"
          className="connect__input properties__email"
        />
        <span className="error" id="emailError" />
      </fieldset>
      <fieldset className="connect__fieldset">
        <label htmlFor="phone-connect" className="connect__label">
          Phone
        </label>
        <input
          type="text"
          name="phone-connect"
          id="phone-connect"
          placeholder="Enter your phone"
          className="connect__input properties__phone"
          maxLength={13}
        />
        <span className="error" id="phoneError" />
      </fieldset>
      <fieldset className="connect__fieldset">
        <label htmlFor="connect-location" className="connect__label">
          Preferred Location
        </label>
        <select className="connect__input" id="connect-location">
          <option value="" disabled="" selected="" hidden="">
            Select Location
          </option>
          <option value="">Dubai</option>
          <option value="">Miami</option>
          <option value="">Florida</option>
          <option value="">Los-Angeles</option>
        </select>
      </fieldset>
      <fieldset className="connect__fieldset">
        <label htmlFor="inquiry-connect" className="connect__label">
          Property Type
        </label>
        <select className="connect__input">
          <option value="" disabled="" selected="" hidden="">
            Select Property Type
          </option>
          <option value="">Villa</option>
          <option value="">Apartments</option>
          <option value="">House</option>
        </select>
      </fieldset>
      <fieldset className="connect__fieldset">
        <label htmlFor="inquiry-connect" className="connect__label">
          No. of Bathrooms
        </label>
        <select className="connect__input">
          <option value="" disabled="" selected="" hidden="">
            Select no. of Bedrooms
          </option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value="4+">4+</option>
        </select>
      </fieldset>
      <fieldset className="connect__fieldset">
        <label htmlFor="inquiry-connect" className="connect__label">
          No. of Bedrooms
        </label>
        <select className="connect__input">
          <option value="" disabled="" selected="" hidden="">
            Select no. of Bedrooms
          </option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4+</option>
        </select>
      </fieldset>
      <fieldset className="connect__fieldset">
        <label htmlFor="inquiry-connect" className="connect__label">
          Budget
        </label>
        <select name="pricing" id="pricing" className="connect__input">
          <option value="" hidden="">
            Pricing Range
          </option>
          <option value="50000-150000">50.000$ - 150.000$</option>
          <option value="150000-300000">150.000$ - 300.000$</option>
          <option value="300000-500000">300.000$ - 500.000$</option>
          <option value="500000-1000000">500.000$ - 1.000.000$</option>
          <option value="1000000+">1.000.000$+</option>
        </select>
      </fieldset>
      <fieldset className="connect__fieldset connect__textarea">
        <label htmlFor="textarea-connect" className="connect__label">
          Message
        </label>
        <textarea
          name="textarea-connect"
          id="textarea-connect"
          placeholder="Enter your Message here.."
          rows={4}
          className="connect__input"
          defaultValue={""}
        />
      </fieldset>
      <fieldset className="checkbox__fieldset">
        <input
          type="checkbox"
          name="agree-connect"
          id="agree-connect"
          className="connect__checkbox"
        />
        <label htmlFor="agree-connect" className="checkbox__label">
          I agree with
          <a href="terms.html" className="checkbox__link">
            Terms of Use and Privacy Policy
          </a>
          <span className="error" id="termsError" />
        </label>
      </fieldset>
      <button type="submit" className="connect__button">
        Send Your Message
      </button>
    </form>
  </section>
    )
}
export default PropertiesConnect