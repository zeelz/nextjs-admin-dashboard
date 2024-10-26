import { ProduceType } from "@/types/produce";

import React from "react";

const ProduceTable = ({ produce }: { produce: ProduceType[] }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Produce
        </h4>
      </div>

      {/* name: string;
      description: string;
      location: string;

      harvest_time: number;
      harvest_time_metric: string;

      quantity: number;
      quantity_metric: string;

      amount: number;
      farm: {
        name: string;
      }; */}

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Name</p>
        </div>
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Description</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Farm</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Location</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Quantity</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Amount</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Harvest Time</p>
        </div>
      </div>

      {produce.length > 0 &&
        produce.map((produce, key) => (
          <div
            className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-1 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {produce.name}
                </p>
              </div>
            </div>
            <div className="col-span-3 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {produce.description}
              </p>
            </div>
            <div className="col-span-1 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {produce.farm.name}
              </p>
            </div>
            <div className="col-span-1 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {produce.location}
              </p>
            </div>
            <div className="col-span-1 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {produce.quantity} {produce.quantity_metric}
                {produce.quantity > 1 && "s"}
              </p>
            </div>
            <div className="col-span-1 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {produce.harvest_time} {produce.harvest_time_metric}
                {produce.harvest_time > 1 && "s"}
              </p>
            </div>

            <div className="col-span-1 flex items-center">
              <a
                href={"/user"}
                className="border-gray-300 mr-2 rounded-full border px-6 py-1 "
              >
                View
              </a>
              <a
                href={""}
                className="rounded-full bg-meta-5 px-6 py-1 text-white"
              >
                Edit
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProduceTable;
