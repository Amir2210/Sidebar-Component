import { useGlobalContext } from '../AppContext'
import { FaBars } from 'react-icons/fa';
export function Home() {
  const { onToggleModal, onToggleSidebar } = useGlobalContext()
  return (
    <main>
      <button onClick={onToggleSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={onToggleModal} className='btn'>
        show modal
      </button>
    </main>
  )
}