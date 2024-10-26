import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";
import { OrderType } from "@/types/order";
import OrdersTable from "@/components/Tables/OrdersTable";

const orders: OrderType[] = [
  {
    produce: "Tomatoes",
    farm: "Green Savannah Farms",
    buyer: "Lagos Fresh Market",
    orderId: 99882001,
    quantityType: "Crates",
    quantityValue: 20,
    amount: 50000,
    logistics: true,
    deliveryAddress: "123 Market Street, Lagos, Nigeria",
  },
  {
    produce: "Yam",
    farm: "Ebony Soil Farms",
    buyer: "Enugu Groceries",
    orderId: 99882002,
    quantityType: "Tubers",
    quantityValue: 100,
    amount: 150000,
    logistics: true,
    deliveryAddress: "45 Ogui Road, Enugu, Nigeria",
  },
  {
    produce: "Cassava",
    farm: "Riverbend Agriculture",
    buyer: "Benin City Produce",
    orderId: 99882003,
    quantityType: "Bags",
    quantityValue: 50,
    amount: 75000,
    logistics: true,
    deliveryAddress: "67 New Lagos Road, Benin City, Nigeria",
  },
  {
    produce: "Pineapples",
    farm: "Sunrise Agro Ventures",
    buyer: "Abuja Fruit Market",
    orderId: 99882004,
    quantityType: "Cartons",
    quantityValue: 10,
    amount: 30000,
    logistics: false,
    deliveryAddress: "88 Garki Area 2, Abuja, Nigeria",
  },
  {
    produce: "Rice",
    farm: "Golden Grain Farms",
    buyer: "Kano Rice Distributors",
    orderId: 99882005,
    quantityType: "Bags",
    quantityValue: 200,
    amount: 400000,
    logistics: true,
    deliveryAddress: "12 Murtala Mohammed Way, Kano, Nigeria",
  },
  {
    produce: "Maize",
    farm: "Emerald Fields Ranch",
    buyer: "Jos Agro Traders",
    orderId: 99882006,
    quantityType: "Sacks",
    quantityValue: 80,
    amount: 120000,
    logistics: false,
    deliveryAddress: "34 Rayfield Road, Jos, Nigeria",
  },
  {
    produce: "Palm Oil",
    farm: "Palm Grove Plantation",
    buyer: "Owerri Oil Merchants",
    orderId: 99882007,
    quantityType: "Drums",
    quantityValue: 15,
    amount: 225000,
    logistics: false,
    deliveryAddress: "76 Okigwe Road, Owerri, Nigeria",
  },
  {
    produce: "Pepper",
    farm: "Jade Valley Farms",
    buyer: "Kaduna Spices Ltd.",
    orderId: 99882008,
    quantityType: "Bags",
    quantityValue: 30,
    amount: 60000,
    logistics: true,
    deliveryAddress: "55 Independence Way, Kaduna, Nigeria",
  },
  {
    produce: "Bananas",
    farm: "Willow Creek Farm",
    buyer: "Ibadan Fresh Mart",
    orderId: 99882009,
    quantityType: "Bunches",
    quantityValue: 50,
    amount: 100000,
    logistics: true,
    deliveryAddress: "23 Dugbe Street, Ibadan, Nigeria",
  },
  {
    produce: "Fish",
    farm: "Blue Sky Farmstead",
    buyer: "Port Harcourt Fish Depot",
    orderId: 99882010,
    quantityType: "Kilograms",
    quantityValue: 100,
    amount: 200000,
    logistics: false,
    deliveryAddress: "99 Oil Mill Road, Port Harcourt, Nigeria",
  },
];

export const metadata: Metadata = {
  title: "Orders - Useri Dashboard",
  description: "",
};

function Users() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Orders" />
      <OrdersTable orders={orders} />
    </DefaultLayout>
  );
}

export default Users;
