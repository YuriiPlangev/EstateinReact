import Featured from "../widgets/featured/Featured"
import Feedback from "../widgets/feedback/Feedback"
import Info from "../widgets/info/Info"
import Intro from "../widgets/intro/intro"
import Question from "../widgets/question/Question"

function Home() {
    return (
        <>
        <main className="container">  
        <Intro /> 
        <Featured />
        <Feedback />
        <Question />
        </main>
        <Info />
        </>
    )
}   

export default Home