import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow} from 'swiper/modules';

function DetailsCard({ property }) {
  


  return (
    <section className="property-card">
      <div className="property-card__info">
        <h1 className="property-card__info-name">{property.name}</h1>
        
        <div className="property-card__info-location">
          <svg width={14} height={18} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.61646 17.6259C6.64163 17.6405 6.66141 17.6517 6.67542 17.6596L6.69869 17.6726C6.88441 17.7745 7.1148 17.7738 7.3007 17.6729L7.32458 17.6596C7.33859 17.6517 7.35837 17.6405 7.38354 17.6259C7.43388 17.5967 7.50581 17.5542 7.59625 17.4985C7.77705 17.3872 8.03229 17.223 8.33718 17.0076C8.94591 16.5776 9.75812 15.9395 10.5721 15.1061C12.1922 13.4474 13.875 10.9551 13.875 7.75C13.875 3.95304 10.797 0.875 7 0.875C3.20304 0.875 0.125 3.95304 0.125 7.75C0.125 10.9551 1.80777 13.4474 3.42788 15.1061C4.24188 15.9395 5.05409 16.5776 5.66282 17.0076C5.96771 17.223 6.22295 17.3872 6.40375 17.4985C6.49419 17.5542 6.56612 17.5967 6.61646 17.6259ZM7 10.25C8.38071 10.25 9.5 9.13071 9.5 7.75C9.5 6.36929 8.38071 5.25 7 5.25C5.61929 5.25 4.5 6.36929 4.5 7.75C4.5 9.13071 5.61929 10.25 7 10.25Z" fill="white"/>
          </svg>
          <p className="property-card__info-place">{property.location}</p>
        </div>

        <div className="property-card__info-price">
          <p className="property-card__info-text">{property.price}$ Price</p>
        </div>
      </div>


      {property.images?.length > 0 && (
        <div className="property-card__slider">
          <div className="slider-container">
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            loop={true}
            breakpoints={{
              320: {
              slidesPerView: 1,
              
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
            modules={[EffectCoverflow]}
            className="mySwiper"
            >
              {property.images.map((image, index) => (
                <SwiperSlide>
                <div key={index}>
                  <img src={image} alt={`${property.name} - ${index + 1}`} className="property-card__slider-img" />
                </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <div className="property-card__descriptions">
        <div className="property-card__description">
          <h3 className="property-card-title">{property.description}</h3>

          <div className="property-card__details">
            <div className="property-card__detail">
              <p className="property-card__detail-title">Bedrooms</p>
              <span className="property-card__detail-value">{property.bedrooms}</span>
            </div>

            <div className="property-card__detail">
              <p className="property-card__detail-title">Bathrooms</p>
              <span className="property-card__detail-value">{property.bathrooms}</span>
            </div>

            <div className="property-card__detail">
              <p className="property-card__detail-title">Area</p>
              <span className="property-card__detail-value">{property.area} sq ft</span>
            </div>
          </div>
        </div>


        {property.features?.length > 0 && (
          <div className="property-card__features">
            <h3 className="property-card-title">Key Features and Amenities</h3>
            <ul className="property-card__features-list">
              {property.features.map((feature, index) => (
                <li key={index} className="property-card__features-item">{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default DetailsCard;
