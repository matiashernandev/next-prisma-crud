import { NextResponse } from "next/server"

interface Params {
    params: { id: string }
}

export function GET(request: Request, { params }: Params) {
    return NextResponse.json(`Obteniendo tarea ${params.id} `)
}
export function PUT(request: Request, { params }: Params) {
    return NextResponse.json(`Modificando tarea ${params.id} `)
}
export function DELETE(request: Request, { params }: Params) {
    return NextResponse.json(`Eleminando tarea ${params.id} `)
}
