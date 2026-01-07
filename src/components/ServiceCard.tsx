import React from 'react';
import { Service } from '../types';
import { Button } from './Button';
import { getIcon } from '../utils/iconMapper';

interface ServiceCardProps {
  service: Service;
  onAdd: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onAdd }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:border-blue-500 flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <div className="text-blue-500 text-4xl flex-shrink-0">
          {getIcon(service.icon, { size: 40 })}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {service.name}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="text-2xl font-bold text-blue-500">
          {service.price.toLocaleString('ru-RU')} ₽
        </div>
        <Button
          variant="primary"
          size="medium"
          onClick={() => onAdd(service)}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};