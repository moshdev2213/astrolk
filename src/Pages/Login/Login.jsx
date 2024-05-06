import { Input, Button } from '@nextui-org/react'
import React, { useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import application from '../../Utils/FireBase/FireBase'
import { Navigate, useNavigate } from 'react-router-dom'
import LocalStore from '../../Utils/LocalStore/LocalStore'
import AuthYup from '../../Utils/Validation/AuthYup'
import { useFormik } from 'formik'
import Toaster from '../../Utils/Toaster/Toaster'

export default function Login() {

  const isAuthenticated = () => {
    const tokenData = LocalStore.getToken()
    return tokenData && tokenData.email
  }
  if (isAuthenticated()) return <Navigate to={'/user/home'} />

  const db = getDatabase()
  const auth = getAuth(application)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const initValues = {
    email: '',
    password: '',
  }
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(application);
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        let email = result.user.email
        let name = result.user.displayName
        LocalStore.storeToken({ name, email });
        navigate('/user/home')
      } else {
        alert('error login')
      }
    } catch (error) {
      alert(error)
    }
  }

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: initValues,
    validationSchema: AuthYup.loginSchema,
    onSubmit: async (values) => {
      setLoading(true)
      Toaster.loadingToast("Validating User .......")
      try {
        const { email, password } = values;
        const result = await signInWithEmailAndPassword(auth, email, password);
        if (result.user)
          navigate('/user/home');
      } catch (error) {
        // alert(error.message);
        Toaster.justToast('error', error.message, () => {
          Toaster.dismissLoadingToast()
        })
      } finally {
        setLoading(false)
        Toaster.dismissLoadingToast()
      }
    }
  })

  return (
    <section className="h-screen w-full flex flex-row items-center p-4 md:p-0"
    >
      {/* left */}
      <div className="bg-logbanner h-full w-full hidden md:w-3/5 md:flex flex-col">
      </div>
      {/* right */}
      <div className=" h-full w-full md:w-2/5 flex flex-col justify-center items-center gap-14 lg:p-16">
        <div className='flex flex-col w-full gap-1 justify-center items-center'>
          <h1 className='font-bold text-5xl'>LOGIN</h1>
          <p>welcome space explorer</p>
        </div>
        <div className='flex flex-col w-full'>
          <form onSubmit={handleSubmit} className="w-full">
            <Input
              className='mb-10'
              size='lg'
              type="email"
              label="Email"
              name="email"
              onChange={handleChange}
              value={values.email}
              isInvalid={errors.email && touched.email}
              labelPlacement="outside"
              placeholder="Enter your email"
              errorMessage={errors.email && touched.email && errors.email}
            />
            <Input
              size='lg'
              type="password"
              label="Password"
              name="password"
              onChange={handleChange}
              value={values.password}
              isInvalid={errors.password && touched.password}
              labelPlacement="outside"
              placeholder="Enter your Password"
              errorMessage={errors.password && touched.password && errors.password}
            />

            {/* button */}
            <Button type='submit' size='lg' className='mt-14 rounded-lg bg-yellow-400 text-white text-xl font-bold w-full'>Login</Button>
            <Button type='button' onClick={handleGoogleClick} size='lg' className='rounded-lg bg-gray-600 text-white text-xl font-bold w-full mt-5'>Sign In with Google</Button>
          </form>
        </div>
        <div className='flex flex-col w-full gap-5'>
          {/* //todo */}
        </div>
      </div>
    </section>
  )
}
