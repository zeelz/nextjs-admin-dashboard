export type ProduceType = {
  id: string;
  name: string;
  harvest_time: number;
  harvest_time_metric: string;
  quantity: number;
  quantity_metric: string;
  amount: number;
  description: string;
  location: string;
  created_at: string;
  updated_at: string;
  farmer_id: string;
  farm_id: string;
  photos: string[];
  disabled: true;
  farm: {
    name: string;
  };
  farmer: {
    name: string;
  };
};
