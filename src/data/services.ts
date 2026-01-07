import { Service } from '../types';

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'Дополнительный багаж',
    description: 'Дополнительное место багажа до 23 кг',
    price: 2500,
    category: 'baggage',
    icon: 'MdLuggage'
  },
  {
    id: '2',
    name: 'Выбор места у окна',
    description: 'Гарантированное место у окна',
    price: 800,
    category: 'seat',
    icon: 'MdAirlineSeatReclineNormal'
  },
  {
    id: '3',
    name: 'Приоритетная посадка',
    description: 'Посадка в самолет в первой группе',
    price: 1200,
    category: 'boarding',
    icon: 'MdFlightTakeoff'
  },
  {
    id: '4',
    name: 'Бизнес-зал в аэропорту',
    description: 'Доступ в бизнес-зал перед вылетом',
    price: 3500,
    category: 'lounge',
    icon: 'MdStar'
  },
  {
    id: '5',
    name: 'Питание на борту',
    description: 'Горячее питание премиум-класса',
    price: 1500,
    category: 'meal',
    icon: 'MdRestaurant'
  },
  {
    id: '6',
    name: 'Страховка путешествия',
    description: 'Комплексная страховка на время поездки',
    price: 950,
    category: 'insurance',
    icon: 'MdShield'
  }
];