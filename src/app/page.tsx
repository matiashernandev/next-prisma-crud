import TaskCard from "@/components/TaskCard"
import { prisma } from "@/libs/prisma"
import axios from "axios"

const loadTasks = async () => {
  // const res = await axios.get("http://localhost:3000/api/tasks")
  // console.log(res)

  const tasks = await prisma.task.findMany()
  return tasks
}

//export const revalidate = 60
export const dynamic = "force-dynamic"

export default async function HomePage() {
  const tasks = await loadTasks()

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}
