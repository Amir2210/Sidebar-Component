import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

export function AppContext({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <GlobalContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, isModalOpen, setIsModalOpen }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext