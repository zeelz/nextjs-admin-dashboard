"use client";

import React, { useOptimistic, useRef } from "react";
import { serverAction } from "./actions";
import Button from "./button";

type Data = {
  name: string;
  color: string;
  year: string;
};

type FormProps = {
  data: Data[];
};

const Form = ({ data }: FormProps) => {
  console.log(data);

  const formRef = useRef<HTMLFormElement>(null);
  const [getter, setter] = useOptimistic(data, (state, newData: Data) => {
    return [...state, newData];
  });

  return (
    <>
      {getter.map((item, key) => (
        <div className="flex gap-4 " key={key}>
          <div className="border p-4">Name: {item.name}</div>
          <div className="border p-4">Year: {item.year}</div>
          <div className="border p-4">Color: {item.color}</div>
        </div>
      ))}

      <form
        ref={formRef}
        action={async (formData: FormData) => {
          formRef.current?.reset();
          setter({
            name: formData.get("name") as string, // type assertion here
            year: formData.get("year") as string,
            color: formData.get("color") as string,
          });
          const res = await serverAction(formData);
          // optimistically updated but server may return an error
          console.log(res);
        }}
        className="mt-4 w-1/4"
      >
        <input
          name="name"
          placeholder="name"
          className="mt-1  block w-full rounded-md border p-2"
        />
        <input
          name="year"
          placeholder="year"
          className="mt-1  block w-full rounded-md border p-2"
        />
        <input
          name="color"
          placeholder="color"
          className="mt-1  block w-full rounded-md border p-2"
        />
        <Button />
      </form>
    </>
  );
};

export default Form;
