import { questions } from "../../entities/question/questions"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';

import 'swiper/css';
function QusetionSlider() {
    
    return (
        <div className="slider-container">
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

          
        {questions.map((question) => (
          <SwiperSlide>
             <div key={question.id} className="slider__item">
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
          </SwiperSlide>
        ))}
        </Swiper>

  </div>
    )
}

export default QusetionSlider