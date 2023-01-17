import { GeneralContainer, ContainerInput, ContainerForm } from "./style";
import { loginSchema } from "../../validations/loginValidations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IDataForm {
  amount: number;
  installments: number;
  mdr: number;
  days?: number[];
}

const Form = () => {
  const formSubmit = async (data: IDataForm) => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataForm>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <GeneralContainer>
      <ContainerForm>
        <h2>Simule Sua Antecipação</h2>
        <form onSubmit={handleSubmit(formSubmit)}>
          <ContainerInput>
            <label htmlFor="amount">Informe o valor da venda</label>
            <input
              type="text"
              placeholder="Ex: 1000,00"
              {...register("amount")}
            />
            <span>{errors.amount?.message}</span>
          </ContainerInput>

          <ContainerInput>
            <label htmlFor="installments">Em quantas Parcelas</label>
            <input
              type="text"
              placeholder="Ex: 12"
              {...register("installments")}
            />
            <span>{errors.installments?.message}</span>
          </ContainerInput>

          <ContainerInput>
            <label htmlFor="mdr">Informe o percentual de MDR</label>
            <input type="text" placeholder="Ex: 4" {...register("mdr")} />
            <span>{errors.mdr?.message}</span>
          </ContainerInput>

          <ContainerInput>
            <label htmlFor="days">Dias a serem calculados a atencipação</label>
            <input
              type="text"
              placeholder="Ex: 15,30,45"
              {...register("days")}
            />
            <span>{errors.days?.message}</span>
          </ContainerInput>

          <button type="submit">Simular</button>
        </form>
      </ContainerForm>
    </GeneralContainer>
  );
};

export default Form;
