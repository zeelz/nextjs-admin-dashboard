export type TransactionType = {
  farmer_id: string;
  order: {
    quantity: number;
    quantity_metric: string;
    produce: {
      name: string;
      photos: string[];
    };
  };
  id: string;
  amount: number;
  reference: string;
  created_at: string;
  buyer_id: string;
};
