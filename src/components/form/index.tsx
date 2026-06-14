"use client";

import * as React from "react";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export const formSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters.")
    .max(50, "Title must be at most 50 characters."),
  image: z.string().url("Please enter a valid image URL."),
  tags: z.array(z.string()).min(1, "Add at least one tag."),
});

const FormComponent = () => {
  const [tagInput, setTagInput] = React.useState("");

  const form = useForm({
    defaultValues: {
      title: "",
      image: "",
      tags: [] as string[],
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        const formData = new FormData();
        formData.append("title", value.title);
        formData.append("image", value.image);
        value.tags.forEach((tag) => formData.append("tags", tag));

        const response = await fetch("/api/images", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to submit");
        }

        toast("Submitted Successfully!", {
          description: (
            <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-muted p-4 text-sm">
              <code>{JSON.stringify(value, null, 2)}</code>
            </pre>
          ),
          // position: "bottom-right",
        });
      } catch (error) {
        toast("Submission Failed", {
          description: "There was an error submitting the form.",
          position: "bottom-right",
        });
      }
    },
  });

  return (
    <Card className="w-full sm:max-w-xl">
      <CardHeader>
        <CardTitle>Create Project</CardTitle>
        <CardDescription>
          Add a title, preview image, and some tags.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="project-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            {/* Title */}
            <form.Field
              name="title"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Title</FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="My Awesome Portfolio"
                      autoComplete="off"
                      aria-invalid={isInvalid}
                    />

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            {/* Image URL */}
            <form.Field
              name="image"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Image URL</FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      type="url"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="https://example.com/image.png"
                      aria-invalid={isInvalid}
                    />

                    <FieldDescription>
                      Paste a direct image link. A preview will appear below.
                    </FieldDescription>

                    {field.state.value && (
                      <div className="mt-4 overflow-hidden rounded-lg border">
                        <img
                          src={field.state.value}
                          alt="Preview"
                          className="h-72 w-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                          onLoad={(e) => {
                            e.currentTarget.style.display = "block";
                          }}
                        />
                      </div>
                    )}

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            {/* Tags */}
            <form.Field
              name="tags"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                const addTag = () => {
                  const tag = tagInput.trim();
                  if (!tag || field.state.value.includes(tag.toLowerCase()))
                    return;

                  field.handleChange([...field.state.value, tag.toLowerCase()]);
                  setTagInput("");
                };

                const removeTag = (tag: string) => {
                  field.handleChange(
                    field.state.value.filter((t) => t !== tag),
                  );
                };

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel>Tags</FieldLabel>

                    <div className="flex gap-2">
                      <Input
                        value={tagInput}
                        placeholder="react"
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (
                            e.key === "Enter" ||
                            e.key === "," ||
                            e.key === "Tab"
                          ) {
                            e.preventDefault();
                            addTag();
                          }
                        }}
                      />

                      <Button type="button" variant="outline" onClick={addTag}>
                        Add
                      </Button>
                    </div>

                    <FieldDescription>
                      Press <kbd>Enter</kbd>, <kbd>Tab</kbd>, or <kbd>,</kbd> to
                      add a tag.
                    </FieldDescription>

                    {field.state.value.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {field.state.value.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="cursor-pointer"
                            onClick={() => removeTag(tag)}
                          >
                            {tag} ✕
                          </Badge>
                        ))}
                      </div>
                    )}

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            form.reset();
            setTagInput("");
          }}
        >
          Reset
        </Button>

        <Button type="submit" form="project-form">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FormComponent;
