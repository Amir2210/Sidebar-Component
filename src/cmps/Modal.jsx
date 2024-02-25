import { useGlobalContext } from '../AppContext'

export function Modal() {
  const { onToggleModal, isModalOpen } = useGlobalContext()
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : 'modal-overlay'}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button onClick={onToggleModal} className="close-modal-btn">X</button>
      </div>
    </div>
  )
}