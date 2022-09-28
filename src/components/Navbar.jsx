import { BiDotsHorizontalRounded } from "react-icons/bi"

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-4 px-8 md:px-24">
        {/* Logo */}
        <div className="text-white text-2xl hover:text-gray-400 transition-all duration-300 ease-linear">
          <a href="#">
            <h1>landypix</h1>
          </a>
        </div>
        {/* menu items */}
        <div className="flex justify-center items-center space-x-10 text-white">
          <ul className="hidden md:flex justify-center items-center space-x-6 text-lg font-normal ">
            <li className="hover:text-gray-400 transition-all duration-300 ease-linear">
              {" "}
              <a href="#"> Explore </a>
            </li>
            <li className="hover:text-gray-400 transition-all duration-300 ease-linear">
              {" "}
              <a href="#"> License </a>
            </li>
            <li className="hover:text-gray-400 transition-all duration-300 ease-linear">
              {" "}
              <a href="#"> Upload </a>
            </li>
            <li className="hover:text-gray-400 transition-all duration-300 ease-linear">
              {" "}
              <a href="#">
                {" "}
                <BiDotsHorizontalRounded size="25px" />{" "}
              </a>
            </li>
          </ul>
          <button className="bg-white text-black px-4 h-[50px] rounded-md text-lg">
            Join
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
