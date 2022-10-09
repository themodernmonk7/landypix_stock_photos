import mainLogo from "../assets/HeaderImage.jpg"
import { Navbar, SearchForm } from "../components"
const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `URL(${mainLogo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "500px",
  }
  return (
    <>
      {/* Navbar */}
      <section className="relative" style={backgroundImageStyle}>
        <Navbar />
        <SearchForm />
      </section>
    </>
  )
}

export default Hero
