"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import React, { useEffect, useState } from "react";

import { serverAction } from "./create-vehicles";
import { VehicleType } from "@/types/vehicle";
import VehicleTable from "@/components/Tables/VehicleTable";
import { CreateButton } from "../ui/buttons/page";
import Login from "@/util/login";

// export const metadata: Metadata = {
//   title: "Farms - Useri Dashboard",
//   description: "",
// };

function Vehicle() {
  const [vehicles, setVehicles] = useState<VehicleType[]>([]);

  useEffect(() => {
    Login({
      password: "Password@1",
      role: "transporter",
      email: "dannyandk@gmail.com",
    }).then((token) => {
      const url = "https://api.useriapp.com:5000/api/vehicle";
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data: any) => {
          setVehicles(data.data.vehicles);
        });
    });
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Vehicles" />
      <VehicleTable vehicles={vehicles} />

      {/* <CreateButton action={serverAction} name={"Create Vehicles"} /> */}
    </DefaultLayout>
  );
}

export default Vehicle;
