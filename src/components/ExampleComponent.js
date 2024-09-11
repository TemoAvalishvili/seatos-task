import React, { useState } from "react";
import useToast from "../hooks/useToast"; // Changed here
import Toast from "./Toast/Toast";
import Modal from "./Modal/Modal";

const ExampleComponent = () => {
  const { toasts, showToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <button onClick={() => handleClick("success")}>Show Success Toast</button>
      <button onClick={() => handleClick("error")}>Show Error Toast</button>
      <button onClick={() => handleClick("info")}>Show Info Toast</button>
      <button onClick={() => handleClick("warning")}>Show Warning Toast</button>
      <button onClick={openModal}>Open Modal</button>

      {/* Render toasts */}
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}

      {/* Render modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="My Modal"
        size="medium"
      >
        <p>This is the body content of the modal.</p>
        <button onClick={() => alert("Confirmed")}>Confirm</button>
      </Modal>
    </div>
  );
};

export default ExampleComponent;
