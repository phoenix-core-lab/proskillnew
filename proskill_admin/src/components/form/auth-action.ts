"use client";
import { redirect } from "next/navigation";
import axios from "axios";

async function loginAction(
  data: { phone_number: string; password: string },
  setCookie: any
) {
  const phone_number = data.phone_number as string;
  const password = data.password as string;

  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_APP_API_URL + "/login",
      {
        phone_number,
        password,
      }
    );

    if (response.status === 200) {
      const token = response.data.access_token;
      const userRole = response.data.role;

      setCookie("token", token);
      setCookie("userRole", userRole);

      // Redirect to the dashboard only after successfully setting cookies
      redirect("/admin/ad-links");
    } else {
      throw new Error("Login failed with unexpected response");
    }
  } catch (error) {
    console.error("Login error:", error);
  }
  redirect("/admin/ad-links");
}

export default loginAction;
