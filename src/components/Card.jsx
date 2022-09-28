import Buttons from "./Buttons"

const Card = () => {
  return (
    <>
      <section className="container mx-auto space-y-8 my-6">
        <Buttons />

        <div className="flex justify-between items-center px-3 md:px-6">
          <h1 className="text-2xl md:text-2xl text-gray-800">
            Free Stock Photos
          </h1>
          <button className="border px-2 md:px-5 py-3 rounded-md text-xl text-gray-800">
            Trending
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-3 md:gap-6 md:px-6 ">
          <article key="" className="relative overflow-hidden photo">
            <img
              src=""
              alt=""
              className="object-cover object-center w-full h-full"
            />
            <div className="bg-black/50 flex justify-between  items-center px-4 py-2 absolute bottom-0 w-full transform translate-y-full photo-info transition-all duration-300 ease-linear">
              <div className="text-white text-xs md:text-base">
                <h4 className=" font-semibold tracking-wide ">name</h4>
                <p className="font-light "> Likes</p>
              </div>
              <a href="" target="_blank">
                <img
                  src=""
                  alt=""
                  className="w-10 h-10 object-cover object-center rounded-full"
                />
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Card
