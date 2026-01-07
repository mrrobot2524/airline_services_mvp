import { 
  MdLuggage, 
  MdAirlineSeatReclineNormal, 
  MdFlightTakeoff, 
  MdStar, 
  MdRestaurant, 
  MdShield 
} from 'react-icons/md';

export const iconMap: { [key: string]: React.ComponentType<any> } = {
  MdLuggage,
  MdAirlineSeatReclineNormal,
  MdFlightTakeoff,
  MdStar,
  MdRestaurant,
  MdShield,
};

export const getIcon = (iconName: string, props?: any) => {
  const Icon = iconMap[iconName];
  return Icon ? <Icon {...props} /> : null;
};