import * as yup from 'yup'

class AuthYup {
    loginSchema = yup.object({
        password: yup.string().required(),
        email: yup.string().required(),
    })
}


export default AuthYup = new AuthYup();