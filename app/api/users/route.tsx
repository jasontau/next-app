// GET
// POST
// PUT - update
import schema from './schema'
import { NextRequest, NextResponse } from "next/server";

// adding NextRequest param prevents caching
export function GET(request: NextRequest) {
  // fetch users from db
  return NextResponse.json([
    { id: 1, name: "Jason" },
    { id: 2, name: "Bob" }
  ])
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body)
  // validate
  if (!validation.success) return NextResponse.json(validation.error.errors, {status: 400})

  // if invalid, return 400

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 })
}