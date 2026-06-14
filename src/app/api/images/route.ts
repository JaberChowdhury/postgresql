export async function POST(request: Request) {
  const formData = await request.formData();

  const data: Record<string, any> = {};
  formData.forEach((value, key) => {
    if (key === "tags") {
      if (!data.tags) data.tags = [];
      data.tags.push(value);
    } else {
      data[key] = value;
    }
  });

  console.log("Received Form Data:", data);

  return Response.json({ success: true, data });
}
