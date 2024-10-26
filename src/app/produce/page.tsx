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

const produce2: ProduceType[] = [
  {
    id: "up1jp9gVKPaIJWR7y0sLqoIM3kXHKj",
    name: "Cassava",
    harvest_time: 4,
    harvest_time_metric: "week",
    quantity: 20,
    quantity_metric: "ton",
    amount: 4000,
    description: "Approved Next generation cassava variety",
    location: "Benue, Nigeria",
    created_at: "2024-09-02T08:01:58.765Z",
    updated_at: "2024-10-15T08:12:46.709Z",
    farmer_id: "hvRzMlcucNTkdJeFs-fbYLipllZgYX",
    farm_id: "793woiw80h1IoIe4Mf6BkuC-fT4b3x",
    photos: [
      "https://res.cloudinary.com/dq2zvvxx8/image/upload/v1725263458/psasq5qgbxliufziv5ei.jpg",
      "https://res.cloudinary.com/dq2zvvxx8/image/upload/v1725263457/to98klhidza8emhm0y4q.jpg",
    ],
    disabled: true,
    farm: {
      name: "Georgewill Farms",
    },
    farmer: {
      name: "Keme Kenneth",
    },
  },
];

// export const metadata: Metadata = {
//   title: "Farms - Useri Dashboard",
//   description: "",
// };

function Produce() {
  const [produce, setProduce] = useState<ProduceType[]>([]);

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
      <ProduceTable produce={produce} />

      {/* <CreateButton action={serverAction} name={"Create produce"} /> */}
    </DefaultLayout>
  );
}

export default Produce;
