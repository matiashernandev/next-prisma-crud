import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

export async function GET() {
    const result = await prisma.task.findMany()
    console.log(result)
    return NextResponse.json("Obteniendo Tareas")
}

export async function POST(request: Request) {
    const data = await request.json()
    const newTask = await prisma.task.create({
        data
    })
    console.log(data)
    return NextResponse.json(newTask)
}
