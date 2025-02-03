import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as yup from "yup";
import { api } from "../../services/api";
import { Container, Title, Form, InputContainer, Button } from "./styles";

export const Products = () => {
  const schema = yup
    .object({
      name: yup
        .string()
        .min(3, "O nome deve ter pelo menos 3 caracteres")
        .required("O nome é obrigatório"),
      location: yup.string().required("A localização é obrigatória"),
      price: yup
        .number()
        .min(3, "O preço deve ter pelo menos 3 digitos")
        .required("Digite um valor"),
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
        api.post("/hotels", {
          name: data.name,
          location: data.location,
          price: data.price,
        }),
        {
          pending: "Verificando seus dados",
          success: "Hotel Cadastrado com Sucesso 👌",
          error: "Dados Incorretos🤯",
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
        Cadastre seu Hotel aqui!
      </Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <label>Nome</label>
          <input type="text" {...register("name")} />
          <p>{errors?.name?.message}</p>
        </InputContainer>

        <InputContainer>
          <label>Localização</label>
          <input type="text" {...register("location")} />
          <p>{errors?.location?.message}</p>
        </InputContainer>

        <InputContainer>
          <label>Preço</label>
          <input type="number" {...register("price")} />
          <p>{errors?.price?.message}</p>
        </InputContainer>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Products;
