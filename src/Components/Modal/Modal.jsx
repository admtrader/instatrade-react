import React from 'react'
import styles from './Modal.module.css';
import { RiCloseLine } from 'react-icons/ri'


const Modal = ({ setIsOpen, setIsDeleted }) => {

  const handleDelete = () => {
    setIsDeleted(true)
    setIsOpen(false)
  }

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)}>
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}><u>Dialog</u></h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)} >
            <RiCloseLine style={{ marginBottom: '-3px'}}/>
          </button>
          <div className={styles.modalContent}>
            Are You sure you want to delete this post?
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={handleDelete} >
                Delete
              </button>
              <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
                Cancel
              </button>

            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Modal