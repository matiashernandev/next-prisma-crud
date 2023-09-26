import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

interface Params {
  params: { id: string }
}

export async function GET(request: Request, { params }: Params) {
  try {
    const task = await prisma.task.findFirst({
      where: { id: Number(params.id) }
    })

    if (!task) {
      return NextResponse.json("Task not found")
    }

    return NextResponse.json(task)
  } catch (error) {
    console.error(error)
  }

  return NextResponse.json(`Task not found`)
}
export async function PUT(request: Request, { params }: Params) {
  const data = await request.json()

  const taskUpdated = await prisma.task.update({
    where: { id: Number(params.id) },
    data
  })
  return NextResponse.json(taskUpdated)
}

export async function DELETE(request: Request, { params }: Params) {
  const task = await prisma.task.delete({
    where: {
      id: Number(params.id)
    }
  })

  return NextResponse.json(`Eleminando tarea ${params.id} `)
}
