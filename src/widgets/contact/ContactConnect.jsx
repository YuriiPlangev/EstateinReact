function ContactConnect () {
  return (
    <section className="connect container">
    <h2 className="connect__title">Let's Connect</h2>
    <p className="connect__description">
      We're excited to connect with you and learn more about your real estate
      goals. Use the form below to get in touch with Estatein.
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
          className="connect__input"
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
          className="connect__input"
          maxLength={13}
        />
        <span className="error" id="phoneError" />
      </fieldset>
      <fieldset className="connect__fieldset">
        <label htmlFor="inquiry-connect" className="connect__label">
          Inquiry Type
        </label>
        <select className="connect__input">
          <option value="" disabled="" selected="" hidden="">
            Select Inquiry Type
          </option>
          <option value="">Property Viewing Request</option>
          <option value="">Pricing Information</option>
          <option value="">Sell My Property</option>
          <option value="">Other</option>
        </select>
      </fieldset>
      <fieldset className="connect__fieldset">
        <label htmlFor="inquiry-connect" className="connect__label">
          How Did You Hear About Us?
        </label>
        <select className="connect__input">
          <option value="" disabled="" selected="" hidden="">
            Select
          </option>
          <option value="">Social Media</option>
          <option value="">Recommendatio</option>
          <option value="">Online Advertisement</option>
          <option value="">Other</option>
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
export default ContactConnect