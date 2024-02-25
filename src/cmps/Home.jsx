import { useGlobalContext } from '../AppContext'

export function Home() {
  const { onToggleModal, onToggleSidebar } = useGlobalContext()
  return (
    <main>
      <button onClick={onToggleModal} className='btn'>
        show modal
      </button>
    </main>
  )
}