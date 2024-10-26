"use server";

import { revalidatePath } from "next/cache";

export const serverAction = async () => {
  // [car, van, lorry, truck, pickup]'

  const orders = [
    {
      produce_id: "ugHEallR66KgK_VvI6tKWRv3hnJplc",
      quantity: 5,
      need_logistics: true,
    },
  ];

  const url = "https://api.useriapp.com:5000/api/order/place";
  const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;

  const poster = (order: any) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        produce_id: order.produce_id,
        quantity: order.quantity,
        need_logistics: order.need_logistics,
      }),
    })
      .then((res) => res.json())
      .then((data: any) => console.log("posted", data));
  };

  orders.map((order) => poster(order));

  revalidatePath("/orders");
};
