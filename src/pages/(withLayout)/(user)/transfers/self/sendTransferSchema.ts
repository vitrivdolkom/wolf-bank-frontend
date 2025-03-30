import * as yup from 'yup';

export const sendTransferSchema = yup.object().shape({
  fromAccount: yup.string().required('Счет списания обязателен'),
  toAccount: yup
    .string()
    .required('Счет зачисления обязателен')
    .test(
      'accounts-match',
      'Счет списания и счет зачисления не должны совпадать',
      function (value) {
        return this.parent.fromAccount !== value;
      }
    ),
  amount: yup.string().required('Сумма обязательна')
});

export type SendTransferSchema = yup.InferType<typeof sendTransferSchema>;
