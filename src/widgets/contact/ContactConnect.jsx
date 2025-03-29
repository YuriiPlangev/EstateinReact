import { useForm } from "react-hook-form";

function ContactConnect() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <section className="connect container">
      <h2 className="connect__title">Let's Connect</h2>
      <p className="connect__description">
        We're excited to connect with you and learn more about your real estate goals. 
        Use the form below to get in touch with Estatein.
      </p>
      <form className="connect__form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="connect__fieldset">
          <label htmlFor="firstName" className="connect__label">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter First Name"
            className="connect__input"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && <span className="error">{errors.firstName.message}</span>}
        </fieldset>

        <fieldset className="connect__fieldset">
          <label htmlFor="lastName" className="connect__label">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter Last Name"
            className="connect__input"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && <span className="error">{errors.lastName.message}</span>}
        </fieldset>

        <fieldset className="connect__fieldset">
          <label htmlFor="email" className="connect__label">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            className="connect__input"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </fieldset>

        <fieldset className="connect__fieldset">
          <label htmlFor="phone" className="connect__label">Phone</label>
          <input
            type="text"
            id="phone"
            placeholder="Enter your phone"
            className="connect__input"
            maxLength={13}
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && <span className="error">{errors.phone.message}</span>}
        </fieldset>

        <fieldset className="connect__fieldset">
          <label htmlFor="inquiryType" className="connect__label">Inquiry Type</label>
          <select className="connect__input" {...register("inquiryType", { required: "Please select an option" })}>
            <option value="">Select Inquiry Type</option>
            <option value="viewing">Property Viewing Request</option>
            <option value="pricing">Pricing Information</option>
            <option value="sell">Sell My Property</option>
            <option value="other">Other</option>
          </select>
          {errors.inquiryType && <span className="error">{errors.inquiryType.message}</span>}
        </fieldset>

        <fieldset className="connect__fieldset">
          <label htmlFor="referral" className="connect__label">How Did You Hear About Us?</label>
          <select className="connect__input" {...register("referral", { required: "Please select an option" })}>
            <option value="">Select</option>
            <option value="social">Social Media</option>
            <option value="recommendation">Recommendation</option>
            <option value="ad">Online Advertisement</option>
            <option value="other">Other</option>
          </select>
          {errors.referral && <span className="error">{errors.referral.message}</span>}
        </fieldset>

        <fieldset className="connect__fieldset connect__textarea">
          <label htmlFor="message" className="connect__label">Message</label>
          <textarea
            id="message"
            placeholder="Enter your Message here.."
            rows={4}
            className="connect__input"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && <span className="error">{errors.message.message}</span>}
        </fieldset>

        <fieldset className="checkbox__fieldset">
          <input
            type="checkbox"
            id="agree"
            className="connect__checkbox"
            {...register("agree", { required: "You must agree to the terms" })}
          />
          <label htmlFor="agree" className="checkbox__label">
            I agree with
            <a href="terms.html" className="checkbox__link">Terms of Use and Privacy Policy</a>
          </label>
          {errors.agree && <span className="error">{errors.agree.message}</span>}
        </fieldset>

        <button type="submit" className="connect__button">Send Your Message</button>
      </form>
    </section>
  );
}

export default ContactConnect;