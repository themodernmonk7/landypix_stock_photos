import React, { useContext, useEffect, useState } from "react"

//** =================== URLs =================== */
const clientID = `?client_id=0OkjcFuPSJZjSwGEuC9e8S7MI6p4YY8vgeSgY9Xa6D4`
const mainURL = `https://api.unsplash.com/photos/`
const searchURL = `https://api.unsplash.com/search/photos/`
//** =========================================== */

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])

  // Fetch Images
  const fetchImages = async () => {
    setLoading(true)
    let url
    url = `${mainURL}${clientID}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        console.log("it worked")
      }
    })
    return () => window.removeEventListener("scroll", event)
  }, [])

  return (
    <AppContext.Provider value={{ loading, photos }}>
      {children}
    </AppContext.Provider>
  )
}

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
