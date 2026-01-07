import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { SelectedService } from '../types';
import { Button } from './Button';
import { getIcon } from '../utils/iconMapper';

interface OrderSummaryProps {
  selectedServices: SelectedService[];
  totalAmount: number;
  onRemove: (serviceId: string) => void;
  onCheckout: () => void;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  selectedServices,
  totalAmount,
  onRemove,
  onCheckout
}) => {
  if (selectedServices.length === 0) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center h-fit">
        <MdShoppingCart className="mx-auto text-gray-400 mb-4" size={64} />
        <h2 className="text-xl font-semibold text-gray-600 mb-2">Корзина пуста</h2>
        <p className="text-sm text-gray-500">Выберите услуги из списка</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 h-fit">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Итого</h2>

      <div className="space-y-3 mb-6">
        {selectedServices.map(service => (
          <div 
            key={service.id} 
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="text-blue-500 text-2xl">
              {getIcon(service.icon, { size: 24 })}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900 truncate">
                  {service.name}
                </span>
                {service.quantity > 1 && (
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                    x{service.quantity}
                  </span>
                )}
              </div>
              <span className="text-sm font-semibold text-blue-500">
                {(service.price * service.quantity).toLocaleString('ru-RU')} ₽
              </span>
            </div>
            <Button
              variant="danger"
              size="small"
              onClick={() => onRemove(service.id)}
              className="flex-shrink-0"
            >
              ×
            </Button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between py-4 border-t-2 border-gray-200 mb-6">
        <span className="text-lg font-semibold text-gray-900">Общая сумма:</span>
        <span className="text-2xl font-bold text-blue-500">
          {totalAmount.toLocaleString('ru-RU')} ₽
        </span>
      </div>

      <Button
        variant="primary"
        size="large"
        fullWidth
        onClick={onCheckout}
      >
        Оформить заказ
      </Button>
    </div>
  );
};