import { Link } from "react-router-dom"
function IntroLinkButtons() {
    return (
        <div className="intro__button">
        
        <Link to="/properties" className="button__browse">
        View Properties
        </Link>
        <Link to="/contact" className="button__learn">
        Learn More
        </Link>
        </div>
    )
    
}
export default IntroLinkButtons