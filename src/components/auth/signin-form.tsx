"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export const SigninForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.replace("/home");
  };

  return (
    <>
      <Input
        placeholder="Digite seu e-mail"
        value={emailField}
        onChange={(t) => setEmailField(t)}
        icon={faHeart}
      />

      <Input
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(t) => setPasswordField(t)}
        password
      />

      <button onClick={handleEnterButton}>Entrar</button>
    </>
  );
};
