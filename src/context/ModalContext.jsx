import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [toastMessage, setToastMessage] = useState(null);

  const openEnquiry = (courseName = "") => {
    setSelectedCourse(courseName);
    setIsEnquiryOpen(true);
  };

  const closeEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  const openBrochure = (courseName = "") => {
    setSelectedCourse(courseName);
    setIsBrochureOpen(true);
  };

  const closeBrochure = () => {
    setIsBrochureOpen(false);
  };

  const showToast = (message, type = "success") => {
    setToastMessage({ message, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <ModalContext.Provider
      value={{
        isEnquiryOpen,
        isModalOpen: isEnquiryOpen,
        openEnquiry,
        openEnquiryModal: openEnquiry,
        closeEnquiry,
        closeEnquiryModal: closeEnquiry,
        isBrochureOpen,
        openBrochure,
        closeBrochure,
        selectedCourse,
        setSelectedCourse,
        toastMessage,
        showToast
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext) || {};
export default ModalContext;
