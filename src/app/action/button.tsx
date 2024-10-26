import React from "react";
import { useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      // pending is used to disable the button instead ternary saving... | save
      // since updated was optimistically added to the UI
      type="submit"
      className="mt-2 w-full rounded-md bg-meta-1 py-2 text-white"
    >
      Send
    </button>
  );
};

export default Button;
