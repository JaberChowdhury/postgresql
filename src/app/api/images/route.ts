import * as z from "zod";
import { formSchema } from "@/components/form";
import { client } from "@/lib/db";

export async function POST(request: Request) {
  const formData = await request.formData();

  const raw: any = {
    title: formData.get("title"),
    link: formData.get("link"),
    tags: [],
  };

  formData.forEach((value, key) => {
    if (key === "tags") {
      raw.tags.push(value.toString());
    }
  });

  const data = formSchema.parse(raw);

  const result = await client.query(
    "INSERT INTO wallpapers (title, link, tags) VALUES ($1, $2, $3) RETURNING *",
    [data.title, data.link, data.tags],
  );

  return Response.json(result.rows[0]);
}
