import { useGlobalContext } from "../context/context"
import { Buttons, Loading } from "../components"

const Card = () => {
  const { loading, photos } = useGlobalContext()
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
          {photos.map((image, id) => {
            const {
              alt_description,
              likes,
              urls: { regular },
              user: {
                name,
                portfolio_url,
                profile_image: { medium },
              },
            } = image
            return (
              <article
                key={id}
                className="photo relative overflow-hidden bg-blue-200"
              >
                <img
                  src={regular}
                  alt={alt_description}
                  className="h-64 w-full object-cover object-center md:h-96"
                />
                <div className="photo-info absolute bottom-0  flex w-full translate-y-full transform items-center justify-between bg-black/50 px-4 py-2 transition-all duration-300 ease-linear">
                  <div className="text-xs text-white md:text-base">
                    <h4 className=" font-semibold tracking-wide ">{name}</h4>
                    <p className="font-light "> {likes} Likes</p>
                  </div>
                  <a href={portfolio_url} target="_blank">
                    <img
                      src={medium}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover object-center"
                    />
                  </a>
                </div>
              </article>
            )
          })}
          {loading && <Loading />}
        </div>
      </section>
    </>
  )
}

export default Card
