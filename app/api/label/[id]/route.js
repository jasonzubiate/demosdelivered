import Label from "../../../../models/label";
import { connectToDB } from "../../../../utils/database";

export async function GET(request, { params }) {
  console.log("route.js")
  console.log(params)
  try {
    await connectToDB();

    const label = await Label.findById(params.id);
    if (!label) return new Response("Label not found", { status: 404 });

    return new Response(JSON.stringify(label), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 200 });
  }
}
