"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFieldArray, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";
import { toast } from "sonner";
import { useProjectStore } from "@/zustand/useProjectStore";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Project } from "../components/data-table-project";

// Component cho contentList khi typeContent === 'list'
function ListContentFields({
  form,
  parentIndex,
}: {
  form: any;
  parentIndex: number;
}) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: `contentDetail.${parentIndex}.contentList`,
  });

  return (
    <div className="space-y-2">
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center gap-2">
          <FormField
            key={field.id}
            control={form.control}
            name={`contentDetail.${parentIndex}.contentList.${index}`}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Textarea placeholder="Enter content" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="button"
            size="icon"
            variant="destructive"
            onClick={() => remove(index)}
          >
            <Minus size={16} />
          </Button>
        </div>
      ))}
      <Button type="button" variant="secondary" onClick={() => append("")}>
        <Plus className="mr-1" size={16} /> Add item
      </Button>
    </div>
  );
}
type DetailProject = {
  id: string;
  name: string;
  description: string;
  content: string;
  image: string;
  urlGithub?: string;
  urlDemo?: string;
  role: string;
  client: string;
  type: string;
  status: string;
  backgroundColor: string;
  startDate: string;
  contentDetail: {
    typeContent: string;
    content?: string;
    contentList?: string[];
  }[];
};

const formSchema = z.object({
  id: z.string().min(2, {
    message: "Id must be at least 2 characters.",
  }),
  name: z.string().min(2, {
    message: "Name project must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  content: z.string().min(2, {
    message: "Content must be at least 2 characters.",
  }),
  image: z.string().nonempty({
    message: "Image URL cannot be empty.",
  }),
  urlGithub: z.string().optional(),
  urlDemo: z.string().optional(),
  role: z.string().nonempty({
    message: "Role cannot be empty.",
  }),
  client: z.string().nonempty({
    message: "Client cannot be empty.",
  }),
  type: z.enum(["web", "mobile", "desktop"], {
    errorMap: () => ({ message: "Please select a valid type." }),
  }),
  status: z.enum(["completed", "in-progress", "upcoming"], {
    errorMap: () => ({ message: "Please select a valid status." }),
  }),
  backgroundColor: z.string().nonempty({
    message: "Background color cannot be empty.",
  }),
  startDate: z.string().nonempty({
    message: "Start Date cannot be empty.",
  }),
  contentDetail: z.array(
    z.object({
      typeContent: z.enum(["title", "text", "image", "video", "list"]),
      content: z.string().optional(),
      contentList: z.array(z.string()).optional(),
    })
  ),
});

export default function ProjectDetailPage() {
  const projects = useProjectStore((state) => state.projects);
  const { detail } = useParams();


  useEffect(() => {
    if (detail !== "new") {
      const foundProject = projects.find((p) => p.id === detail);
      const defaultValue = foundProject
        ? {
            id: foundProject.id ?? "",
            name: foundProject.name ?? "",
            description: foundProject.description ?? "",
            content: foundProject.content ?? "",
            image: foundProject.image ?? "",
            urlGithub: foundProject.urlGithub ?? "",
            urlDemo: foundProject.urlDemo ?? "",
            role: foundProject.role ?? "",
            client: foundProject.client ?? "",
            type: (foundProject.type as "web" | "mobile" | "desktop") ?? "web", // Default to "web" if not provided
            status: (foundProject.status as "completed" | "in-progress" | "upcoming") ?? "completed",
            backgroundColor: foundProject.backgroundColor ?? "",
            startDate: foundProject.startDate ?? "",
            contentDetail:
              typeof foundProject.contentDetail === "string"
                ? JSON.parse(foundProject.contentDetail)
                : Array.isArray(foundProject.contentDetail)
                  ? foundProject.contentDetail
                  : [],
          }
        : undefined;
      if (defaultValue) {
        form.reset(defaultValue);
        
      }
      console.log("defaultValue", defaultValue);
    }
  }, [projects]);
  const mutationAdd = useMutation(
    api.projectManage.projectManage.addNewProject
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      name: "",
      description: "",
      image: "",
      urlGithub: "",
      urlDemo: "",
      role: "", // Default value for role
      client: "", // Default value for client
      type: "web", // Default value for type
      status: "completed", // Default value for status
      backgroundColor: "bg-blue-200", // Default background color
      startDate: "", // Default value for start date
      contentDetail: [],
    },
  });

  const onSubmit = (values: DetailProject) => {

    const newValue = {
      ...values,
      urlGithub: values.urlGithub ?? "",
      urlDemo: values.urlDemo ?? "",
      contentDetail: JSON.stringify(values.contentDetail),
    };
    // Here you can handle the form submission, e.g., send data to an API or update state
    mutationAdd(newValue)
      .then(() => {
        toast.success("Project added successfully");
        form.reset();
      })
      .catch((error) => {
        toast.error("Error adding project:", error);
      });
  };
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "contentDetail",
  });
  return (
    <div className="mt-2 p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Id Project */}
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Id Project</FormLabel>
                  <FormControl>
                    <Input placeholder="Id project" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Name Project */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name Project</FormLabel>
                  <FormControl>
                    <Input placeholder="Name project" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Description Project */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description project" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Description Content */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Content project" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Id Project */}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Url image Banner</FormLabel>
                <FormControl>
                  <Input placeholder="Url image" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* Url Demo, Github */}
          <div className="grid grid-cols-4 gap-4">
            {/* Url Demo */}

            <FormField
              control={form.control}
              name="urlGithub"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Url GitHub</FormLabel>
                  <FormControl>
                    <Input placeholder="Url Github" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Url Github */}
            <FormField
              control={form.control}
              name="urlDemo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Url Demo</FormLabel>
                  <FormControl>
                    <Input placeholder="Url Demo" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Role */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Input placeholder="Role" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Client */}
            <FormField
              control={form.control}
              name="client"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client</FormLabel>
                  <FormControl>
                    <Input placeholder="Client" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Select Type , Status */}
          <div className="grid grid-cols-4 gap-4">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type Project</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full">
                      <SelectItem value="web">Web</SelectItem>
                      <SelectItem value="mobile">Mobile</SelectItem>
                      <SelectItem value="desktop">Desktop</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status Project</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full">
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="in-progress">In-progress</SelectItem>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/*Background Color*/}
            <FormField
              control={form.control}
              name="backgroundColor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Background Color</FormLabel>
                  <FormControl>
                    <Input placeholder="Background Color" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/*Start Date*/}
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <Input placeholder="Start Date" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            {fields.map((field, index) => (
              <Card
                key={field.id}
                className="bg-transparent border border-gray-300"
              >
                <CardHeader>
                  <CardTitle>Content Detail {index + 1}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {/* Loại content */}
                  <FormField
                    control={form.control}
                    name={`contentDetail.${index}.typeContent`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type of content</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl className="w-full">
                            <SelectTrigger>
                              <SelectValue placeholder="Select type of content" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="title">Title</SelectItem>
                            <SelectItem value="text">Text</SelectItem>
                            <SelectItem value="image">Image</SelectItem>
                            <SelectItem value="video">Video</SelectItem>
                            <SelectItem value="list">List</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  {/* Nội dung text */}
                  {form.watch(`contentDetail.${index}.typeContent`) !==
                    "list" && (
                    <FormField
                      control={form.control}
                      name={`contentDetail.${index}.content`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Content</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Enter content" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  )}

                  {/* Nếu là list */}
                  {form.watch(`contentDetail.${index}.typeContent`) ===
                    "list" && (
                    <div className="space-y-2">
                      <FormLabel>List of content</FormLabel>
                      {/* List Field Array */}
                      <ListContentFields form={form} parentIndex={index} />
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex justify-end space-x-2">
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => remove(index)}
                  >
                    <Minus />
                  </Button>
                </CardFooter>
              </Card>
            ))}

            {/* Add content block */}
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                append({
                  typeContent: "title",
                  content: "",
                  contentList: [],
                })
              }
            >
              <Plus className="mr-2" /> Thêm Content
            </Button>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
