import QusetionSlider from "../../features/question-slider/QustionSlider"
import SliderPaginagion from "../../shared/ui/components/SliderPagination"
import ViewAllBtn from "../../shared/ui/components/ViewAllBtn"
function Question() {
    return (
        <section className="questions ">
  <h2 className="questions__title">Frequently Asked Questions</h2>
  <p className="questions__text">
    Find answers to common questions about Estatein's services, property
    listings, and the real estate process. We're here to provide clarity and
    assist you every step of the way.
  </p>
  <QusetionSlider />
</section>

    )
  }
  
  export default Question