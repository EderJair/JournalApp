import { Google } from '@mui/icons-material'
import { Button, Link, Grid, TextField, Typography, Alert } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSingIn, startLoginWithEmailAndPassword } from '../../store/auth/thunks'
import { useMemo } from 'react'
// TAREA ASINCRONA: SIGNIFICA CUANDO UNA TAREA TARDA EN EJECUTARSE, POR EJEMPLO UNA PETICION A UNA API
// TAREA SINCRONA: SIGNIFICA QUE UNA TAREA SE EJECUTA DE MANERA INMEDIATA
const formData = {
  email: '',
  password: ''
}


export const LoginPage = () => {

  // el useSelector es una funcion que recibe un callback que recibe el estado y retorna el estado que necesitamos
  const { status, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const {email, password, onInputChange, formState} = useForm(formData)
  // explicacion: useMemo es una funcion que recibe un callback y un arreglo de dependencias, si alguna de las dependencias cambia, se ejecuta el callback
  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({email, password});
    dispatch(startLoginWithEmailAndPassword({email, password}))
  }

  const onGoogleSingIn = () => {
    console.log('Google Sing In');
    dispatch(startGoogleSingIn())
  }






  return (
    
    <AuthLayout title='Login'>
        <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
          <Grid container >
            <Grid item xs={ 12 } sx={{mt: 2}}>
              <TextField
                label='Correo'
                type='email'
                placeholder='email@google.com'
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={ 12 } sx={{mt: 2}}>
              <TextField
                label='Contraseña'
                type='password'
                placeholder='contraseña'
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{mt:2}}
                display={!!errorMessage ? '' : 'none'}
              >
                <Alert severity='error'>
                  {errorMessage}
                </Alert>
              </Grid>
            </Grid>



            <Grid container spacing={2} sx={{mb: 2, mt: 1}} >
              <Grid item xs={ 12 } sm={6} >
                <Button disabled={isAuthenticating} type='submit' variant='contained' fullWidth sx={{p: 1.2}}>
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={6}>
                <Button disabled={isAuthenticating} onClick={onGoogleSingIn} variant='contained' fullWidth sx={{p: 1.2}}>
                  <Google/>
                  <Typography sx={{ml: 1}}>
                    Google
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to='/auth/register' sx={{cursor: 'pointer'}}>
                Crear una Cuenta
              </Link>
          </Grid>
        </form>
    </AuthLayout>

       



      
  )
}
