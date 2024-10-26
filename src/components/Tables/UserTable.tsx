import { UserData } from "@/types/user";
import { enumColors } from "@/types/eums";

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

const UserTable = () => {
  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Users{" "}
        <span
          className="rounded-sm bg-meta-3 px-1 py-[2px] text-[10px] font-normal text-white"
          style={{ verticalAlign: "super" }}
        >
          Recent
        </span>
      </h4>

      <div className="text-lg">
        <div className="flex rounded-sm bg-gray-2 dark:bg-meta-4">
          <div className="w-1/2 p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="w-1/2 p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              User Type
            </h5>
          </div>
        </div>

        {userData.map((user, key) => (
          <div
            className={`flex ${
              key === userData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="w-1/2 p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{user.name}</p>
            </div>

            <div className="w-1/2 p-2.5 xl:p-5">
              {/* <p className="text-black dark:text-white">{user.userType}</p> */}
              <p
                className={`inline-block rounded-md text-base bg-${enumColors[user.role]} __bg-meta-8 px-3 py-1 capitalize text-white`}
              >
                {user.role}
              </p>
            </div>
          </div>
        ))}

        <a
          href="#"
          className="my-4 border-t border-stroke pt-4 text-end hover:text-primary md:block"
        >
          {" "}
          See All Users{" "}
        </a>
      </div>
    </div>
  );
};

export default UserTable;
