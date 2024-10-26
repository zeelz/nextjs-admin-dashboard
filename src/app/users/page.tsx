import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableTwo from "@/components/Tables/TableTwo";
import { Metadata } from "next";
import React from "react";

import { UserData } from "@/types/user";

const userData: UserData[] = [
  {
    id: "hvRzMlcucNTkdJeFs-fbYLipllZgYX",
    name: "Keme Kenneth",
    email: "keme.kenneth@gmail.com",
    phone: "2349023223433",
    role: "farmer",
  },
  {
    id: "2IHp-d7c8CFBDwtFf1Dg1PyD9b65e2",
    name: "Abi Farmer",
    email: "abitob2015@gmail.com",
    phone: "447792395168",
    role: "farmer",
  },
  {
    id: "ph0LaNE1Qh_AZxsKLxkVEHPL-fM5JQ",
    name: "aruwa hayatu attai",
    email: "hayatuaruwaattai@gmail.com",
    phone: "2347065743568",
    role: "farmer",
  },
  {
    id: "YA3WoFpvp0Knuj6J1WLPHJ_arArR0A",
    name: "Abiye Tob Farmer",
    email: "cibonje@hotmail.co.uk",
    phone: "2349013780185",
    role: "farmer",
  },
  {
    id: "2Mxj9WGUng_nAAdkEIpWByp4YM-iB1",
    name: "Faith Uweni",
    email: "zeelz.co@gmail.com",
    phone: "2349023223433",
    role: "buyer",
  },

  {
    id: "0OuZnlZZdBldX9OEujOOcWIET7oKvO",
    name: "Daniel Kenneth",
    email: "dannyandk@gmail.com",
    phone: "2349023223433",
    role: "transporter",
  },
  {
    id: "QlrOh4mJ7ndKRMjewSeRM32bbWfsLO",
    name: "Abiye Transport",
    email: "	abitob2015@gmail.com",
    phone: "447792395168",
    role: "transporter",
  },
];

export const metadata: Metadata = {
  title: "Users - Useri Dashboard",
  description: "",
};

function Users() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" />
      <TableTwo data={userData} />
    </DefaultLayout>
  );
}

export default Users;
