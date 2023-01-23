import { GeneralContainer, ContainerInput, ContainerForm } from "./style";
import { dataSchema } from "../../validations/DataFormValidations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import api from "../../services/api";

interface IDataForm {
  amount: number;
  installments: number;
  mdr: number;
  days?: number[];
}

const Form = () => {
  const [valueAmount, setValueAmount] = useState("");
  const [valueMdr, setValueMdr] = useState("");
  const [valueDays, setValueDays] = useState<number[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataForm>({
    resolver: yupResolver(dataSchema),
  });

  const formSubmit = (data: IDataForm) => {
    data.amount =
      parseFloat(valueAmount.replace("R$", "").trim().replace(",", ".")) * 100;
    data.mdr = parseFloat(valueMdr.replace("%", "").trim().replace(",", "."));
    data.installments = Number(data.installments);
    data.days = valueDays;
    if (data.days.length === 0) {
      delete data.days;
    }

    api
      .post("", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <GeneralContainer>
      <ContainerForm>
        <h2>Simule Sua Antecipação</h2>
        <form onSubmit={handleSubmit(formSubmit)}>
          <ContainerInput>
            <label htmlFor="amount">Informe o valor da venda</label>
            <input
              type="text"
              placeholder="Ex: R$ 1000,00"
              {...register("amount")}
              value={valueAmount}
              onChange={(event) => {
                const newValue = event.target.value.replace("R$", "");
                setValueAmount(`R$ ${newValue.trim()}`);
              }}
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
            <input
              type="text"
              placeholder="Ex: %4"
              {...register("mdr")}
              value={valueMdr}
              onChange={(event) => {
                const newValue = event.target.value.replace("%", "");
                setValueMdr(`%${newValue.trim()}`);
              }}
            />
            <span>{errors.mdr?.message}</span>
          </ContainerInput>

          <ContainerInput>
            <label htmlFor="days">Dias a serem calculados a atencipação</label>
            <input
              type="text"
              placeholder="Ex: 15,30,45"
              {...register("days")}
              onChange={(event) => {
                const newValue = event.target.value
                  .trim()
                  .split(",")
                  .map((elem) => Number(elem));
                setValueDays(newValue);
              }}
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
