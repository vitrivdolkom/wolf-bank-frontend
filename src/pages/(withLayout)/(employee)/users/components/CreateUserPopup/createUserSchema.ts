import * as yup from 'yup';

export const createUserSchema = yup.object().shape({
  email: yup.string().required('Заполните поле').email('Введите корректный email'),
  password: yup.string().required('Заполните поле').min(6, 'Минимальная длина пароля 6 символов')
});

export type CreateUserSchema = yup.InferType<typeof createUserSchema>;
