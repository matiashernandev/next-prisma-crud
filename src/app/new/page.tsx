"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

export default function NewPage({ params }: { params: { id: string } }) {
  const { register, handleSubmit, setValue } = useForm()
  const router = useRouter()

  useEffect(() => {
    if (params.id) {
      axios.get(`/api/tasks/${params.id}`).then((res) => {
        setValue("title", res.data.title)
        setValue("description", res.data.description)
      })
    }
  }, [])

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await axios.put(`/api/tasks/${params.id}`, data)
    } else {
      await axios.post("/api/tasks", data)
    }

    router.push("/")
    router.refresh()
  })

  const handleDelete = async () => {
    if (confirm("Are you sure?")) {
      await axios.delete(`/api/tasks/${params.id}`)
      router.push("/")
      router.refresh()
    }
  }

  return (
    <section className="h-[calc(100vh-7rem)] flex items-center justify-center">
      <form className="w-1/4" onSubmit={onSubmit}>
        <input
          {...register("title")}
          type="text"
          placeholder="Escribe un título"
          className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-black block mb-2 w-full"
        />

        <textarea
          {...register("description")}
          placeholder="Escribe una description"
          className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-black block w-full"
        ></textarea>

        <div className="flex justify-between">
          <button className="bg-sky-500 px-3 py-1 rounded-md text-white mt-2">
            {params.id ? "Update" : "Create"}
          </button>

          {params.id ? (
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-500 px-3 py-1 rounded-md text-white mt-2"
            >
              Delete
            </button>
          ) : (
            ""
          )}
        </div>
      </form>
    </section>
  )
}
