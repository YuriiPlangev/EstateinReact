import FeedbackSlider from "../../features/feedback-slider/FeedbackSlider";
import SliderPagination from "../../shared/ui/components/SliderPagination";
import ViewAllBtn from "../../shared/ui/components/ViewAllBtn";

function Feedback() {
  return (
    <section className="feedback">
      <h2 className="feedback__title">What Our Clients Say</h2>
      
      <p className="feedback__text">
        Read the success stories and heartfelt testimonials from our valued clients.
        Discover why they chose Estatein for their real estate needs.
      </p>

      <FeedbackSlider />

      <div className="buttons--wrapper">
        <ViewAllBtn link="/feedback" />
        <SliderPagination />
      </div>
    </section>
  );
}

export default Feedback;
