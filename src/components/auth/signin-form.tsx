"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SigninForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.push("/");
  };

  return (
    <>
      <Input
        placeholder="Digite seu e-mail"
        value={emailField}
        onChange={(t) => setEmailField(t)}
      />

      <Input
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(t) => setPasswordField(t)}
        password
      />

      <Button label="Entrar" size={1} onClick={handleEnterButton} />
    </>
  );
};
