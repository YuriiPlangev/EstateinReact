import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { properties } from "../../entities/propertiesList/properties";


// import required modules

function FeaturedSlider() {
    var settings = {
            infinity : true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows : false,
            mobileFirst : true,
            responsive: [
                {
                breakpoint : 768,
                settings : {
                    slidesToShow: 2,
                    
                }
                },
                {
                breakpoint :1024,
                settings : {
                    slidesToShow: 3,
                    
                }
                },
            ]
      };
    return (
        <div className="slider-container">
        <Slider {...settings}>
        {
            properties.map((property) => (
              
                    <article className="featured__card" id={`property-${property.id}`}>
                        <img src={`${property.images[0]}`} alt={property.name} className="featured__card--img" />
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
                                        <use xlinkHref="i/svg/spriteFeatured.svg#bed" />
                                    </svg>
                                </span>
                                {property.bedrooms} Bedroom
                            </div>
                            <div className="featured__card--note">
                                <span>
                                    <svg width={20} height={20}>
                                        <use xlinkHref="i/svg/spriteFeatured.svg#bath" />
                                    </svg>
                                </span>
                                {property.bathrooms} Bathroom
                            </div>
                            <div className="featured__card--note">
                                <span>
                                    <svg width={20} height={20}>
                                        <use xlinkHref="i/svg/spriteFeatured.svg#house" />
                                    </svg>
                                </span>
                                {property.type === "apartaments" ? "App" : "House"}
                            </div>
                        </div>
                        <div className="price">
                            <p className="price__text">Price</p>
                            <p className="price__value">
                                {property.price} $
                            </p>
                            <a href={`prop.html?id=${property.id}`} className="price__details">
                                View Property Details
                            </a>
                        </div>
                    </article>
            ))
        }
        </Slider>
        </div>
    )
}    
export default FeaturedSlider