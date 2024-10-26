"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableTwo from "@/components/Tables/TableTwo";
import { Metadata } from "next";
import React, { useEffect, useState } from "react";

import { FarmType } from "@/types/farms";
import FarmTable from "@/components/Tables/FarmTable";
import { farmTypeColors } from "@/types/eums";
import { serverAction } from "./create-farms";
import { CreateButton } from "../ui/buttons/page";
import Login from "@/util/login";

const farms2: FarmType[] = [
  {
    name: "Green Savannah Farms",
    location: "Ibadan, Oyo State",
    type: "crop",
  },
  {
    name: "Sunrise Agro Ventures",
    location: "Kaduna, Kaduna State",
    type: "poultry",
  },
  {
    name: "Palm Grove Plantation",
    location: "Calabar, Cross River State",
    type: "crop",
  },
  {
    name: "Harvest Moon Farms",
    location: "Makurdi, Benue State",
    type: "livestock",
  },
  {
    name: "Emerald Fields Ranch",
    location: "Enugu, Enugu State",
    type: "poultry",
  },
  {
    name: "Nile Delta Farms",
    location: "Asaba, Delta State",
    type: "livestock",
  },
  {
    name: "Golden Grain Farms",
    location: "Zaria, Kaduna State",
    type: "crop",
  },
  {
    name: "Ebony Soil Farms",
    location: "Abakaliki, Ebonyi State",
    type: "livestock",
  },
  {
    name: "Riverbend Agriculture",
    location: "Lokoja, Kogi State",
    type: "poultry",
  },
  {
    name: "Jade Valley Farms",
    location: "Jos, Plateau State",
    type: "livestock",
  },
];

// export const metadata: Metadata = {
//   title: "Farms - Useri Dashboard",
//   description: "",
// };

function Users() {
  const [farms, setFarms] = useState<FarmType[]>([]);

  useEffect(() => {
    const url = "https://api.useriapp.com:5000/api/farm";

    const getFarms = (token: string) => {
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, //${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
        },
      })
        .then((res) => res.json())
        .then((data: any) => setFarms(data.data.farms));
    };

    Login({
      password: "Password@1",
      role: "farmer",
      email: "keme.kenneth@gmail.com",
    }).then((token) => getFarms(token));
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Farms" />
      <FarmTable farms={farms} />

      {/* <CreateButton action={serverAction} name={"Create farms"} /> */}
    </DefaultLayout>
  );
}

export default Users;
