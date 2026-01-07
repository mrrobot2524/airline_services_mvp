import React, { useState } from 'react';
import { ServicesList } from './components/ServicesList';
import { OrderSummary } from './components/OrderSummary';
import { Modal } from './components/Modal';
import { useServices } from './hooks/useServices';
import { mockServices } from './data/services';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    selectedServices,
    addService,
    removeService,
    getTotalAmount
  } = useServices(mockServices);

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen pb-8">
      <header className="bg-blue-500 text-white py-8 px-4 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-2">Дополнительные услуги</h1>
        <p className="text-lg opacity-95">Сделайте ваш полет еще комфортнее</p>
      </header>

      <main className="max-w-7xl mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 items-start">
          <ServicesList 
            services={mockServices}
            onAddService={addService}
          />

          <div className="lg:sticky lg:top-6">
            <OrderSummary
              selectedServices={selectedServices}
              totalAmount={getTotalAmount()}
              onRemove={removeService}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Заказ оформлен"
      >
        <p className="mb-4">
          Спасибо за ваш заказ! Общая сумма составляет{' '}
          <strong className="text-blue-500">{getTotalAmount().toLocaleString('ru-RU')} ₽</strong>
        </p>
        <p>
          Выбранные услуги будут добавлены к вашему бронированию.
        </p>
      </Modal>
    </div>
  );
};

export default App;