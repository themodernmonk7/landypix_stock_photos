import mainLogo from "../assets/image_4.jpg"
import { Navbar, SearchForm } from "../components"
const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `URL("${mainLogo}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "500px",
  }
  return (
    <>
      {/* Navbar */}
      <section className="relative" style={backgroundImageStyle}>
        <a href="#" className="absolute bottom-5 right-3 md:right-8 ">
          <p className="text-sm text-gray-400 opacity-70 font-semibold hover:text-gray-200 transition-all duration-300 ease-linear ">
            <span className="">Photo by</span>
            <span className="text-gray-200 "> Irina Iriser</span>
          </p>
        </a>
        <Navbar />
        <SearchForm />
      </section>
    </>
  )
}

export default Hero
