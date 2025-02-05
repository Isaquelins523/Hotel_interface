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
        .min(3, "O preço deve ter pelo menos 3 dígitos")
        .required("Digite um valor"),
      image: yup
        .mixed()
        .test(
          "fileRequired",
          "A imagem é obrigatória",
          (value) => !!value?.length
        ),
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
    const token = localStorage.getItem("token"); // Obtém o token do localStorage

    if (!token) {
      toast.error("Erro: Usuário não autenticado!");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("location", data.location);
    formData.append("price", data.price);
    formData.append("image", data.image[0]); // O arquivo de imagem selecionado

    try {
      await toast.promise(
        api.post("/hotels", formData, {
          headers: {
            Authorization: `Bearer ${token}`, // Adiciona o token no header
            "Content-Type": "multipart/form-data", // Necessário para upload de arquivos
          },
        }),
        {
          pending: "Verificando seus dados",
          success: "Hotel Cadastrado com Sucesso 👌",
          error: "Erro ao cadastrar hotel 🤯",
        }
      );
    } catch (err) {
      toast.error(
        `Erro: ${err.response?.data?.message || "Tente novamente mais tarde."}`
      );
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Cadastrar Hotel</Title>
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

        <InputContainer>
          <label>Imagem</label>
          <input type="file" {...register("image")} />
          <p>{errors?.image?.message}</p>
        </InputContainer>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Products;
