import { feedbacks } from "../../entities/feedbacks/feedbacks"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function FeedbackSlider() {
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
        {feedbacks.map((feedback) => (
             <div className="slider__item">
             <article className="feedback__card">
               <img
                 src={feedback.img}
                 alt="Feedback"
                 className="feedback__card--appraisal"
               />
               <h3 className="feedback__card--heading">{feedback.heading}</h3>
               <p className="feedback__card--text">
                 {feedback.text}
               </p>
               <div className="person">
                 <img
                   src={feedback.photo}
                   alt=""
                   className="person__photo"
                 />
                 <div className="person__info">
                   <h4 className="person__info_name">{feedback.name}</h4>
                   <p className="person__info_city">{feedback.city}</p>
                 </div>
               </div>
             </article>
           </div>
        ))}
        </Slider>

  </div>
    )
}

export default FeedbackSlider