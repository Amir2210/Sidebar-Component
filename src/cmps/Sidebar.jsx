import { useGlobalContext } from '../AppContext'
import logo from '../logo.svg'
export function Sidebar() {
  const { isSidebarOpen, onToggleSidebar } = useGlobalContext()
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" />
        <button onClick={onToggleSidebar} className='close-btn'>X</button>
      </div>
    </aside>
  )
}