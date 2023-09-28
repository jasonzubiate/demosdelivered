import connectToDB from "../../../utils/database";
import Label from "../../../models/label";

export async function GET(request) {
  try {
    await connectToDB();
    const labels = await Label.find();
    if (!labels) return new Response("No labels found", { status: 404 });

    return new Response(JSON.stringify(labels), { status: 200 });
    
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
