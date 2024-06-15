import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Router() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "admin" && password === "admin") {
      router.push("/home");
    }
  };

  return (
    <div className="">
      <span>Login</span>
      <form onSubmit={handleClick}>
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
