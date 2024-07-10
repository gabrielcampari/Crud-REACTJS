import { useForm } from "react-hook-form";
import { api } from "../../lib/axios";
import "./styles.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; 
import { useNavigate  } from "react-router-dom";

const postSchema = yup.object({
  title: yup.string().required('Informe o campo a seguir!'),
  description: yup.string().required('Informe o campo a seguir!'),
  content: yup.string().required('Informe o campo a seguir!')
})

export function Form({ title, textButton }) {

  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(postSchema)
  });    

  function handleCreationPost(data) {
    api.post("/posts", data); 
    console.log("Criado com sucesso!");
    navigate("/")
    reset(); 
  }

  return (
    <form onSubmit={handleSubmit(handleCreationPost)}>
      <h2>{title}</h2>
      <div className="field">
        <input placeholder="Título" {...register("title")}/>
        {errors.title?.message}
      </div>

      <div className="field">
        <input placeholder="Descrição" {...register("description")}/>
        {errors.description?.message}
      </div>

      <div className="field">
        <textarea placeholder="Conteúdo" {...register("content")}/>
        {errors.content?.message}
      </div>

      <button type="Submit">{textButton}</button>
    </form>
  );
}
