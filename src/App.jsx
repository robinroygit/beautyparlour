import Navbar from "./components/Navbar";
import Footer from "./container/Footer";
import Header from "./container/Header";
import Testimonial from "./container/Testimonial";
import Services from "./container/Services";
import Carousel from "./components/Carousel";
import About from "./container/About";

function App() {


  return (
    <>
    <Navbar/>
    <div className="">
    <Header/>
    <Carousel/>
    <Services/>
    <About/>
    <Testimonial/>
    <Footer/>
    </div>
    </>
  )
}

export default App
