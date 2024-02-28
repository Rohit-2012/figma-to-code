import Banner from '../components/Banner'
import Footer from '../components/Footer'
import KeyPoints from '../components/KeyPoints'
import Circulars from '../sections/Circulars'
import Hero from '../sections/Hero'
import HomeHeader from '../sections/HomeHeader'
import HomeProducts from '../sections/HomeProducts'
import Network from '../sections/Network'
import SocialResponsibility from '../sections/SocialResponsibility'

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Hero />
      <HomeProducts />
      <Banner />
      <KeyPoints />
      <Circulars />
      <Network />
      <SocialResponsibility />
      <Footer />
    </div>
  )
}

export default Home
