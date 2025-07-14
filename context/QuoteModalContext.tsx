"use client";
import React, { createContext, useContext, useState } from "react";

interface QuoteModalContextType {
  showQuoteModal: boolean;
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(
  undefined
);

export const useQuoteModal = () => {
  const context = useContext(QuoteModalContext);
  if (context === undefined) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
};

export const QuoteModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const openQuoteModal = () => setShowQuoteModal(true);
  const closeQuoteModal = () => setShowQuoteModal(false);

  return (
    <QuoteModalContext.Provider
      value={{
        showQuoteModal,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
};
