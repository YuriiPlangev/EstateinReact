import { useForm } from "react-hook-form";

function DetailsForm({property}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log("Form Data:", data);
      };
    return (
        <section className="property-inquiry">
        <h2 className="property-inquiry-title">Inquire About</h2>
              <p className="property-inquiry-description">
                Interested in this property? Fill out the form below, and our real estate
                experts will get back to you with more details, including scheduling a
                viewing and answering any questions you may have.
              </p>
              <form className="connect__form" onSubmit={handleSubmit(onSubmit)}>
      {/* First Name */}
      <fieldset className="connect__fieldset">
        <label htmlFor="first-name" className="connect__label">First Name</label>
        <input
          type="text"
          id="first-name"
          placeholder="Enter First Name"
          className="connect__input"
          {...register("firstName", {
            required: "First Name is required",
            minLength: { value: 2, message: "Minimum 2 characters" },
            maxLength: { value: 50, message: "Maximum 50 characters" },
            pattern: { value: /^[A-Za-z]+$/, message: "Only letters allowed" },
          })}
        />
        {errors.firstName && <span className="error">{errors.firstName.message}</span>}
      </fieldset>

      {/* Last Name */}
      <fieldset className="connect__fieldset">
        <label htmlFor="last-name" className="connect__label">Last Name</label>
        <input
          type="text"
          id="last-name"
          placeholder="Enter Last Name"
          className="connect__input"
          {...register("lastName", {
            required: "Last Name is required",
            minLength: { value: 2, message: "Minimum 2 characters" },
            maxLength: { value: 50, message: "Maximum 50 characters" },
            pattern: { value: /^[A-Za-z]+$/, message: "Only letters allowed" },
          })}
        />
        {errors.lastName && <span className="error">{errors.lastName.message}</span>}
      </fieldset>

      {/* Email */}
      <fieldset className="connect__fieldset">
        <label htmlFor="email-connect" className="connect__label">Email</label>
        <input
          type="email"
          id="email-connect"
          placeholder="Enter your Email"
          className="connect__input"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" },
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </fieldset>

      {/* Phone */}
      <fieldset className="connect__fieldset">
        <label htmlFor="phone-connect" className="connect__label">Phone</label>
        <input
          type="text"
          id="phone-connect"
          placeholder="Enter your phone"
          className="connect__input"
          maxLength={15}
          {...register("phone", {
            required: "Phone number is required",
            pattern: { value: /^[0-9+ -]{10,15}$/, message: "Invalid phone number (10-15 digits)" },
          })}
        />
        {errors.phone && <span className="error">{errors.phone.message}</span>}
      </fieldset>

      {/* Selected Property (disabled) */}
      <fieldset className="connect__fieldset">
        <label htmlFor="selectedProp" className="connect__label">Selected Property</label>
        <input className="connect__input property-inquiry__input" defaultValue={property.name} id="selectedProp" disabled />
      </fieldset>

      {/* Message */}
      <fieldset className="connect__fieldset connect__textarea">
        <label htmlFor="textarea-connect" className="connect__label">Message</label>
        <textarea
          id="textarea-connect"
          placeholder="Enter your Message here.."
          rows={4}
          className="connect__input"
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Minimum 10 characters" },
          })}
        />
        {errors.message && <span className="error">{errors.message.message}</span>}
      </fieldset>

      {/* Agree Checkbox */}
      <fieldset className="checkbox__fieldset">
        <input
          type="checkbox"
          id="agree-connect"
          className="connect__checkbox"
          {...register("agree", { required: "You must agree to the terms" })}
        />
        <label htmlFor="agree-connect" className="checkbox__label">
          I agree with <a href="terms.html" className="checkbox__link">Terms of Use and Privacy Policy</a>
        </label>
        {errors.agree && <span className="error">{errors.agree.message}</span>}
      </fieldset>

      {/* Submit Button */}
      <button type="submit" className="connect__button">Send Your Message</button>
    </form>
    </section>
    )
}
export default DetailsForm  