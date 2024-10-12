import { Button, Link, Grid, TextField, Typography, Alert } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailAndPassword } from '../../store/auth'


const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@') , 'El correo debe tener un @' ],
  password: [ (value) => value.length > 5 , 'La contraseña debe tener al menos 6 caracteres'],
  displayName: [ (value) => value.length > 0 , 'El nombre es requerido']
}

export const RegisterPage = () => {

  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const {status, errorMessage} = useSelector(state => state.auth)

  //explicacion de esta linea: useMemo es una funcion que recibe un callback y un arreglo de dependencias, si alguna de las dependencias cambia, se ejecuta el callback
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])


  const {displayName ,email, password, onInputChange, formState,
    isFormValid, emailValid, displayNameValid, passwordValid
  } = useForm(formData, formValidations)



  const onSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    if(!isFormValid) return;
    dispatch( startCreatingUserWithEmailAndPassword(formState) )
  }



  return (
    
    <AuthLayout title='Crear Cuenta'>

        <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
          <Grid container >
            <Grid item xs={ 12 } sx={{mt: 2}}>
              <TextField
                label='Nombre completo'
                type='text'
                placeholder='tu nombre'
                fullWidth
                name='displayName'
                value={displayName}
                onChange={onInputChange}
                // las !! convierten el string en un booleano . ejemploL: !!'hola' = true
                error={ !!displayNameValid && formSubmitted }
                helperText={displayNameValid}
              />
            </Grid>
            <Grid item xs={ 12 } sx={{mt: 2}}>
              <TextField
                label='Correo'
                type='text'
                placeholder='email@google.com'
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
                error={ !!emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid>
            <Grid item xs={ 12 } sx={{mt: 2}}>
              <TextField
                label='Contraseña'
                type='password'
                placeholder='contraseña'
                fullWidth
                name='password'
                value={ password }
                onChange={onInputChange}
                error={ !!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>
            <Grid container spacing={2} sx={{mb: 2, mt: 1}} >
            <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none' } >
                <Alert severity='error'>
                  {errorMessage}
                </Alert>
              </Grid>
              <Grid item xs={ 12 } >
                <Button disabled={isCheckingAuthentication} type='submit' variant='contained' fullWidth sx={{p: 1.2}}>
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr: 1}}>Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login' sx={{cursor: 'pointer'}}>
                Ingresar
              </Link>
          </Grid>
        </form>
    </AuthLayout>

       



      
  )
}

