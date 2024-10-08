import Product from "@/libs/models/Products";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, URLParams: any) {
  try {
    const id = URLParams.params.id;

    await connectMongoDB();

     await Product.findByIdAndDelete(id)

    return NextResponse.json({ mdg: "Deleted Successfully" });
  } catch (error) {
    return NextResponse.json({ error, msg: "Delete Error" }, { status: 400 });
  }
}
