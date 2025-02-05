import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as yup from "yup";
import { api } from "../../services/api";
import { Container, Title, Form, InputContainer, Button } from "./styles";
import { Link } from "react-router-dom";

export const Register = () => {
  const schema = yup
    .object({
      name: yup
        .string()
        .min(3, "O nome deve ter pelo menos 3 caracteres")
        .required("O nome é obrigatório"),
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
        api.post("/users/register", {
          name: data.name,
          email: data.email,
          password: data.password,
        }),
        {
          pending: "Verificando seus dados",
          success: "Cadastrado(a) com Sucesso 👌",
          error: "Email ou Senha Incorretos🤯",
        }
      );
    } catch (err) {
      toast.error(`Erro: ${err.message || "Tente novamente mais tarde."}`);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Register</Title>
        <InputContainer>
          <label>Nome</label>
          <input type="text" {...register("name")} />
          <p>{errors?.name?.message}</p>
        </InputContainer>

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

        <Button type="submit">Cadastrar</Button>

        <span>
          Já possui conta? <Link to="/login">Clique aqui.</Link>
        </span>
      </Form>
    </Container>
  );
};

export default Register;
