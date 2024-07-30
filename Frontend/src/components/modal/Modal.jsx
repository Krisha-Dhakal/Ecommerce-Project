import { useEffect } from "react";

const Modal = ({ isVisible, onModalClose, children }) => {
  const handleClose = (e) => {
    if (e.target.id === "modalContainer") {
      onModalClose();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }
  return (
    <>
      <div
        onClick={handleClose}
        id="modalContainer"
        className="inset-0 fixed h-screen bg-black bg-opacity-40 z-40 flex items-center justify-center"
      >
        <div className="">{children}</div>
      </div>
    </>
  );
};

export default Modal;

//   /* <Modal isVisible={isVisible}
// onModalClose={() => setVisible(false)}
// ></Modal>
