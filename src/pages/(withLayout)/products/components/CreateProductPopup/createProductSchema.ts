import * as yup from 'yup';

export const createProductSchema = yup.object().shape({
  productCode: yup.string().required('Заполните поле'),
  minInterest: yup.string().required('Заполните поле'),
  maxInterest: yup.string().required('Заполните поле'),
  minTerm: yup.string().required('Заполните поле'),
  maxTerm: yup.string().required('Заполните поле'),
  minPrincipalAmount: yup.string().required('Заполните поле'),
  maxPrincipalAmount: yup.string().required('Заполните поле'),
  minOriginationAmount: yup.string().required('Заполните поле'),
  maxOriginationAmount: yup.string().required('Заполните поле')
});

export type CreateProductSchema = yup.InferType<typeof createProductSchema>;
