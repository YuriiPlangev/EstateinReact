import { Link } from "react-router-dom";
function PropertiesList({ properties }) {
  return (
    <div className="possibilities__container" id="propertyCards">
      {properties.length > 0 ? (
        properties.map((property) => (
          <article key={property.id} className="featured__card">
            <img
              src={property.images[0]}
              alt=""
              className="featured__card--img"
            />
            <h3 className="featured__card--title">{property.name}</h3>
            <p className="featured__card--desc">
              {property.description}
              <span>
                <a href="#" className="featured__card--link">
                  Read more
                </a>
              </span>
            </p>
            <div className="featured__card--notes">
              <div className="featured__card--note">
                <span>
                  <svg width={20} height={20}>
                    <use xlinkHref="svg/spriteFeatured.svg#bed" />
                  </svg>
                </span>
                {property.bedrooms} Bedroom
              </div>
              <div className="featured__card--note">
                <span>
                  <svg width={20} height={20}>
                    <use xlinkHref="svg/spriteFeatured.svg#bath" />
                  </svg>
                </span>
                {property.bathrooms} Bathroom
              </div>
              <div className="featured__card--note">
                <span>
                  <svg width={20} height={20}>
                    <use xlinkHref="svg/spriteFeatured.svg#house" />
                  </svg>
                </span>
                {property.type === "house" ? "House" : "App"}
              </div>
            </div>
            <div className="price">
              <p className="price__text">Price</p>
              <p className="price__value">${property.price}</p>
              <Link
                to={`/details/${property.name}`}
                state={{ property }}
                className="price__details"
              >
                View Property Details
              </Link>
            </div>
          </article>
        ))
      ) : (
        <div className="no-results">
          <p>No properties found matching your criteria.</p>
          <p>
            Please try adjusting the filters or{" "}
            <Link to="/contact">Contact Us</Link> for more options.
          </p>
        </div>
      )}
    </div>
  );
}

export default PropertiesList;
