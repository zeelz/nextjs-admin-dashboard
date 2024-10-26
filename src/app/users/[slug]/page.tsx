"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import Link from "next/link";
import { UserData } from "@/types/user";
import { useState, useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Next.js Form Layout | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Form Layout page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

const FormLayout = () => {
  const userData: UserData = {
    id: "hvRzMlcucNTkdJeFs-fbYLipllZgYX",
    name: "Keme Kenneth",
    email: "keme.kenneth@gmail.com",
    phone: "2349023223433",
    verified: true,
    created_at: "2024-03-11T07:54:40.445Z",
    location: "Choba, Port Harcourt",
    gender: "male",
    role: "farmer",
  };

  const [user, setUser] = useState<UserData>();
  const [disabled, setDisabled] = useState(false);

  // const userId = "hvRzMlcucNTkdJeFs-fbYLipllZgYX";

  const handleEdit = (e: any) => {
    e.preventDefault();
    setDisabled(!disabled);
  };

  useEffect(() => {
    const url = `https://api.useriapp.com:5000/api/auth/login`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
      },
      body: JSON.stringify({
        password: "Password@1",
        role: "farmer",
        email: "keme.kenneth@gmail.com",
      }),
    })
      .then((res) => res.json())
      .then((data: any) => {
        setUser(data.data.user);
      });
  }, []);

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="User" />
      <div className="">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white px-16 py-8 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                User Details
              </h3>
            </div>
            {user && (
              <form action="#">
                <div className="p-6.5">
                  <div className="mb-4.5 flex flex-col flex-wrap gap-y-6 xl:flex-row">
                    <div className="w-full md:pr-4 xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        User ID
                      </label>
                      <input
                        type="text"
                        value={user.id}
                        disabled={disabled}
                        placeholder="Enter your first name"
                        className="active:__ w-full rounded-2xl border-[1.5px] border-slate-400 bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full md:pl-4 xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Name
                      </label>
                      <input
                        type="text"
                        value={user.name}
                        disabled={disabled}
                        placeholder="Enter your last name"
                        className="w-full rounded-2xl border-[1.5px] border-slate-400 bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="mb-4.5 w-full md:pr-4 xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Phone <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        value={user.phone}
                        disabled={disabled}
                        placeholder="Enter your phone number"
                        className="w-full rounded-2xl border-[1.5px] border-slate-400 bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="mb-4.5 w-full md:pl-4 xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Email <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="email"
                        value={user.email}
                        disabled={disabled}
                        placeholder="Enter your email address"
                        className="w-full rounded-2xl border-[1.5px] border-slate-400 bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full md:pr-4 xl:w-1/2">
                      <SelectGroupOne
                        label="Sex"
                        valueText={user.gender}
                        disabled={disabled}
                        selectValues={["male", "female"]}
                      />
                    </div>

                    {/* <div className="w-full md:pl-4 xl:w-1/2">
                    <SelectGroupOne
                      label="User Type"
                      selectValues={["farmer", "buyer", "transporter"]}
                    />
                  </div>
                   */}

                    <div className="mb-4.5 w-full md:pl-4 xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        User Type
                      </label>
                      <input
                        type="text"
                        value={user.role}
                        disabled={disabled}
                        className="w-full rounded-2xl border-[1.5px] border-slate-400 bg-transparent px-5 py-3 capitalize text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="mb-6 w-full">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Location
                      </label>
                      <textarea
                        rows={6}
                        className="w-full rounded-2xl border-[1.5px] border-slate-400 bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      >
                        {user.location}
                      </textarea>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4">
                    <button
                      onClick={handleEdit}
                      className="rounded-2xl border border-black-2 px-8 py-3 text-center font-medium text-black-2 hover:bg-opacity-90"
                    >
                      Edit
                    </button>

                    <button className="rounded-2xl bg-primary px-8 py-3 text-center font-medium text-gray hover:bg-opacity-90">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FormLayout;
