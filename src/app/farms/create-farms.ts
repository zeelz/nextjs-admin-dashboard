"use server";
export const serverAction = async () => {
  const farms = [
    {
      name: "Green Harvest Farms",
      type: "crop",
      location: "Zaria, Kaduna State",
      description:
        "A crop farm known for large-scale production of maize and sorghum.",
      farm_size_id: "a6b8ae48-0db9-4c54-af70-1817e55c8960",
    },
    {
      name: "Afolayan Poultry",
      type: "poultry",
      location: "Osogbo, Osun State",
      description: "Produces high-quality layers and broilers for the market.",
      farm_size_id: "215d73c6-8acc-482d-8a7d-5e6c97a11e46",
    },
    {
      name: "Ebube Agro Farms",
      type: "crop",
      location: "Aba, Abia State",
      description:
        "This farm is known for its rich production of cassava and vegetables.",
      farm_size_id: "fe593dc6-477d-4d5c-ae4b-1230b7b6fa47",
    },
    {
      name: "Oluwakemi Poultry",
      type: "poultry",
      location: "Ibadan, Oyo State",
      description: "A medium-sized poultry farm producing eggs and meat.",
      farm_size_id: "7bf9e9fe-9611-44e2-a2b5-db69aff701e1",
    },
    {
      name: "Suleiman Crop Ventures",
      type: "crop",
      location: "Lokoja, Kogi State",
      description: "Specializes in rice and yam cultivation.",
      farm_size_id: "2ffd0672-b485-4a9f-a290-8cf7c8ae3b30",
    },
    {
      name: "Isa Poultry",
      type: "poultry",
      location: "Gusau, Zamfara State",
      description: "Poultry farm focusing on local chicken breeds.",
      farm_size_id: "f46615d0-8b1b-43de-978f-9308dcf2399e",
    },
    {
      name: "Ejike Agro Produce",
      type: "crop",
      location: "Umuahia, Abia State",
      description: "A productive farm for cassava and plantain farming.",
      farm_size_id: "a18e4002-cd49-42d7-ae3d-429721c3b689",
    },
    {
      name: "Chidinma Poultry Farms",
      type: "poultry",
      location: "Nsukka, Enugu State",
      description: "A well-managed poultry farm specializing in broilers.",
      farm_size_id: "2f92e6f6-fe1f-4efb-b9f8-bc21c8cb3a0f",
    },
    {
      name: "Dare Crop Farms",
      type: "crop",
      location: "Ado-Ekiti, Ekiti State",
      description: "Produces premium-grade maize and yam.",
      farm_size_id: "e071c1c6-21e5-4eb7-9475-b20502e89fb0",
    },
    {
      name: "Adewale Poultry",
      type: "poultry",
      location: "Akure, Ondo State",
      description: "A small-scale poultry farm focusing on egg production.",
      farm_size_id: "215d73c6-8acc-482d-8a7d-5e6c97a11e46",
    },
  ];

  const url = "https://api.useriapp.com:5000/api/farm/register";
  const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;

  const poster = (farm: any) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: farm.name,
        type: farm.type,
        location: farm.location,
        description: farm.description,
        farm_size_id: farm.farm_size_id,
      }),
    })
      .then((res) => res.json())
      .then((data: any) => console.log("posted", data));
  };

  farms.map((farm) => poster(farm));
};
