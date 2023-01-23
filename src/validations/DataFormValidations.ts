import * as yup from "yup";

export const dataSchema = yup.object().shape({
  amount: yup.string().required("Valor da venda é obrigatório"),
  installments: yup
    .string()
    .required("Parcelas é obrigatório")
    .matches(/(^[0-9]+$)/g, "Parcelas deve conter apensa números"),
  mdr: yup.string().required("Percentual é obrigatório"),
  days: yup.string().notRequired(),
});
