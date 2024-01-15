import { object, string } from 'yup'

const cardItemScheme = object().shape({
  title: string()
    .min(7, 'Title should contain at least 7 characters')
    .max(25, 'Maximum count of characters is 25')
    .required(),
  description: string()
    .min(20, 'Description should contain at least 20 characters')
    .max(250, 'Maximum count of characters is 250')
    .required(),
})

export default cardItemScheme
