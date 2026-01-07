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
  } = useServices();

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="pb-8 min-h-screen">
      <header className="bg-blue-500 shadow-md px-4 py-8 text-white text-center">
        <h1 className="mb-2 font-bold text-4xl">Дополнительные услуги</h1>
        <p className="opacity-95 text-lg">Сделайте ваш полет еще комфортнее</p>
      </header>

      <main className="mx-auto mt-8 px-4 max-w-7xl">
        <div className="items-start gap-6 grid grid-cols-1 lg:grid-cols-[1fr_400px]">
          <ServicesList 
            services={mockServices}
            onAddService={addService}
          />

          <div className="lg:top-6 lg:sticky">
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