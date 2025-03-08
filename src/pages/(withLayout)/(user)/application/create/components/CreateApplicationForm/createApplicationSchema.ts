import * as yup from 'yup';

export const createApplicationSchema = yup.object().shape({
  amount: yup.string().required('Сумма обязательна'),
  term: yup.string().required('Срок обязателен')
});

export type CreateApplicationSchema = yup.InferType<typeof createApplicationSchema>;
