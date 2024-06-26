"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CheckboxRemember } from "./CheckBoxRemember";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const formSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
  confirmPass: z.string(),
});

export const AuthForm = ({ changePage }: { changePage: boolean }) => {
  const nav = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPass: "",
    },
  });
  const { reset } = form;

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.username == "admin" && values.password == "admin") {
      reset();
      nav("/admin");
    } else {
      reset();
      nav("/main");
    }
  }
  useEffect(() => {
    reset();
  }, [changePage]);
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {changePage && (
            <FormField
              control={form.control}
              name="confirmPass"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <div className="w-full flex items-center justify-between">
            <div className="flex gap-3">
              <CheckboxRemember />
              <p className="text-sm text-gray-500">Remember me</p>
            </div>
            <p className="text-sm text-blue-500 cursor-pointer">
              {!changePage && "Forgot Password?"}
            </p>
          </div>
          <Button type="submit" className="bg-blue-500 w-full">
            {changePage ? "Create Account" : "Log in"}
          </Button>
        </form>
      </Form>
    </>
  );
};
