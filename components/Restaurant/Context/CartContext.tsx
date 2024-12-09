'use client'
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CartItem {
    id: number,
    name: string,
    price: number,
    quantity: number,
    photo: string,
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    incrementItem: (id: number) => void;
    decrementItem: (id: number) => void;
    totalCartPrice: number;
}


const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    // const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        if (typeof window !== 'undefined') {
            const storedCart = localStorage.getItem('cartItems');
            return storedCart ? JSON.parse(storedCart) : [];
        }
        return [];
    });

    const addToCart = (item: CartItem) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                const updatedCart = prevItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
                localStorage.setItem('cartItems', JSON.stringify(updatedCart));
                return updatedCart;
            }

            const newCart = [...prevItems, item];
            localStorage.setItem('cartItems', JSON.stringify(newCart));
            return newCart;
        });
    };


    const removeFromCart = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id))
    }

    const incrementItem = (id: number) => {
        setCartItems((prev) => {
            const updatedCart = prev.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            return updatedCart;
        });
    }
    const decrementItem = (id: number) => {
        setCartItems((prev) => {
            const updatedCart = prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            ).filter((item) => item.quantity > 0);

            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const totalCartPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    useEffect(() => {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        } else {
            setCartItems([])
        }
    }, []);
    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, incrementItem, decrementItem, totalCartPrice, }}
        >
            {children}
        </CartContext.Provider>
    );
}