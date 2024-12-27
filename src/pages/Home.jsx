import AboutUs from '../components/AboutUs'
import Carousel from '../components/Carousel'
import HomeMarathon from '../components/HomeMarathon'

const Home = () => {
  return (
    <div>
       <Carousel /> 
       <HomeMarathon></HomeMarathon>
       <AboutUs></AboutUs>
    </div>
  )
}

export default Home
