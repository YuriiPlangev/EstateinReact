import { feedbacks } from "../../entities/feedbacks/feedbacks";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";

function FeedbackSlider() {
  return (
    <>
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
          {feedbacks.map((feedback) => (
            <SwiperSlide>
              <div key={feedback.id} className="slider__item">
                <article className="feedback__card">
                  <img
                    src="svg/stars.svg"
                    alt="Feedback"
                    className="feedback__card--appraisal"
                  />
                  <h3 className="feedback__card--heading">
                    {feedback.heading}
                  </h3>
                  <p className="feedback__card--text">{feedback.text}</p>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
export default FeedbackSlider;
