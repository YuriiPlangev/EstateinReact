import FeaturedSlider from "../../features/featured-slider/FeaturedSlider";
import ViewAllBtn from "../../shared/ui/components/ViewAllBtn";

function Featured() {
  return (
    <section className="featured">
      <h2 className="featured__title">Featured Properties</h2>

      <p className="featured__text">
        Explore our handpicked selection of featured properties. Each listing
        offers a glimpse into exceptional homes and investments available
        through Estatein.
      </p>

      <FeaturedSlider />

      <div className="buttons--wrapper">
        <ViewAllBtn />
      </div>
    </section>
  );
}

export default Featured;
