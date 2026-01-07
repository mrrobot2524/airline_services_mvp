import { useState } from 'react';
import { Service, SelectedService } from '../types';

export const useServices = () => {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);

  const addService = (service: Service) => {
    setSelectedServices(prev => {
      const existing = prev.find(s => s.id === service.id);

      if (existing) {
        return prev.map(s =>
          s.id === service.id
            ? { ...s, quantity: s.quantity + 1 }
            : s
        );
      }

      return [...prev, { ...service, quantity: 1 }];
    });
  };

  const removeService = (serviceId: string) => {
    setSelectedServices(prev => {
      const existing = prev.find(s => s.id === serviceId);

      if (existing && existing.quantity > 1) {
        return prev.map(s =>
          s.id === serviceId
            ? { ...s, quantity: s.quantity - 1 }
            : s
        );
      }

      return prev.filter(s => s.id !== serviceId);
    });
  };

  const getTotalAmount = () => {
    return selectedServices.reduce(
      (sum, service) => sum + service.price * service.quantity,
      0
    );
  };

  return {
    selectedServices,
    addService,
    removeService,
    getTotalAmount
  };
};