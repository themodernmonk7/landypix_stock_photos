import { AiOutlineSearch } from "react-icons/ai"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { useGlobalContext } from "../context/context"

const SearchForm = () => {
  const { query, setQuery, setPage, fetchImages, page } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query) return
    if (page === 1) {
      fetchImages()
      return
    }
    setPage(1)
  }

  return (
    <>
      <div className="grid place-items-center">
        <div className="text-white space-y-8 flex flex-col justify-center items-center mt-16 md:mt-20 px-10  ">
          <h2 className=" md:w-3/5 text-3xl font-semibold ">
            The best free stock photos, royalty free images & videos shared by
            creators.
          </h2>
          <form className="w-full md:w-3/5 flex justify-center items-center  relative">
            <input
              type="text"
              value={query}
              placeholder="Search for free photos"
              className=" px-3 py-3 w-full text-gray-500 font-semibold rounded-md border-none tracking-wide focus:outline-none placeholder:font-normal"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSubmit}>
              <span className=" absolute right-0 top-1 text-gray-500  px-2 py-2 text-center">
                {" "}
                <AiOutlineSearch size="25px" />{" "}
              </span>
            </button>
          </form>

          <h4 className=" text-[15px] w-full md:w-3/5 flex items-center space-x-2 md:text-lg">
            <span className="text-gray-300">Trending: </span>
            <span className="font-semibold">
              sunset, space, abstract, sky, dark
            </span>
            <span className="hidden md:flex ml-2 bg-gray-400/50 rounded-full hover:bg-gray-400/50 hover:text-gray-300/70 transition-all duration-200 ease-linear">
              <a href="#">
                <BiDotsHorizontalRounded size="25px" />{" "}
              </a>
            </span>
          </h4>
        </div>
      </div>
    </>
  )
}

export default SearchForm
