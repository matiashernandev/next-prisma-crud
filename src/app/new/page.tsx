"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

export default function NewPage() {
  const { register, handleSubmit } = useForm()

  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post("/api/tasks", data)

    router.push("/")

    console.log(res)
  })

  return (
    <section className="h-screen flex items-center justify-center">
      <form onSubmit={onSubmit}>
        <input
          {...register("title")}
          type="text"
          placeholder="Escribe un título"
          className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-black block mb-2"
        />

        <textarea
          {...register("description")}
          placeholder="Write a description"
          className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-black block w-full"
        ></textarea>

        <button className="bg-sky-500 px-3 py-1 rounded-md text-white mt-2">
          Create
        </button>
      </form>
    </section>
  )
}
