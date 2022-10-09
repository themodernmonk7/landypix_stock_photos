import { BiDotsHorizontalRounded } from "react-icons/bi"

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-4 px-8 md:px-24">
        {/* Logo */}
        <div className="font-landypix text-4xl font-black tracking-wider text-white transition-all duration-300 ease-linear hover:text-gray-400">
          <a href="#">
            <h1>landypix</h1>
          </a>
        </div>
        {/* menu items */}
        <div className="flex items-center justify-center space-x-10 text-white">
          <ul className="hidden items-center justify-center space-x-6 text-lg font-normal md:flex ">
            <li className="transition-all duration-300 ease-linear hover:text-gray-400">
              {" "}
              <a href="#"> Explore </a>
            </li>
            <li className="transition-all duration-300 ease-linear hover:text-gray-400">
              {" "}
              <a href="#"> License </a>
            </li>
            <li className="transition-all duration-300 ease-linear hover:text-gray-400">
              {" "}
              <a href="#"> Upload </a>
            </li>
            <li className="transition-all duration-300 ease-linear hover:text-gray-400">
              {" "}
              <a href="#">
                {" "}
                <BiDotsHorizontalRounded size="25px" />{" "}
              </a>
            </li>
          </ul>
          <button className="rounded-md bg-white py-2 px-5 text-lg text-black md:py-3 ">
            Join
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
