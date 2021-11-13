import logo from "../../logo.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Display } from "../../components/Display/Display.jsx";
import axios from "axios";
import { useState } from "react";
import { Container } from "./styles.js";

function Login() {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [status, setStatus] = useState("");

  const handleSubmitAfter = (data) => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", data)
      .then((response) => {
        console.log(response);
        setStatus(response.statusText);
      })
      .catch((err) => {
        setStatus("error");
      });
  };

  return (
    <>
      <Container onSubmit={handleSubmit(handleSubmitAfter)}>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Tela de Login</h2>
        <span>
          <input type="text" placeholder="Username" {...register("username")} />
          {errors.username?.message}
          <input
            password="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password?.message}
          <button type="submit">Login</button>
        </span>
      </Container>
      {status && <Display status={status} />}
    </>
  );
}

export default Login;
