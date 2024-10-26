import { revalidatePath } from "next/cache";
import { CreateButton } from "../ui/buttons/page";

const Server = async () => {
  // const url = "https://reqres.in/api/todos"
  const url = "https://jsonplaceholder.typicode.com/posts";

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  const action = async (fd: FormData) => {
    "use server";
    const data = {
      title: fd.get("title"),
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit?",
      userId: 23,
    };
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    // make post request to api and
    revalidatePath("/server");
  };
  return (
    <>
      <p>Lorem ipsum dolor sit amet consectetur.</p>

      {data.slice(90).map((i) => (
        <li key={i.id}>{i.title}</li>
      ))}
      <form action={action}>
        <input type="text" name="title" />
        <button className="border-1 border">Create Post</button>
      </form>
    </>
  );
};

export default Server;
