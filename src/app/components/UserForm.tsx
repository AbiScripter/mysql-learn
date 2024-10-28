// app/components/UserForm.tsx
"use client";
import { useRef } from "react";
import { addUser } from "../actions";

export default function UserForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await addUser(formData);
        formRef.current?.reset();
      }}
      className="max-w-md mx-auto mt-8 p-4"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add User
      </button>
    </form>
  );
}
