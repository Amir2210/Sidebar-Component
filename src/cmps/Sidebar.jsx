import { useGlobalContext } from '../AppContext'
import logo from '../logo.svg'
import { links } from '../data'
import { social } from '../data'
export function Sidebar() {
  const { isSidebarOpen, onToggleSidebar } = useGlobalContext()
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" />
        <button onClick={onToggleSidebar} className='close-btn'>X</button>
      </div>
      <ul className='links'>
        {links.map(link => <li key={link.id}><a href={link.url}>{link.icon} {link.text}</a></li>)}
      </ul>
      <ul className='social-links'>
        {social.map(brand => <li key={brand.id}><a href={brand.url}>{brand.icon}</a></li>)}
      </ul>
    </aside>
  )
}