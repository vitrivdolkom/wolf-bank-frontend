import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  email: yup.string().required('Email обязателен').email('Введите корректный email'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(6, 'Пароль должен быть не менее 6 символов')
});

export type RegisterSchema = yup.InferType<typeof registerSchema>;
