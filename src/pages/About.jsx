import AboutAchiev from "../widgets/about/about-intro/AboutAchiev"
import AboutClients from "../widgets/about/about-intro/AboutClients"
import AboutIntro from "../widgets/about/about-intro/AboutIntro"
import AboutNavigating from "../widgets/about/about-intro/AboutNavigating"
import AboutTeam from "../widgets/about/about-intro/AboutTeam"
import AboutValue from "../widgets/about/about-intro/AboutValue"
import Info from "../widgets/info/Info"

function About() {
    return ( <>
    <main className="main container">
        <AboutIntro />
        <AboutValue />
        <AboutAchiev />
        <AboutNavigating />
        <AboutTeam />
        <AboutClients />
        </main>
        <Info />
        
    </>
        
    )
}

export default About