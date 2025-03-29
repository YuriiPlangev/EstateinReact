import PropertyFilter from "../widgets/Properties/PropertiesFilter";
import { properties } from "../entities/propertiesList/properties";

function Properties() {

  return (
    <>
      <section className="properties-intro">
        <div className="properties-intro__text">
          <h2 className="properties-intro__title">Find Your Dream Property</h2>
          <p className="properties-intro__description">
            Welcome to Estatein, where your dream property awaits in every corner of
            our beautiful world. Explore our curated selection of properties, each
            offering a unique story and a chance to redefine your life.
          </p>
        </div>
        <PropertyFilter
          properties={properties}
        />
      </section>
     
    </>
  );
}

export default Properties;
