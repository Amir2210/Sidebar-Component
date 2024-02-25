import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export function AppContext({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function onToggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen)
  }

  function onToggleModal() {
    setIsModalOpen(!isModalOpen)
  }


  return (
    <GlobalContext.Provider value={{ onToggleModal }}>
      {children}
    </GlobalContext.Provider>
  )
}
