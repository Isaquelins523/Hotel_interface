import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as yup from "yup";
import { api } from "../../services/api";
import { Container, Title, Form, InputContainer, Button } from "./styles";
import { Link } from "react-router-dom";

export const Login = () => {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um e-mail válido")
        .required("o e-mail é obrigatório"),
      password: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Digite uma senha"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await toast.promise(
        api.post("/users/login", {
          email: data.email,
          password: data.password,
        }),
        {
          pending: "Verificando seus dados",
          success: "Seja Bem-vindo(a) 👌",
          error: "Email ou Senha Incorretos🤯",
        }
      );
    } catch (err) {
      toast.error(`Erro: ${err.message || "Tente novamente mais tarde."}`);
    }
  };

  return (
    <Container>
      <Title>
        Olá seja Bem-Vindo!
        <br />
        Acesse com seu E-mail e Senha.
      </Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <label>Email</label>
          <input type="email" {...register("email")} />
          <p>{errors?.email?.message}</p>
        </InputContainer>

        <InputContainer>
          <label>Senha</label>
          <input type="password" {...register("password")} />
          <p>{errors?.password?.message}</p>
        </InputContainer>

        <Button type="submit">Entrar</Button>
      </Form>
      <p>
        Não possui conta? <Link to="/register">Clique aqui.</Link>
      </p>
    </Container>
  );
};

export default Login;
