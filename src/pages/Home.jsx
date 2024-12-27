import AboutUs from '../components/AboutUs'
import Carousel from '../components/Carousel'
import HomeMarathon from '../components/HomeMarathon'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
       <Carousel /> 
       <HomeMarathon></HomeMarathon>
       <AboutUs></AboutUs>
       <Testimonials></Testimonials>
    </div>
  )
}

export default Home
