import * as yup from 'yup';

export const createEmployeeSchema = yup.object().shape({
  email: yup.string().required('Заполните поле').email('Введите корректный email'),
  password: yup.string().required('Заполните поле').min(6, 'Минимальная длина пароля 6 символов')
});

export type CreateEmployeeSchema = yup.InferType<typeof createEmployeeSchema>;
