import About from "./components/about/About";
import CVResume from "./components/cvResume/CVResume";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/heroSection/Hero";
import Services from "./components/myServices/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Works />
      <CVResume />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
