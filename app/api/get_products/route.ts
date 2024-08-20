import Product from "@/libs/models/Products";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    console.log("MongoDB connected");

    const data = await Product.find();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error, msg: "GET Error" }, { status: 400 });
  }
}
