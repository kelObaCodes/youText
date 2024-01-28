import React, { useState, ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onYes?: () => void;
  onNo?: () => void;
  children: ReactNode;
}

interface ModalState {
  // Add any state variables here if needed
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onYes, onNo, children }) => {
  const [state, setState] = useState<ModalState>({
    // Initialize state variables if needed
  });

  if (!isOpen) {
    return null;
  }

  const handleYes = () => {
    if (onYes) {
      onYes();
    }
    onClose();
  };

  const handleNo = () => {
    if (onNo) {
      onNo();
    }
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>Delete text</h3>
          <button className="close-button" onClick={onClose}>
          <span className="material-symbols-outlined">
cancel
</span>
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="yes-button" onClick={handleYes}>
            Yes
          </button>
          <button className="no-button" onClick={handleNo}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
