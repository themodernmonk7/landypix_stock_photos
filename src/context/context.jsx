import React, { useContext, useEffect, useState } from "react"

//** =================== URLs =================== */
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainURL = `https://api.unsplash.com/photos/`
const searchURL = `https://api.unsplash.com/search/photos/`
//** =========================================== */

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>
}

export { AppContext, AppProvider }
