"use server";
export const serverAction = async () => {
  // console.log("hello 2");

  const produce2 = [
    {
      name: "Cassava",
      harvest_time: 8,
      harvest_time_metric: "week",
      quantity: 15,
      quantity_metric: "ton",
      amount: 5000,
      location: "Umuahia, Abia State",
      description: "Fresh cassava roots harvested and ready for processing.",
      photos: [
        "https://res.cloudinary.com/dq2zvvxx8/image/upload/v1725263457/to98klhidza8emhm0y4q.jpg",
      ],
      farm_id: "yah-x2DFglASmkcaKGJJOXGkhR4J6Z",
    },
  ];

  // harvest_time_metric[day, week]
  // quantity_metric [kg, ton, bag, gram]

  const produce = [
    {
      name: "Tomatoes",
      harvest_time: 3,
      harvest_time_metric: "week",
      quantity: 5,
      quantity_metric: "ton",
      amount: 4500,
      location: "Nsukka, Enugu State",
      description: "Fresh, juicy tomatoes harvested and ready for the market.",
      photos: [
        "https://res.cloudinary.com/dq2zvvxx8/image/upload/v1729094988/useri-tomatoes_aui0qb.jpg",
      ],
      farm_id: "cv51okXVvhx10r0jr_dyCSlSfM7OLu",
    },
    {
      name: "Plantain",
      harvest_time: 5,
      harvest_time_metric: "week",
      quantity: 10,
      quantity_metric: "ton",
      amount: 2500,
      location: "Aba, Abia State",
      description:
        "Healthy plantain bunches, perfect for both home use and sale.",
      photos: [
        "https://res.cloudinary.com/dq2zvvxx8/image/upload/v1729094988/useri-tomatoes_aui0qb.jpg",
      ],
      farm_id: "zk3urfJMOmfa4jpFhl6TINCy-N02P0",
    },
  ];

  // const url = "https://reqres.in/api/todos";
  const url = "https://api.useriapp.com:5000/api/produce/add";
  const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;

  const poster = (produce: any) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: produce.name,
        harvest_time: produce.harvest_time,
        harvest_time_metric: produce.harvest_time_metric,
        quantity: produce.quantity,
        quantity_metric: produce.quantity_metric,
        amount: produce.amount,
        location: produce.location,
        description: produce.description,
        photos: produce.photos,
        farm_id: produce.farm_id,
      }),
    })
      .then((res) => res.json())
      .then((data: any) => console.log("posted", data));
  };

  produce.map((produce) => poster(produce));
};
