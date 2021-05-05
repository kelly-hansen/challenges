import * as Yup from 'yup'

export const formSchema = Yup.object().shape({
  firstName: Yup.string().trim().max(15).required('Required'),
  lastName: Yup.string().trim().max(20).required('Required'),
  email: Yup.string().email().required('Required')
})
