import { prisma } from "@/libs/prisma"
import Error from "next/error"
import { NextResponse } from "next/server"

export async function GET() {
  const tasks = await prisma.task.findMany()
  return NextResponse.json(tasks)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const newTask = await prisma.task.create({
      data
    })
    console.log(data)
    return NextResponse.json(newTask)
  } catch (error) {
    return NextResponse.json({ error: "F" })
  }
}
