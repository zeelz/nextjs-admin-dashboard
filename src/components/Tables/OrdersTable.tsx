import { farmTypeColors } from "@/types/eums";

import { OrderType } from "@/types/order";
import React from "react";
import { Edit, View } from "../Icons";

// quantity: 10,
// need_logistics: false,
// id: "QOY673isKifF4onMmqBo...",
// status: "pending",
// quantity_metric: "ton",
// amount: 4000,
// buyer: {
//   name: "James Yakubu",
// },
// produce: {
//   name: "James Yakubu",
//   farm: {
//     name: "Kinige",
//   }
// },

const OrdersTable = ({ orders }: { orders: OrderType[] }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Orders
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-11 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Order ID</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Buyer</p>
        </div>

        <div className="col-span-2 flex items-center">
          <p className="font-medium">Produce</p>
        </div>

        <div className="col-span-2 flex items-center">
          <p className="font-medium">Farm</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Quantity</p>
        </div>
        <div className="col-span-1 flex items-center justify-end">
          <p className="font-medium">Amount (₦)</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">Logistics</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">Status</p>
        </div>

        {/* <div className="col-span-2 flex items-center">
          <p className="font-medium">Delivery Address</p>
        </div> */}
      </div>

      {orders.length > 0 &&
        orders.map((order, key) => (
          <div
            className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-11 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-1 items-center sm:flex">
              <p className="text-sm uppercase text-black dark:text-white">
                {order.id.slice(0, 8)}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {order.buyer.name}
                </p>
              </div>
            </div>
            <div className="col-span-2 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {order.produce.name}
              </p>
            </div>
            <div className="col-span-2 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {order.produce.farm.name}
              </p>
            </div>
            <div className="col-span-1 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {order.quantity} {order.quantity_metric}
                {order.quantity > 1 ? "s" : ""}
              </p>
            </div>
            <div className="col-span-1 items-center justify-end sm:flex">
              <p className="text-sm text-black dark:text-white">
                {order.amount}
              </p>
            </div>
            <div className="col-span-1 items-center justify-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {order.need_logistics ? "Yes" : "No"}
              </p>
            </div>
            <div className="col-span-1 items-center justify-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {order.status}
              </p>
            </div>
            <div className="col-span-1 flex items-center justify-end gap-4">
              <a href={"/user"} className="rounded-md border p-1">
                <View />
              </a>
              <a href={"/user"} className="rounded-md border border-meta-5 p-1">
                <Edit />
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default OrdersTable;
