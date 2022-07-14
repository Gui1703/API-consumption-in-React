import React from "react";
import { Form, H1, P, Input, Button, Link, Err } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useUser } from "../../hook/UserContext";
import api from "../../services/api";
import { toast } from "react-toastify";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Digite um email válido !")
      .required("O email é obrigatório !"),
    password: yup
      .string()
      .required("A senha é obrigatória !")
      .min(6, "A senha deve conter no mínimo 6 dígitos"),
  })
  .required();

function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  function navigateTo(url) {
    navigate(`/${url}`);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post("sessions", {
        email: clientData.email,
        password: clientData.password,
      }),
      {
        pending: "Verificando seus dados",
        success: "Seja bem-vindo (a)",
        error: "Verifique seus dados",
      }
    );

    putUserData(data);

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <H1>Welcome back!</H1>
      <P>Please login to your account.</P>

      <Input placeholder="Email Andress" type="text" {...register("email")} />
      <Err>{errors.email?.message}</Err>

      <Input placeholder="Password" type="password" {...register("password")} />
      <Err>{errors.password?.message}</Err>

      <Button type="submit">LOGIN</Button>
      <Link onClick={() => navigateTo("register")}>REGISTER NOW</Link>
    </Form>
  );
}

export default Login;
