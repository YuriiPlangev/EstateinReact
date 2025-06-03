import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";

import { properties } from "../../entities/propertiesList/properties";

function FeaturedSlider() {
  return (
    <div className="feedback__wrap">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[FreeMode, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {properties.map((property) => (
          <SwiperSlide>
            <article
              key={property.id}
              className="featured__card"
              id={`property-${property.id}`}
            >
              <img
                src={`${property.images[0]}`}
                alt={property.name}
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
                  {property.type === "apartaments" ? "App" : "House"}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default FeaturedSlider;
