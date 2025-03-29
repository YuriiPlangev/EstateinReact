import { useLocation } from "react-router-dom";
import DetailsCard from "../widgets/details/DetailsCard";
import DetailsForm from "../widgets/details/DetailsForm";
import DetailsPricing from "../widgets/details/DetailsPricing";
import Question from "../widgets/question/Question";
function PropertiesDetails (){
  const location = useLocation();
  const property = location.state?.property;

  
   return (
    <main className="main container">
      <DetailsCard property = {property} />
      <DetailsForm property = {property} />
      <DetailsPricing property = {property} />
      <Question />
    </main>
   )
}
export default PropertiesDetails