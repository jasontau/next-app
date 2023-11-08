import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import schema from '../schema'

interface Props {
  params: { id: string }
}

export async function GET(
  request: NextRequest,
  { params }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id)
    }
  })

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 })

  return NextResponse.json(user)
}

export async function PUT(request: NextRequest, { params }: Props) {

  const body = await request.json()
  const validation = schema.safeParse(body)
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id)
    }
  })

  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 })

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id
    },
    data: {
      name: body.name,
      email: body.email
    }
  })

  return NextResponse.json(updatedUser)
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id)
    }
  })

  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

  const deletedUser = await prisma.user.delete({
    where: {
      id: user.id
    }
  })

  return NextResponse.json({})
}