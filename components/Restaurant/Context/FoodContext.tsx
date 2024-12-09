'use client'
import React, { createContext, useState, useContext, useEffect } from 'react'
type Item = { id: number; name: string; price: number; description: string }

interface ModalContextType {
  isModalVisible: boolean;
  handleFoodClick: (item: Item) => void;
  handleCloseModal: () => void;
  selectedItem: Item | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<Item | null>>;

}

const defaultModalContext: ModalContextType = {
  isModalVisible: false,
  handleFoodClick: () => { },
  handleCloseModal: () => { },
  selectedItem: null,
  setSelectedItem: () => { },

};
const ModalContext = createContext<ModalContextType>(defaultModalContext);

export const useModal = () => useContext(ModalContext);
export function FoodContext({ children }: { children: React.ReactNode }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  

  const handleFoodClick = (item: Item) => { setIsModalVisible(true); setSelectedItem(item); };

  const handleCloseModal = () => { setIsModalVisible(false); setSelectedItem(null); };
  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalVisible]);
  return (
    <ModalContext.Provider value={{ isModalVisible, handleFoodClick, handleCloseModal, selectedItem, setSelectedItem, }} >
      {children}
    </ModalContext.Provider>
  )
}



