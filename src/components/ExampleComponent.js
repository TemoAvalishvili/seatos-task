import React from "react";
import useToast from "../hooks/useToast";
import Toast from "../components/Toast/Toast";
import Modal from "../components/Modal/Modal";

const ExampleComponent = () => {
  const { toasts, showToast } = useToast();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleClick = (status) => {
    showToast({
      status,
      title: `${status.charAt(0).toUpperCase() + status.slice(1)}!`,
      message: `${
        status.charAt(0).toUpperCase() + status.slice(1)
      } notification triggered!`,
    });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Toast Notification Example</h1>

      <div className="button-container">
        <button
          className="button success"
          onClick={() => handleClick("success")}
        >
          Show Success Toast
        </button>
        <button className="button error" onClick={() => handleClick("error")}>
          Show Error Toast
        </button>
        <button className="button info" onClick={() => handleClick("info")}>
          Show Info Toast
        </button>
        <button
          className="button warning"
          onClick={() => handleClick("warning")}
        >
          Show Warning Toast
        </button>
      </div>

      <h1>Modal Example</h1>

      <div className="modal-button-container">
        <button className="modal-button" onClick={openModal}>
          Open Modal
        </button>
      </div>

      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            toast={toast}
            className={`toast ${toast.status}`}
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Modal"
        size="medium"
      >
        Modal body for different content
        <button className="modal-button" onClick={() => alert("Confirmed")}>
          Confirm
        </button>
      </Modal>
    </div>
  );
};

export default ExampleComponent;
