"use server";

import { cookies } from "next/headers";
import request from "@/config/request";
import { redirect } from "next/navigation";
import axios from "axios";
async function loginAction(data: { phone_number: string; password: string }) {
  const cookieStore = await cookies();
  const phone_number = data.phone_number as string;
  const password = data.password as string;
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_APP_API_URL + "/login11111",
      {
        phone_number,
        password,
      }
    );
    cookieStore.set("authToken", response.data.access_token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    });
  } catch (error) {
    return { error: "Invalid credentials" };
  }

  redirect("/dashboard");
}

export default loginAction;
