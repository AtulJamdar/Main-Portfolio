import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, details, budget } = body;

    // Validate inputs
    if (!name || !email || !details) {
      return NextResponse.json(
        { error: "Invalid data: name, email, and details are required parameters." },
        { status: 400 }
      );
    }

    // Standard RFC email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // Simulate database write / email transmit cycle
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Log internally for debugging purposes
    console.log(`[PROPOSAL CAPTURED]:`, { name, email, details, budget, timestamp: new Date().toISOString() });

    return NextResponse.json(
      {
        success: true,
        message: "Project specifications received successfully.",
        metadata: {
          clientName: name,
          sprintScoped: true
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(`[CONTACT API ERROR]:`, error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
