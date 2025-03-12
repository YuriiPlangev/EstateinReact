import { Link } from "react-router-dom"

function ContactButton () {
    return (
        <button className="button__link">
        <Link
          to="/contact"
          className="button__link--item">
            Contact Us
            </Link>
      </button>
    )
  }
  export default ContactButton