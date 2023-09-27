"use client"
import { Task } from "@prisma/client"
import { useRouter } from "next/navigation"

interface Props {
  task: Task
}

export default function TaskCard({ task }: Props) {
  const { push } = useRouter()

  return (
    <div
      onClick={() => push(`/tasks/edit/${task.id}`)}
      key={task.id}
      className="bg-gray-900 p-3 hover:bg-gray-800 hover:cursor-pointer"
    >
      <h3 className="font-bold text-xl">{task.title}</h3>
      <p className="text-slate-300">{task.description}</p>
    </div>
  )
}
