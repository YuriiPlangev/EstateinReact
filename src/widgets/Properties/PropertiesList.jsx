import { properties } from "../../entities/propertiesList/properties"
function PropertiesList (){
    return (
        <div className="possibilities__container" id="propertyCards">
        {
            properties.map((property) => (
                <article className="featured__card" id="property-1" data-id={1}>
        <img src={property.images[0]} alt="" className="featured__card--img" id="cardImg" />
        <h3 className="featured__card--title" >{property.name}</h3>
        <p className="featured__card--desc" id="cardDescription">
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
              <svg
                width={20}
                height={20}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <use xlinkHref="i/svg/spriteFeatured.svg#bed" />
              </svg>
            </span>
            {property.bedrooms} Bedroom
          </div>
          <div className="featured__card--note">
            <span>
              <svg
                width={20}
                height={20}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <use xlinkHref="i/svg/spriteFeatured.svg#bath" />
              </svg>
            </span>
            {property.bathrooms} Bathroom
          </div>
          <div className="featured__card--note">
            <span>
              <svg
                width={20}
                height={20}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <use xlinkHref="i/svg/spriteFeatured.svg#house" />
              </svg>
            </span>
            App
          </div>
        </div>
        <div className="price">
          <p className="price__text">Price</p>
          <p className="price__value" id="price">
            {property.price}
          </p>
          <a href="prop.html?id=1" className="price__details">
            View Property Details
          </a>
        </div>
      </article>
            ))
        }
    </div>
    )
}
export  default PropertiesList