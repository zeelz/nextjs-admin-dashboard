"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import React, { useEffect, useState } from "react";

import { serverAction } from "./create-produce";
import { ProduceType } from "@/types/produce";
import ProduceTable from "@/components/Tables/ProduceTable";
import { CreateButton } from "../ui/buttons/page";
import Login from "@/util/login";
import { TransactionType } from "@/types/transaction";
import TransactionTable from "@/components/Tables/TransactionTable";

const transactions: TransactionType[] = [
  {
    farmer_id: "Faith Uweni",
    order: {
      quantity: 2,
      quantity_metric: "ton",
      produce: {
        name: "Yam",
        photos: ["https://res.cloudinary.com/dq2z..."],
      },
    },
    id: "0rI3w4HNYee_kcW2b...",
    amount: 154000,
    reference: "T43282473294...",
    created_at: "2023-02-07T04:51:10.738Z",
    buyer_id: "Green Harvest Farms",
  },
];

// export const metadata: Metadata = {
//   title: "Farms - Useri Dashboard",
//   description: "",
// };

function Transaction() {
  const [produce, setProduce] = useState<TransactionType[]>([]);

  useEffect(() => {
    Login({
      password: "Password@1",
      role: "farmer",
      email: "keme.kenneth@gmail.com",
    }).then((token) => {
      const url = "https://api.useriapp.com:5000/api/produce";
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data: any) => {
          setProduce(data.data.produce);
        });
    });
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Produce" />
      <TransactionTable transactions={transactions} />

      {/* <CreateButton action={serverAction} name={"Create produce"} /> */}
    </DefaultLayout>
  );
}

export default Transaction;
