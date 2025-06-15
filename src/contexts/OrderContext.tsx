import React, { createContext, useContext, useState } from 'react';

export interface OrderItem {
  id: string;
  serviceId: string;
  serviceName: string;
  parameters: {
    size: string;
    material: string;
    color: string;
    lamination?: boolean;
    quantity: number;
    urgency: string;
  };
  files: File[];
  price: number;
  status: 'draft' | 'processing' | 'printing' | 'ready' | 'delivered' | 'cancelled';
  createdAt: Date;
  deliveryMethod: 'pickup' | 'delivery';
  customerInfo: {
    name: string;
    phone: string;
    email: string;
    address?: string;
  };
}

interface OrderContextType {
  currentOrder: Partial<OrderItem> | null;
  orders: OrderItem[];
  updateCurrentOrder: (data: Partial<OrderItem>) => void;
  submitOrder: (order: OrderItem) => void;
  clearCurrentOrder: () => void;
  getOrderById: (id: string) => OrderItem | undefined;
  updateOrderStatus: (id: string, status: OrderItem['status']) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentOrder, setCurrentOrder] = useState<Partial<OrderItem> | null>(null);
  const [orders, setOrders] = useState<OrderItem[]>(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const updateCurrentOrder = (data: Partial<OrderItem>) => {
    setCurrentOrder(prev => ({ ...prev, ...data }));
  };

  const submitOrder = (order: OrderItem) => {
    const newOrders = [order, ...orders];
    setOrders(newOrders);
    localStorage.setItem('orders', JSON.stringify(newOrders));
    setCurrentOrder(null);
  };

  const clearCurrentOrder = () => {
    setCurrentOrder(null);
  };

  const getOrderById = (id: string) => {
    return orders.find(order => order.id === id);
  };

  const updateOrderStatus = (id: string, status: OrderItem['status']) => {
    const updatedOrders = orders.map(order =>
      order.id === id ? { ...order, status } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <OrderContext.Provider value={{
      currentOrder,
      orders,
      updateCurrentOrder,
      submitOrder,
      clearCurrentOrder,
      getOrderById,
      updateOrderStatus
    }}>
      {children}
    </OrderContext.Provider>
  );
};