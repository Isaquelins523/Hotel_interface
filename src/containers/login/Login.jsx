import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { api } from "../../services/api";
import { Container, Title, Form, InputContainer, Button } from "./styles";
import { Link } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um e-mail válido")
        .required("O e-mail é obrigatório"),
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
      const response = await toast.promise(
        api.post("/users/login", {
          email: data.email,
          password: data.password,
        }),
        {
          pending: "Verificando seus dados...",
          success: "Seja Bem-vindo(a) 👌",
          error: "Email ou Senha Incorretos 🤯",
        }
      );

      const { token } = response.data;

      // Armazena o token no localStorage
      localStorage.setItem("token", token);

      // Redireciona para a página de hotéis após o login
      navigate("/list/hotels");
    } catch (err) {
      toast.error(
        `Erro: ${err.response?.data?.message || "Tente novamente mais tarde."}`
      );
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Login</Title>
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
        <span>
          Não possui conta? <Link to="/register">Clique aqui.</Link>
        </span>
      </Form>
    </Container>
  );
};

export default Login;
