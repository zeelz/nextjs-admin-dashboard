"use server";
export const serverAction = async () => {
  // [car, van, lorry, truck, pickup]'

  const vehicles = [
    {
      name: "Pickup Truck",
      type: "pickup",
      plate_number: "HYG88094",
      location: "Minna, Niger State",
      photos: [
        "https://res.cloudinary.com/dq2zvvxx8/image/upload/v1729102505/useri-pickup_qrafqv.webp",
      ],
    },
  ];

  const url = "https://api.useriapp.com:5000/api/vehicle/register";
  const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;

  const poster = (vehicle: any) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: vehicle.name,
        type: vehicle.type,
        plate_number: vehicle.plate_number,
        location: vehicle.location,
        photos: vehicle.photos,
      }),
    })
      .then((res) => res.json())
      .then((data: any) => console.log("posted", data));
  };

  vehicles.map((vehicle) => poster(vehicle));
};
