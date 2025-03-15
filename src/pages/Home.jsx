import AboutUs from '../components/AboutUs'
import Carousel from '../components/Carousel'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import HomeMarathon from '../components/HomeMarathon'
import Testimonials from '../components/Testimonials'
import UpcaommingMarathon from '../components/UpcaommingMarathon'

const Home = () => {
  return (
    <div>
       <Carousel /> 
       <HomeMarathon></HomeMarathon>
       <UpcaommingMarathon/>
       <AboutUs></AboutUs>
       <Testimonials></Testimonials>
       {/* <FAQ/> */}
       {/* <Contact/> */}
    </div>
  )
}

export default Home
