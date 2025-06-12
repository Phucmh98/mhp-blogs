"use client";
import { sendMail, SendMailParams } from "@/api/sendMail";
import { ShineBorder } from "@/components/commons/magicui/shine-border";
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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const formContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

const FormContact = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm<SendMailParams>();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formContactSchema>>({
    resolver: zodResolver(formContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    const result = await sendMail(data);
    if (result.success) {
      toast.success("Mail sent successfully!");
      form.reset();
    } else {
      toast.error(`Failed to send mail!`);
    }
    setLoading(false);
  };
  return (
    <Card className="relative col-span-1 overflow-hidden  w-full bg-transparent text-gray-600 dark:text-gray-300">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <CardHeader>
        <CardTitle className="text-3xl">Contact Form</CardTitle>
        <CardDescription>
          Please contact me directly at{" "}
          <a
            href="mailto:mhphuc.98@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Phuc%2C%0AI%20just%20visited%20your%20site%20and%20wanted%20to%20connect."
            className="font-bold hover:underline trasition-all duration-200"
          >
            mhphuc.98@gmail.com
          </a>{" "}
          or drop your info here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 ">
            <div className="grid gap-4">
              <div className="flex gap-2">
                <div className="flex flex-col gap-2">
                  <Label>Your name</Label>
                  <Input
                    {...register("name", {
                      required: "Name is required",
                    })}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm font-light">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Email Address</Label>
                  <Input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm font-light">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Your Message</Label>
                <Textarea
                  {...register("message", {
                    required: "Message is required",
                  })}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm font-light">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <p className="text-sm">
                I&apos;ll never share your data with anyone else.
              </p>
            </div>
            <CardFooter className="p-0">
              <Button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer flex items-center gap-2"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {loading ? "Sending..." : "Send message"}
              </Button>
            </CardFooter>
          </form> */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell me about your project..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-sm">
              I&apos;ll never share your data with anyone else.
            </p>

            <CardFooter className="p-0">
              <Button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer flex items-center gap-2"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {loading ? "Sending..." : "Send message"}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FormContact;
