import React from 'react';
import { Service } from '../types';
import { ServiceCard } from './ServiceCard';

interface ServicesListProps {
  services: Service[];
  onAddService: (service: Service) => void;
}

export const ServicesList: React.FC<ServicesListProps> = ({ 
  services, 
  onAddService 
}) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Доступные услуги
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map(service => (
          <ServiceCard
            key={service.id}
            service={service}
            onAdd={onAddService}
          />
        ))}
      </div>
    </div>
  );
};