// GET
// POST
// PUT - update

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client"
import schema from './schema'

// adding NextRequest param prevents caching
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany()

  return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body)
  // validate
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 })

  const user = await prisma.user.findUnique({
    where: { email: body.email }
  })

  if (user) return NextResponse.json({ error: "User already exists" }, { status: 400 })

  const createdUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email
    }
  })



  return NextResponse.json(createdUser, { status: 201 })
}