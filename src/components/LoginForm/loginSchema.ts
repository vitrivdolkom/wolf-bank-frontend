import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required('Имя пользователя обязательно')
    .min(3, 'Имя пользователя должно быть не менее 3 символов'),
  email: yup.string().required('Email обязателен').email('Введите корректный email'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(6, 'Пароль должен быть не менее 6 символов')
});

export type LoginSchema = yup.InferType<typeof loginSchema>;
