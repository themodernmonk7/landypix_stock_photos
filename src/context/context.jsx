import React, { useContext, useEffect, useState, useRef } from "react"

//** =================== URLs =================== */
const clientID = `?client_id=0OkjcFuPSJZjSwGEuC9e8S7MI6p4YY8vgeSgY9Xa6D4`
/**
 * TODO: Refactor the clientID error, I am getting in console.log
 // const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}` 
 */
const mainURL = `https://api.unsplash.com/photos/`
const searchURL = `https://api.unsplash.com/search/photos/`
//** =========================================== */

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")
  const mounted = useRef(false)
  const [newImages, setNewImages] = useState(false)

  // Fetch Images
  const fetchImages = async () => {
    setLoading(true)
    let url
    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`

    if (query) {
      url = `${searchURL}${clientID}${urlPage}${urlQuery}`
    } else {
      url = `${mainURL}${clientID}${urlPage}`
    }

    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results
        } else if (query) {
          return [...oldPhotos, ...data.results]
        } else {
          return [...oldPhotos, ...data]
        }
      })
      setNewImages(false)
      setLoading(false)
    } catch (error) {
      setNewImages(false)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [page])

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    if (!newImages) return
    if (loading) return
    setPage((oldPage) => oldPage + 1)
  }, [newImages])

  const event = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 10
    ) {
      setNewImages(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", event)
    return () => window.removeEventListener("scroll", event)
  }, [])

  return (
    <AppContext.Provider
      value={{ loading, photos, page, query, setPage, setQuery, fetchImages }}
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
