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
        <div className="mt-16 flex flex-col items-center justify-center space-y-7 px-4 text-white md:mt-20 md:px-10  ">
          <h2 className="w-full text-3xl font-semibold leading-[2.4rem] md:w-3/5 ">
            The best free stock photos, royalty free images & videos shared by
            creators.
          </h2>
          <form className="relative flex w-full items-center justify-center  md:w-3/5">
            <input
              type="text"
              value={query}
              placeholder="Search for free photos"
              className=" w-full rounded-md border-none px-5 py-3 font-semibold tracking-wide text-gray-500 placeholder:font-normal focus:outline-none"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSubmit}>
              <span className=" absolute right-0 top-1 px-2  py-2 text-center text-gray-500">
                {" "}
                <AiOutlineSearch size="25px" />{" "}
              </span>
            </button>
          </form>

          <h4 className=" flex w-full items-center space-x-2 text-sm md:w-3/5 md:text-lg">
            <span className="text-gray-300">Trending: </span>
            <span className="font-semibold">
              sunset, space, abstract, sky, dark
            </span>
            <span className="ml-2 hidden rounded-full bg-gray-400/50 transition-all duration-200 ease-linear hover:bg-gray-400/50 hover:text-gray-300/70 md:flex">
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
