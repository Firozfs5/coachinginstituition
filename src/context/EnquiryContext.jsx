import React, { createContext, useContext } from 'react';
import { useModal } from './ModalContext';

const EnquiryContext = createContext();

export const EnquiryProvider = ({ children }) => {
  return <>{children}</>;
};

export const useEnquiry = () => {
  const modal = useModal();
  return {
    ...modal,
    isModalOpen: modal?.isEnquiryOpen || false,
    isEnquiryOpen: modal?.isEnquiryOpen || false,
    selectedCourse: modal?.selectedCourse || '',
    openEnquiryModal: modal?.openEnquiry || (() => {}),
    openEnquiry: modal?.openEnquiry || (() => {}),
    closeEnquiryModal: modal?.closeEnquiry || (() => {}),
    closeEnquiry: modal?.closeEnquiry || (() => {}),
    showToast: modal?.showToast || (() => {}),
    toastMessage: modal?.toastMessage || null,
  };
};

export default useEnquiry;
