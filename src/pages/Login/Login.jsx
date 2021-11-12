import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Display from "../../components/Display/Display";
import api from "../../server/api";

import api from "../../server/api";
import { Switch, Route } from "react-router-dom";

function Login() {
  const schema = yup.object().shape({
    Username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    revolver: yupResolver(schema),
  });

  const [status, setStatus] = useState("");

  const handleSubmitAfter = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        reset(); //Limpa os campos

        setStatus(response.status);
        
      })
      .catch((err) => {
        toast.error("Requisição Falhou!");
      });
  };

  const Input = ({ name, password, register, error, ...rest }) => {
    console.log(rest);
    return (
      <>
        <input {...register(name)} {...rest} />
        <div>{error && <span>{error}</span>}</div>
      </>
    );
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <form onSubmit={handleSubmit(handleSubmitAfter)}>
            <Input
              placeholder="Username"
              register={register}
              name="name"
              error={errors.name?.message}
            />
            <Input
              placeholder="Senha"
              register={register}
              name="password"
              type="password"
              error={errors.password?.message}
            />
            <button type="submit">Enviar</button>
          </form>
        </Route>
      </Switch>
    </div>
  );
}

export default Login;
