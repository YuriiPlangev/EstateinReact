import { questions } from "../../entities/question/questions"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function QusetionSlider() {
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
        {questions.map((question) => (
             <div className="slider__item">
             <article className="questions__card">
               <h3 className="questions__card_title">
                 {question.question}
               </h3>
               <p className="questions__card_text">
                 {question.answer }
               </p>
               <a href="" className="questions__card_button">
                 Read More
               </a>
             </article>
           </div>
        ))}
        </Slider>

  </div>
    )
}

export default QusetionSlider